const GameSelectorListWidget = () => {
  return (
    <div className="mt-2 px-2 flex justify-between ">
      <h1 className="font-semibold">games</h1>
      <select className="bg-green-400 font-semibold rounded">
        <option value="new_games">New Games</option>
        <option value="top_sellers">Top Sellers</option>
        <option value="top_rated">Top Rated</option>
      </select>
    </div>
  );
};

export default GameSelectorListWidget;
