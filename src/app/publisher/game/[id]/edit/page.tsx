import Link from "next/link";

import { updateGame } from "@/server_actions/update_game";
import { Game } from "../../../../../../utils/interfaces";

export default async function PublishedGameEdit({
  params,
}: {
  params: { id: string };
}) {
  const req = await fetch(`http://localhost:3000/api/games/${params.id}`);
  const game: Game = await req.json();

  return (
    <div className="h-[85vh]">
      <h1 className="mt-8 text-center text-3xl font-bold">Edit</h1>
      <form
        action={updateGame}
        className="w-11/12 mt-8 mx-auto p-2 flex flex-col gap-3 text-xl border border-black rounded"
      >
        <input
          type="text"
          name="id"
          defaultValue={game ? game.id : ""}
          className="opacity-0 hidden"
        />
        <input
          type="text"
          name="title"
          defaultValue={game ? game.title : ""}
          placeholder="Name's goes here"
          className="w-full px-2 py-1 rounded"
        />

        <input
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          name="price"
          defaultValue={game ? game.price : ""}
          placeholder="Put the game price's here"
          className="w-full px-2 py-1 rounded"
        />
        <textarea
          name="description"
          rows={8}
          defaultValue={game ? game.description : ""}
          className="w-full px-2 py-1 rounded"
        ></textarea>
        <div className="flex gap-2 justify-center items-center font-semibold">
          <button className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded">
            Submit
          </button>
          <Link
            href="/publisher"
            className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
