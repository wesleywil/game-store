"use client";

import Link from "next/link";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import CartItemList from "../cart_item_list/cart_item_list.component";
import { store } from "@/redux/store";
const Cart = () => {
  return (
    <div className="dropdown dropdown-bottom  dropdown-open flex items-center justify-center px-2 py-1 bg-black text-green-400 text-xl font-bold rounded">
      <FaShoppingCart tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu mt-1 mr-80 p-2 shadow bg-black rounded-box w-72"
      >
        <CartItemList />
        {/* <div className="pt-2 flex flex-col items-center justify-center border-t-2 border-white">
          <span className="text-2xl">TOTAL</span>
          <span className="text-xl">${store.getState().cart.total}</span>
        </div>
        <li className="">
          <Link
            href="/checkout"
            className="flex justify-center bg-green-400 hover:bg-green-600 text-black font-bold"
          >
            Checkout
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Cart;
