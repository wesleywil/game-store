import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(request:Request,{ params }: { params: { id: string } }) {
  try {
    const gameMidia = await prisma.gameMidia.findMany({
      where: {
        gameId: params.id,
      },
    });
    if (!gameMidia) {
      return NextResponse.json(
        { message: "Media for this game was not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(gameMidia);
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}
