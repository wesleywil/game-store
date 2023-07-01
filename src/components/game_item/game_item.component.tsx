import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import { Game, GameMidia } from "../../../utils/interfaces";

interface GameItemProps {
  id: string;
  title: string;
  price: number;
  gameMidia: GameMidia[];
}

const GameItem = ({ id, title, price, gameMidia }: GameItemProps) => {
  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundImage: `url(${gameMidia[0].url})`,
          backgroundSize: "cover",
        }}
        className="h-36 h-36 py-1 flex flex-col items-center justify-end bg-green-400 rounded-xl"
      >
        <Link
          href={`/store/game/${id}`}
          className="px-2 py-1 bg-blue-400 text-sm text-white font-semibold rounded"
        >
          View Game
        </Link>
      </div>
      <div className="flex flex-col">
        <h1>{title.length > 18 ? title.slice(0, 15) + "..." : title}</h1>
        <div className="flex justify-between">
          <h2 className="text-slate-500">${price}</h2>
          <div className="mr-1 p-1 bg-green-300 text-blue rounded">
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
