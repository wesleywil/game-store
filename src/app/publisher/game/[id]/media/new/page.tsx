import Link from "next/link";
import { addMedia } from "@/server_actions/add_media";

export default async function AddMedia({ params }: { params: { id: string } }) {
  return (
    <div className="h-[85vh]">
      <h1 className="mt-8 text-center text-3xl font-bold">New Media</h1>
      <form
        action={addMedia}
        className="w-11/12 md:w-1/3 mt-8 mx-auto p-2 md:p-8 flex flex-col gap-3 text-xl border border-black rounded"
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
          placeholder="Ex: youtube/imgur etc..."
          className="w-full px-2 py-1 rounded"
        />
        <textarea
          name="description"
          rows={8}
          placeholder="Ex: Trailer, Gameplay screenshot"
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
