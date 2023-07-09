"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { cleanCart } from "@/redux/cart/cart";

import CheckoutItem from "@/components/checkout_item/checkout_item.component";
import { FaTrashAlt } from "react-icons/fa";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Checkout page");
  }, [cartItems]);

  return (
    <div className="h-[80vh] py-1 flex flex-col items-center justify-between">
      <div className="w-11/12 mx-auto mt-8 px-4 pb-2 flex justify-between text-xl font-bold border-b-2 border-black">
        <h1>Checkout</h1>
        <button
          onClick={() => dispatch(cleanCart())}
          className="p-1 text-xl font-semibold   text-black hover:text-slate-700 border-x-2 border-black"
        >
          <FaTrashAlt />
        </button>
      </div>

      {/* Checkout item list */}

      <div className="w-11/12 h-[45vh] p-2 flex flex-col gap-2 overflow-y-auto rounded">
        {cartItems.length ? (
          cartItems.map((item, index) => (
            <CheckoutItem id={item.id} title={item.title} price={item.price} />
          ))
        ) : (
          <div className="h-48 flex items-center justify-center">
            <h1>NO ITEMS TO BE CHECKOUT</h1>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        {/* Total */}
        <div className="w-11/12 mx-auto flex flex-col text-center text-2xl font-semibold rounded">
          <h1>Total</h1>
          <h1>${total}</h1>
        </div>
        {/* Pay Button */}
        <div className="w-11/12 p-2 mx-auto flex justify-center rounded">
          <Link
            href="/payment"
            className="w-2/3 px-2 py-1 text-xl text-center bg-green-400 hover:bg-green-600 text-black font-bold rounded"
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  );
}
