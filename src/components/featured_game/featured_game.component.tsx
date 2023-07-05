import Link from "next/link";

const FeatureGame = (data: any) => {
  if (data) {
    const game = data.data[0];
    return (
      <div
        style={{ backgroundImage: `url(${game.url})`, backgroundSize: "cover" }}
        className="w-full md:w-2/3 h-48 md:h-[50vh] md:mx-auto py-2 flex flex-col items-center justify-end"
      >
        <div className="w-full flex flex-col items-center bg-black/30">
          <h1 className="mb-2 text-white text-3xl font-semibold">
            {game.title}
          </h1>
          <Link
            href={`/store/game/${game.gameId}`}
            className="px-2 py-1 bg-blue-400 text-white font-bold rounded"
          >
            More Info
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-48 py-2 flex flex-col items-center justify-end bg-red-300">
      <div className="flex flex-col items-center">
        <h1 className="mb-2 font-semibold">Random Game Name</h1>
        <button className="px-2 py-1 bg-blue-400 text-white font-bold rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FeatureGame;
