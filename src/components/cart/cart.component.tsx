"use client";

import { FaShoppingCart } from "react-icons/fa";
import CartItemList from "../cart_item_list/cart_item_list.component";

const Cart = () => {
  return (
    <div className="dropdown dropdown-bottom   flex items-center justify-center px-2 py-1 bg-black text-green-400 text-xl font-bold rounded">
      <FaShoppingCart tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu mt-1 mr-80 p-2 shadow bg-black rounded-box w-72"
      >
        <CartItemList />
      </ul>
    </div>
  );
};

export default Cart;
