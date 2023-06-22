"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case md:text-xl">IndieGameBazaar</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {status === "authenticated" ? (
        <div className="navbar-end flex gap-2">
          <Link href="/profile">
            <Image
              src={session.user.image}
              width={32}
              height={32}
              alt="profile picture"
              className="w-8 h-8  rounded-full"
            />
          </Link>

          <button
            onClick={() => signOut()}
            className="px-2 py-1 bg-green-400 hover:bg-green-600 text-sm rounded"
          >
            SignOut
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <button
            onClick={() => signIn("google")}
            className="px-2 py-1 bg-green-400 hover:bg-green-600 text-sm rounded"
          >
            SignIn
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
