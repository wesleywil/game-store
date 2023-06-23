import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { User } from "../../../utils/interfaces";

export default async function Profile() {
  const req = await fetch("http://localhost:3000/api/user", {
    cache: "no-cache",
    headers: headers(),
  });
  const user: User = await req.json();
  return (
    <div className="h-[85vh]">
      <h1 className="mt-8 text-center text-3xl font-bold">Profile</h1>
      <div className="mt-2 flex flex-col items-center justify-center">
        {user.image ? (
          <Image
            src={user.image!}
            width={80}
            height={80}
            alt="profile picture"
            className="rounded-full"
          />
        ) : (
          <div className="w-[80px] h-[80px] bg-black rounded-full"></div>
        )}

        <h1 className="text-xl font-bold">{user.name}</h1>
        <h2 className="text-sm">{user.email}</h2>
        <h3 className="text-xs">Role: {user.role}</h3>
      </div>
      <div className="w-11/12 p-2 mt-4 mx-auto flex flex-col items-center gap-2 font-semibold">
        <div className="w-24 h-24 flex justify-center items-center bg-blue-300 font-bold text-3xl text-white rounded-full">
          <h1>100</h1>
        </div>
        <Link
          href="/gamer/list"
          className="w-24 text-center py-1 bg-green-400 hover:bg-green-600 rounded"
        >
          Games
        </Link>
      </div>
    </div>
  );
}