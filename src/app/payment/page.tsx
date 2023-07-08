"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/checkout_form/checkout_form.component";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);
export default function Payment() {
  const [clientSecret, setClientSecret] = React.useState("");
  const [paymentIntent, setPaymentIntent] = React.useState("");

  React.useEffect(() => {
    // Create paymentIntent as soon as the page loads using our local API
    fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 24.5,
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

  return (
    <div className="h-[85vh] flex flex-col items-center justify-center">
      <h1>Payment</h1>
      <Elements options={options} stripe={stripePromise}>
        <CheckoutForm paymentIntent={paymentIntent} />
      </Elements>
    </div>
  );
}
