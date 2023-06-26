import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("GAME ID=> ", params.id);
  try {
    const game = await prisma.game.findFirst({
      where: {
        id: params.id,
      },
      include: {
        gameMidia: true,
      },
    });
    if (!game) {
      return NextResponse.json({ message: "Game not found!" }, { status: 404 });
    } else {
      return NextResponse.json(game);
    }
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  try {
    if (session) {
      const gameDelete = await prisma.game.delete({
        where: {
          id: params.id,
        },
      });
      return NextResponse.json({
        message: `Game deleted successfully! - ${gameDelete}`,
      });
    }
    return NextResponse.json(
      {
        message:
          "You don't have authorization to delete this game, only the developer/publisher is allow to",
      },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  let { title, description, price } = await request.json();
  console.log("DATA COMING FROM THE FRONT=> ", { title, description, price });
  try {
    if (session) {
      const gameUpdate = await prisma.game.update({
        where: { id: params.id },
        data: {
          title,
          description,
          price,
        },
      });
      return NextResponse.json({
        message: "Game updated successfully!",
        data: gameUpdate,
      });
    } else {
      return NextResponse.json(
        {
          message:
            "You don't have authorization to update this game, only the developer/publisher is allow to",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}
