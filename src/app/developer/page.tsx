import Bubble from "@/components/bubble/bubble.component";

export default function Developer() {
  return (
    <div className="grid h-[80vh] place-items-center">
      <div className="text-center">
        <h1 className="text-4xl">Published</h1>
        <h2 className="text-slate-500 font-semibold">games published</h2>
        <Bubble count={5} />
      </div>
    </div>
  );
}
