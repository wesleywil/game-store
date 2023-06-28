import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GameMidia } from "../../../../../../utils/interfaces";

export default async function Media({ params }: { params: { id: string } }) {
  const req = await fetch(`http://localhost:3000/api/gamemidia/${params.id}`, {
    cache: "no-cache",
  });
  const gameMidia: GameMidia[] = await req.json();
  console.log("GameMidia=> ", params.id);
  return (
    <div className="h-[85vh]">
      <div className="w-11/12 mx-auto mt-8 px-4 pb-2 flex justify-between text-xl font-bold border-b-2 border-black">
        <h1>Game Medias</h1>
        <Link
          href={`/publisher/game/${params.id}/media/new`}
          className="px-2 py-1 text-sm bg-green-400 hover:bg-green-600 "
        >
          Add Media
        </Link>
      </div>
      <h1 className="mt-4 px-2 py-1 text-xl text-center ">Gallery</h1>
      <div className="h-[65vh] mt-2 px-2 py-4 flex flex-col items-center gap-2 overflow-y-auto">
        {gameMidia.length ? (
          gameMidia.map((item) => (
            <div className="flex flex-col">
              <div className="py-2 flex justify-end gap-2 text-2xl">
                <button className="text-green-400 hover:text-green-600">
                  <FaEdit />
                </button>
                <button className="text-red-400 hover:text-red-600">
                  <FaTrashAlt />
                </button>
              </div>
              <Image
                src={item.url}
                width={500}
                height={192}
                alt="game images"
              />
            </div>
          ))
        ) : (
          <div className="w-full h-48 bg-black flex justify-center items-center rounded">
            <h1 className="text-4xl font-bold text-white">NO MEDIA</h1>
          </div>
        )}
      </div>
    </div>
  );
}
