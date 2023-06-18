import { FaSearch } from "react-icons/fa";

const GamerListSearch = () => {
  return (
    <div className="mt-4 flex">
      <input
        type="text"
        placeholder="search game list"
        className="px-2 py-1 text-xl outline-0 rounded-l"
      />
      <button className="px-2 py-1 bg-green-400 hover:bg-green-600 rounded-r">
        <FaSearch />
      </button>
    </div>
  );
};

export default GamerListSearch;
