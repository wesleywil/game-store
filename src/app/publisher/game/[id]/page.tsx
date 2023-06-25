import PublisherOptions from "@/components/publisher_options/publisher_options.component";
import { Game } from "../../../../../utils/interfaces";

export default async function PublishedGame({
  params,
}: {
  params: { id: string };
}) {
  const req = await fetch(`http://localhost:3000/api/games/${params.id}`);
  const game: Game = await req.json();
  return (
    <div className="h-[85vh]">
      {game.gameMidia?.length ? (
        ""
      ) : (
        <div className="px-2 flex flex-col">
          <div className="mb-1 flex justify-between text-xl">
            <h1 className=" font-bold">{game.title}</h1>
            <h1 className="mr-2 py-1 font-bold text-red-500">${game.price}</h1>
          </div>

          <div className="w-full h-48 flex items-center justify-center text-4xl text-white font-bold bg-black rounded">
            <h1>NO MEDIA</h1>
          </div>
        </div>
      )}
      <div className="w-full px-2 flex flex-col">
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="h-48 px-2 py-1 text-center overflow-y-auto">
          {game.description}
        </p>
      </div>
      <div className="w-full px-2 bg-orange-300">
        <h1 className="font-bold text-center">Publisher options</h1>
      </div>
      <PublisherOptions />
    </div>
  );
}