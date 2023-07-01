import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  console.log("SESSION=> ", session);
  try {
    if (session) {
      const user = await prisma.user.findFirst({
        where: {
          id: session.user.id,
        },
        include:{
          purchases:true,
          games:true
        }
      });
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "You're not authorized!" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred - ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);
  const { name, role } = await request.json();
  try {
    if (session) {
      const user = await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          name,
          role,
        },
      });
      return NextResponse.json({
        message: `User updated successfully - ${user}`,
      });
    }
    return NextResponse.json(
      { message: "You're not authorized to edit this user" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `An error occurred while trying to update the user - ${error}` },
      { status: 500 }
    );
  }
}
