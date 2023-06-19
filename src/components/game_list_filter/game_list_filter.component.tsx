import { FaFilter } from "react-icons/fa";

const GameListFilter = () => {
  return (
    <div
      draggable
      className="absolute w-11/12 bg-blue-400 top-[88%] opacity-80 left-1/2 transform -translate-x-1/2 rounded overflow-hidden"
    >
      <div className="grid grid-cols-2">
        <div className="  flex items-center justify-center">
          <span>
            <FaFilter />
          </span>
          <h1>Add Filter</h1>
        </div>
        <div className="py-2 h-full bg-black">
          <select className="w-full bg-black text-center text-white font-semibold">
            <option value="action">Action</option>
            <option value="rpg">Rpg</option>
            <option value="strategy">Strategy</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GameListFilter;
