"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "../cart/cart.component";

const Menu = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-sm">
          IndieGameBazaar
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            {status === "authenticated" ? (
              <div className="dropdown dropdown-bottom">
                <span tabIndex={0}>Menu</span>
                <ul className="dropdown-content z-[1] bg-black text-white text-center rounded overflow-hidden">
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className="border-t-2 border-white bg-green-400 hover:bg-green-600">
                    <button
                      onClick={() => signOut()}
                      className="w-full flex justify-center text-black font-bold"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="px-2 py-1 bg-green-400 hover:bg-green-600 text-sm rounded"
              >
                SignIn
              </button>
            )}
          </li>
          <li className="flex justify-center items-center">
            <Cart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
