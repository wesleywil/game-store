import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  try {
    if (session) {
      const games = await prisma.game.findMany({
        where: {
          developerId: session.user.id,
        },
      });
      return NextResponse.json(games);
    }
    return NextResponse.json(
      { message: "You're not authorized!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred - ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const { title, description, price } = await request.json();
  try {
    if (session) {
      const user = await prisma.user.findFirst({
        where: { id: session.user.id },
      });
      if (user?.role === "PUBLISHER") {
        const game = await prisma.game.create({
          data: {
            title,
            description,
            price,
            developerId: user?.id!,
          },
        });
        return NextResponse.json({
          message: `New Game added successfully! - ${game}`,
        });
      } else {
        return NextResponse.json(
          {
            message:
              "Sorry, but you're not a publisher/developer, please set your role as a publisher or try in another account",
          },
          { status: 401 }
        );
      }
    }
    return NextResponse.json(
      { message: "You're not authorized!" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred - ${error}` },
      { status: 500 }
    );
  }
}
