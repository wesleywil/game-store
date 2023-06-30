import { Game } from "../../../utils/interfaces";

interface StoreGameInfoProps {
  data: Game;
}

const StoreGameInfo: React.FC<StoreGameInfoProps> = ({ data }) => {
  return (
    <div className="p-1 py-2 flex flex-col">
      <h1 className=" text-xl font-semibold">About the game</h1>

      <p className="py-2">{data.description}</p>
    </div>
  );
};

export default StoreGameInfo;
