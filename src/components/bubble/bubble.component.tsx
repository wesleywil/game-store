type BubbleProps = {
  count: number;
};

const Bubble = ({ count }: BubbleProps) => {
  return (
    <div className="mx-auto mt-4 w-48 h-48 flex justify-center items-center bg-green-400 text-black rounded-full">
      <h1 className="text-6xl font-bold">{count}</h1>
    </div>
  );
};

export default Bubble;
