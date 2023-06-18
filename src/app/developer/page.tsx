import Link from "next/link";

import Bubble from "@/components/bubble/bubble.component";
import Container from "@/components/container/container.component";

export default function Developer() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-4xl">Published</h1>
        <h2 className="text-slate-500 font-semibold">games published</h2>
        <Bubble count={5} />
      </div>
      <Link
        href="/developer/list"
        className="mt-2 px-2 py-1 bg-blue-400 font-semibold rounded-xl"
      >
        Published Games List
      </Link>
    </Container>
  );
}
