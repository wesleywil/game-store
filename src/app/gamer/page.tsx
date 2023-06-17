import Bubble from "@/components/bubble/bubble.component";

export default function Gamer() {
  return (
    <div className="grid h-[80vh] place-items-center">
      <div className="text-center">
        <h1 className="text-4xl">Library</h1>
        <h2 className="text-slate-500 font-semibold">game owned</h2>
        <Bubble count={20} />
      </div>
    </div>
  );
}
