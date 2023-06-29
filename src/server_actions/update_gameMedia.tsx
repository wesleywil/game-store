import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

export const updateGameMedia = async (data: any) => {
  "use server";
  const session = await getServerSession(authOptions);
  let { id, url, description } = Object.fromEntries(data);
  if (session) {
    const gameMedia = await prisma.gameMidia.findFirst({
      where: {
        id,
      },
    });
    // verify if media exists
    if (gameMedia) {
      // verify is the user is the developer of the game
      const game = await prisma.game.findFirst({
        where: { id: gameMedia.gameId },
      });
      if (game) {
        await prisma.gameMidia.update({
          where: { id },
          data: {
            url,
            description,
          },
        });
        return redirect(`/publisher/game/${game.id}/media`);
      }
      return { message: "You're not the developer/publisher of this game" };
    }
    return { message: "Media does not exist" };
  }
  return {
    message: "You're not authenticated to the system, please log in or sign up",
  };
};
