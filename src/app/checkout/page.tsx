import CheckoutItem from "@/components/checkout_item/checkout_item.component";

export default function Checkout() {
  return (
    <div className="h-[80vh] py-1 flex flex-col items-center justify-between">
      <h1 className="mt-8 text-4xl font-semibold">Checkout</h1>
      {/* Checkout item list */}
      <div className="w-11/12 mt-2 mr-4 flex gap-4 justify-end">
        <button className="px-2 py-1 text-sm font-semibold bg-red-400 rounded-xl">
          clean cart
        </button>
      </div>
      <div className="w-11/12 h-[45vh] p-2 flex flex-col gap-2 overflow-y-auto rounded">
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
      </div>

      <div className="w-full flex flex-col gap-2">
        {/* Total */}
        <div className="w-11/12 mx-auto flex flex-col text-center text-2xl font-semibold rounded">
          <h1>Total</h1>
          <h1>$100.00</h1>
        </div>
        {/* Pay Button */}
        <div className="w-11/12 p-2 mx-auto flex justify-center rounded">
          <button className="w-2/3 px-2 py-1 text-xl bg-green-400 hover:bg-green-600 text-black font-bold rounded">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
