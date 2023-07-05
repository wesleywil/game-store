import Link from "next/link";

import { GameMidia } from "../../../utils/interfaces";
import BtnCart from "../btn_cart/btn_cart.component";

interface GameItemProps {
  id: string;
  title: string;
  price: number;
  gameMidia: GameMidia[];
}

const GameItem = ({ id, title, price, gameMidia }: GameItemProps) => {
  return (
    <div className="md:w-80 flex flex-col">
      <div
        style={{
          backgroundImage: `url(${
            gameMidia.length
              ? gameMidia[0].url
              : "http://dummyimage.com/200x200"
          })`,
          backgroundSize: "cover",
        }}
        className=" h-36 md:h-44  py-1 flex flex-col items-center justify-end bg-green-400 rounded-xl"
      >
        <Link
          href={`/store/game/${id}`}
          className="px-2 py-1 bg-blue-400 text-sm text-white font-semibold rounded"
        >
          View Game
        </Link>
      </div>
      <div className=" flex flex-col md:text-xl">
        <h1>{title.length > 18 ? title.slice(0, 15) + "..." : title}</h1>
        <div className="flex justify-between">
          <h2 className="text-slate-500 md:text-black md:font-bold">
            ${price}
          </h2>
          <BtnCart id={id} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
