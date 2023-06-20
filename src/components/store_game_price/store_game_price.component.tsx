import { FaCartPlus } from "react-icons/fa";

const StoreGamePrice = () => {
  return (
    <div className="p-1 py-2 flex flex-col bg-slate-300">
      <h1 className="text-2xl text-center font-bold">$40.00</h1>
      <h3 className="text-sm font-semibold text-center">
        Product activated by activation key
      </h3>
      <div className="mt-2 flex justify-center">
        <button className="px-2 py-1 flex gap-2 bg-green-400 hover:bg-green-600 text-3xl text-black font-bold rounded-xl">
          <FaCartPlus className="self-center" />
          <span className="self-center text-xl">Buy</span>
        </button>
      </div>
    </div>
  );
};

export default StoreGamePrice;
