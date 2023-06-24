import { headers } from "next/headers";
import Link from "next/link";
import prisma from "../../../../prisma/client";
import { publishGame } from "@/server_actions/publish_game";

export default async function NewGame() {
  return (
    <div className="h-[85vh]">
      <h1 className="mt-8 text-center text-3xl font-bold">Publish New Game</h1>
      <form
        action={publishGame}
        className="w-11/12 mt-8 mx-auto p-2 flex flex-col gap-3 text-xl border border-black rounded"
      >
        <input
          type="text"
          name="title"
          placeholder="Game's title"
          className="w-full px-2 py-1 rounded"
        />
        <input
          type="number"
          min="0.00"
          max="10000.00"
          step="0.01"
          name="price"
          placeholder="Put the game price's here"
          className="w-full px-2 py-1 rounded"
        />
        <textarea
          name="description"
          rows={8}
          placeholder="Describe the game here"
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
