import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(request: Request) {
  try {
    const randomGame = await prisma.$queryRawUnsafe(
      `SELECT *
      FROM game
      JOIN gamemidia ON game.id = gamemidia.gameId
      ORDER BY RAND()
      LIMIT 1;`
    );
    return NextResponse.json(randomGame);
  } catch (error) {
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}
