import Link from "next/link";

import Container from "@/components/container/container.component";
import PublishItem from "@/components/publish_item/publish_item.component";
import { headers } from "next/headers";
import { Game } from "../../../utils/interfaces";

export default async function List() {
  const req = await fetch("http://localhost:3000/api/publisher", {
    cache: "no-cache",
    headers: headers(),
  });

  const games: Game[] = await req.json();
  return (
    <Container>
      <div className="w-11/12 mx-auto px-4 pb-2 flex justify-between text-xl font-bold border-b-2 border-black">
        <h1>Published</h1>
        <Link
          href="/publisher/new"
          className="px-2 py-1 text-sm bg-green-400 hover:bg-green-600 "
        >
          New Game
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2">
        {games.length
          ? games.map((item) => (
              <PublishItem
                id={item.id}
                img=""
                name={item.title}
                description={item.description}
                price={item.price}
              />
            ))
          : ""}
      </div>
    </Container>
  );
}
