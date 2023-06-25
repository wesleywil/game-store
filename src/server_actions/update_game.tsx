import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "../../prisma/client";

export const updateGame = async (data: any) => {
  "use server";
  const session = await getServerSession(authOptions);
  let { id, title, description, price } = Object.fromEntries(data);
  if (session) {
    const game = await prisma.game.findFirst({
      where: {
        AND: [{ id }, { developerId: session.user.id }],
      },
    });
    if (game) {
      await prisma.game.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          price,
        },
      });

      return redirect("/publisher");
    }
    return {
      message: "You're not authorized to do that, or the game does not exist",
    };
  }
  return {
    message: "You don't have authorization to do this action",
  };
};
