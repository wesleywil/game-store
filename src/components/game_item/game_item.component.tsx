import { FaCartPlus } from "react-icons/fa";

const GameList = () => {
  return (
    <div className="flex flex-col">
      <div className="h-36 h-36 py-1 flex flex-col items-center justify-end bg-green-400 rounded-xl">
        <button className="px-2 py-1 bg-blue-400 text-sm text-white font-semibold rounded">
          View Game
        </button>
      </div>
      <div className="flex flex-col">
        <h1>Name of the game...</h1>
        <div className="flex justify-between">
          <h2 className="text-slate-500">$00.00</h2>
          <div className="mr-1 p-1 bg-green-300 text-blue rounded">
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
