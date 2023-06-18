import Link from "next/link";

import Bubble from "@/components/bubble/bubble.component";
import Container from "@/components/container/container.component";

export default function Gamer() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-4xl">Library</h1>
        <h2 className="text-slate-500 font-semibold">game owned</h2>
        <Bubble count={20} />
      </div>
      <Link
        href="/gamer/list"
        className="mt-2 px-2 py-1 bg-blue-400 font-semibold rounded-xl"
      >
        Game Library
      </Link>
    </Container>
  );
}
