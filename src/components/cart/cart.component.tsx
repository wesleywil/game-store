"use client";

import Link from "next/link";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="dropdown dropdown-bottom  flex items-center justify-center px-2 py-1 bg-black text-green-400 text-xl font-bold rounded">
      <FaShoppingCart tabIndex={0} />
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu mt-1 mr-80 p-2 shadow bg-black rounded-box w-72"
      >
        <li className="mb-2 px-2 flex justify-between ">
          <div className="flex gap-8 text-white">
            <h1>Name...</h1>
            <h1>$00.00</h1>
            <button className="p-1 grow flex justify-end text-xl text-green-400 hover:text-green-600  ">
              <FaTrashAlt />
            </button>
          </div>
        </li>
        <div className="pt-2 flex flex-col items-center justify-center border-t-2 border-white">
          <span className="text-2xl">TOTAL</span>
          <span className="text-xl">$00.00</span>
        </div>
        <li className="">
          <Link
            href="/checkout"
            className="flex justify-center bg-green-400 hover:bg-green-600 text-black font-bold"
          >
            Checkout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
