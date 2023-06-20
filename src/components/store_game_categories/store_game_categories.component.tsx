const StoreGameCategories = () => {
  return (
    <div className="p-1 py-2 flex flex-col">
      {/* Game info */}
      <div className="mb-4 flex flex-col gap-1 text-sm">
        <h1>
          <b>Release Date:</b> 2018-11-22
        </h1>
        <h1>
          <b>Publisher:</b> WW Indie Dev
        </h1>
      </div>
      {/* Category/genre */}
      <div className="flex flex-col">
        <h1 className="font-bold mb-2">CATEGORY/GENRE</h1>
        <div className="w-52 flex flex-wrap gap-2 text-sm font-semibold">
          <div className="bg-green-300 p-1 rounded">
            <h1>Action</h1>
          </div>
          <div className="bg-green-300 p-1 rounded">
            <h1>Rpg</h1>
          </div>
          <div className="bg-green-300 p-1 rounded">
            <h1>MMORPG</h1>
          </div>
        </div>
      </div>
      {/* Game mode */}
      <div className="flex flex-col mt-2">
        <h1 className="font-bold">GAME MODE</h1>
        <h2 className="font-semibold text-sm">Single-player</h2>
      </div>
      {/* RATED */}
      <div className="flex flex-col mt-2">
        <h1 className="font-bold">RATED</h1>
        <div className="flex items-center gap-2">
          <h1 className="p-3 rounded bg-red-500 text-white text-2xl font-bold">
            16
          </h1>
          <h1 className="text-xs font-semibold">
            NOT RECOMMENDED FOR PEOPLE UNDER 16
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StoreGameCategories;
