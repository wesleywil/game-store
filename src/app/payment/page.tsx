"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { FaShoppingCart } from "react-icons/fa";
import { RootState } from "@/redux/store";

import CheckoutForm from "@/components/checkout_form/checkout_form.component";
import CheckoutItem from "@/components/checkout_item/checkout_item.component";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const total = useSelector((state: RootState) => state.cart.total);

  useEffect(() => {
    // Create paymentIntent as soon as the page loads using our local API
    fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: total,
        payment_intent_id: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret), setPaymentIntent(data.id);
      });
  }, []);

  const appearence: any = {
    theme: "stripe",
    labels: "floating",
  };

  const options: any = {
    clientSecret,
    appearence,
  };

  if (cartItems.length) {
    return (
      <div className=" flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Payment</h1>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Games</h1>
            {cartItems.map((item) => (
              <CheckoutItem
                id={item.id}
                title={item.title}
                price={item.price}
              />
            ))}
            <div className="w-full flex flex-col items-center justify-center gap-2 border-2 border-black rounded">
              <h1>Total</h1>
              <h1 className="text-3xl font-bold">${total}</h1>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Payment Details</h1>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-[85vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-3xl text-green-400 font-bold">
          <h1>EMPTY CART</h1>
          <FaShoppingCart className="text-6xl" />
        </div>
      </div>
    );
  }
}
