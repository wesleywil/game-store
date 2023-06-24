import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import prisma from "../../prisma/client";
import { redirect } from "next/navigation";

export const publishGame = async (data: any) => {
  "use server";
  const session = await getServerSession(authOptions);
  let { title, price, description } = Object.fromEntries(data);
  if (session) {
    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });
    const userId = user?.id;
    if (user?.role === "PUBLISHER") {
      const game = await prisma.game.create({
        data: {
          title,
          description,
          price,
          developerId: userId!,
        },
      });
      NextResponse.json({
        message: `New Game added successfully! - ${game}`,
      });
      redirect("/publisher");
    } else {
      return NextResponse.json(
        {
          message:
            "Sorry, but you're not a publisher/developer, please set your role as a publisher or try in another account",
        },
        { status: 401 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "You're not authorized!" },
      { status: 401 }
    );
  }
};
