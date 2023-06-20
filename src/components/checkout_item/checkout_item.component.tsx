import { FaTrashAlt } from "react-icons/fa";

const CheckoutItem = () => {
  return (
    <div className="w-full p-2 flex justify-between bg-slate-700 text-white rounded">
      <h1 className="grow">Game name goes here</h1>
      <h1 className="grow">$ 32.50</h1>
      <div>
        <button className="text-red-400 hover:text-red-600">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
