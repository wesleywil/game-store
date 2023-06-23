import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import prisma from "../../../../prisma/client";

import { User } from "../../../../utils/interfaces";

export default async function ProfileEdit() {
  const session = await getServerSession(authOptions);
  const req = await fetch("http://localhost:3000/api/user", {
    headers: headers(),
    cache: "no-cache",
  });
  const user: User = await req.json();

  const handleSubmit = async (data: any) => {
    "use server";
    let { name, role } = Object.fromEntries(data);

    await prisma.user.update({
      where: {
        id: session?.user.id,
      },
      data: {
        name,
        role,
      },
    });
    redirect("/profile");
  };

  return (
    <div className="h-[85vh]">
      <h1 className="mt-8 text-center text-3xl font-bold">Edit</h1>
      <form
        action={handleSubmit}
        className="w-11/12 mt-8 mx-auto p-2 flex flex-col gap-3 text-xl border border-black rounded"
      >
        <input
          type="text"
          name="name"
          defaultValue={user ? user.name : ""}
          placeholder="Name's goes here"
          className="w-full px-2 py-1 rounded"
        />

        <select
          name="role"
          className="w-full px-2 py-1 rounded"
          defaultValue={user ? user.role : ""}
        >
          <option value="ROLE" disabled>
            ROLE
          </option>
          <option value="USER">USER</option>
          <option value="PUBLISHER">PUBLISHER</option>
        </select>
        <div className="flex gap-2 justify-center items-center font-semibold">
          <button className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded">
            Submit
          </button>
          <Link
            href="/profile"
            className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
