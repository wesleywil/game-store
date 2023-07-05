import Link from "next/link";

export default function Home() {
  return (
    <main className="grid h-[80vh] place-items-center">
      <div className="w-2/3 mt-12 flex flex-col items-center justify-center gap-4">
        <Link
          href="/profile"
          className="w-full md:w-1/3 text-4xl md:text-6xl  text-center px-2 py-1 bg-green-400 hover:bg-green-600 text-black font-bold  rounded"
        >
          Profile
        </Link>
        <Link
          href="/store"
          className="w-full md:w-1/3 text-4xl md:text-6xl text-center px-2 py-1 bg-green-400 hover:bg-green-600 text-black font-bold  rounded"
        >
          Store
        </Link>
      </div>
    </main>
  );
}
