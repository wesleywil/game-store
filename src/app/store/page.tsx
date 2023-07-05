import FeatureGame from "@/components/featured_game/featured_game.component";
import GameItem from "@/components/game_item/game_item.component";
import GameList from "@/components/game_list/game_list.component";
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
      <div className="md:w-2/3 md:mx-auto flex flex-col gap-2">
        <GameSelectorListWidget />
        <GameList />

        <GameListFilter />
      </div>
    </>
  );
}
