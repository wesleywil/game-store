import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { AppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/cart/cart";

const CheckoutItem = ({
  id,
  title,
  price,
}: {
  id: string;
  title: string;
  price: number;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full p-2 flex justify-between bg-slate-700 text-white rounded">
      <h1 className="grow">{title}</h1>
      <h1 className="grow">$ {price}</h1>
      <div>
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="text-red-400 hover:text-red-600"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
