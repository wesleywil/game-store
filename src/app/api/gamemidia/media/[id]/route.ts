import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/client";

export async function GET(request:Request,{ params }: { params: { id: string } }) {
  try {
    const gameMidia = await prisma.gameMidia.findFirst({
      where: {
        id: params.id,
      },
    });
    if (!gameMidia) {
      return NextResponse.json(
        { message: "This media does not exist" },
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

export async function DELETE(request:Request,{params}:{params:{id:string}}){
  const session = await getServerSession(authOptions);
  try{
    if(session){
      const gameMedia = await prisma.gameMidia.findFirst({
        where:{
          id:params.id
        }
      });
      //verify if media exists
      if(gameMedia){
        //verify if the user is the developer of the game
        const game = await prisma.game.findFirst({
          where:{id:gameMedia.gameId}
        });
        if(game){
          await prisma.gameMidia.delete({
            where:{id:params.id}
          });
          return NextResponse.json({message:"Media deleted successfully!"})
        }
        return NextResponse.json({message:"You're not the developer/publisher of this game"},{status:401});
      }
      return NextResponse.json({message:"This media does not exist"},{status:404})
    }
      return NextResponse.json({message:"You're not authenticated to the system, please login or sign Up"},{status:401})
  }catch(error){
    return NextResponse.json(
      { error: `A server error has occurred! - ${error}` },
      { status: 500 }
    );
  }
}
