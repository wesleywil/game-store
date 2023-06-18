import { FaPlay } from "react-icons/fa";

type GamerItemProps = {
  id: string;
  img: string;
  name: string;
  description: string;
};

const GamerItem = ({ id, img, name, description }: GamerItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center border border-green-400 rounded">
      <h1 className="w-full font-bold text-xl text-black text-center border-b border-green-400">
        {name}
      </h1>
      <div className="self-center p-2 flex justify-center items-center gap-8 ">
        <div className="w-20 h-20 bg-black rounded-xl"></div>

        <div className="grow animate-pulse self-center flex flex-col justify-center items-center gap-2 text-4xl text-green-400 ">
          <FaPlay className="self-center" />
        </div>
      </div>
      <div className="p-2 flex flex-col gap-2 border-t border-green-400">
        <h2 className="text-center font-semibold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GamerItem;
