const FeatureGame = () => {
  return (
    <div className="w-full h-[30vh] py-2 flex flex-col items-center justify-end bg-red-300">
      <div className="flex flex-col items-center">
        <h1 className="mb-2 font-semibold">Random Game Name</h1>
        <button className="px-2 py-1 bg-blue-400 text-white font-bold rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default FeatureGame;
