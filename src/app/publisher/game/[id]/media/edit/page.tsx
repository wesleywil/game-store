import Link from "next/link";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { updateGameMedia } from "@/server_actions/update_gameMedia";
import { GameMidia } from "../../../../../../../utils/interfaces";

export default async function Update({ params }: { params: { id: string } }) {
  const req = await fetch(
    `http://localhost:3000/api/gamemidia/media/${params.id}`
  );
  const gameMidia: GameMidia = await req.json();

  return (
    <div className="h-[85vh] overflow-y-auto">
      <h1 className="mt-8 text-center text-3xl font-bold">Update Media</h1>
      <div className="my-2 px-2 flex flex-col gap-2 items-center">
        <h1>Description: {gameMidia.description}</h1>
        <Image src={gameMidia.url} width={500} height={192} alt="game images" />
        <FaArrowDown className="mt-2 p-1 text-2xl text-black bg-green-400 animate-bounce rounded-full" />
      </div>

      <form
        action={updateGameMedia}
        className="w-11/12 md:w-1/3 mt-8 mx-auto p-2 flex flex-col gap-3 text-xl border border-black rounded"
      >
        <input
          type="text"
          name="id"
          defaultValue={params ? params.id : ""}
          className="opacity-0 hidden"
        />
        <input
          type="text"
          name="url"
          defaultValue={gameMidia ? gameMidia.url : ""}
          placeholder="Ex: youtube/imgur etc..."
          className="w-full px-2 py-1 rounded"
        />
        <textarea
          name="description"
          rows={8}
          defaultValue={gameMidia ? gameMidia.description : ""}
          placeholder="Ex: Trailer, Gameplay screenshot"
          className="w-full px-2 py-1 rounded"
        ></textarea>

        <div className="flex gap-2 justify-center items-center font-semibold">
          <button className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded">
            Submit
          </button>
          <Link
            href={`/publisher/game/${gameMidia.gameId}/media`}
            className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
