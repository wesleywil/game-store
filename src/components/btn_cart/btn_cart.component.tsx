import { useDispatch, useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
import { AppDispatch, RootState } from "@/redux/store";
import { selectGameById } from "@/redux/games/games";
import { addToCart } from "@/redux/cart/cart";
import { useEffect } from "react";

const BtnCart = ({ id }: { id: string }) => {
  const status = useSelector((state: RootState) => state.games.status);
  const game = useSelector((state: RootState) => state.games.game);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === "selected") {
      dispatch(addToCart(game));
    }
  }, [game]);

  const handleAddToCart = async () => {
    await dispatch(selectGameById(id));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mr-1 p-1 bg-green-300 text-blue rounded"
    >
      <FaCartPlus />
    </button>
  );
};

export default BtnCart;
