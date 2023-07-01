import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";


export async function GET(request:Request){
    try{
        const games = await prisma.game.findMany({
            include:{
                gameMidia:true
            }
        })
        return NextResponse.json(games);
    }catch(error){
        return NextResponse.json(
            { error: `A server error has occurred! - ${error}` },
            { status: 500 }
          );
    }
}