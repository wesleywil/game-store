import FeatureGame from "@/components/featured_game/featured_game.component";
import GameList from "@/components/game_item/game_item.component";
import GameListFilter from "@/components/game_list_filter/game_list_filter.component";
import GameSelectorListWidget from "@/components/game_selector_list_widget/game_selector_list_widget.component";

export default async function Store() {
  const req = await fetch("http://localhost:3000/api/games/random", {
    cache: "no-cache",
  });
  const randomGame = await req.json();
  return (
    <>
      <FeatureGame data={randomGame} />
      <div className="flex flex-col gap-2">
        <GameSelectorListWidget />
        <div className="mb-2 px-2 grid grid-cols-2 gap-4 justify-center">
          <GameList />
          <GameList />
          <GameList />
          <GameList />
        </div>

        <GameListFilter />
      </div>
    </>
  );
}
