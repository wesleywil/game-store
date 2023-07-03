"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/cart/cart";

const CartItemList = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("TEST=> ", cartItems);
  }, [cartItems]);
  return (
    <>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <li key={index} className="mb-2 px-2 flex justify-between ">
            <div className="flex gap-8 text-white">
              <h1>{item.title}</h1>
              <h1>${item.price}</h1>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="p-1 grow flex justify-end text-xl text-green-400 hover:text-green-600  "
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))
      ) : (
        <div className="h-24 flex items-center justify-center">
          <h1>NO ITEMS IN CART</h1>
        </div>
      )}
      <div className="pt-2 flex flex-col items-center justify-center border-t-2 border-white">
        <span className="text-2xl">TOTAL</span>
        <span className="text-xl">${total}</span>
      </div>
      <li className="">
        <Link
          href="/checkout"
          className="flex justify-center bg-green-400 hover:bg-green-600 text-black font-bold"
        >
          Checkout
        </Link>
      </li>
    </>
  );
};

export default CartItemList;
