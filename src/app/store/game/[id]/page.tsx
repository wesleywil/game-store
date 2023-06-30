import StoreGameCategories from "@/components/store_game_categories/store_game_categories.component";
import StoreGameGallery from "@/components/store_game_gallery/store_game_gallery.component";
import StoreGameInfo from "@/components/store_game_info/store_game_info.component";
import StoreGamePrice from "@/components/store_game_price/store_game_price.component";
import StoreGameRequirements from "@/components/store_game_requirements/store_game_requirements.component";
import { Game } from "../../../../../utils/interfaces";

export default async function Game({ params }: { params: { id: string } }) {
  const req = await fetch(`http://localhost:3000/api/games/${params.id}`, {
    cache: "no-cache",
  });
  const game: Game = await req.json();
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold">{game.title}</h1>
      {/* Game gallery */}
      <StoreGameGallery data={game} />
      {/* Game Price */}
      <StoreGamePrice data={game} />
      {/* Info */}
      <StoreGameInfo data={game} />
      {/* System Requirements */}
      <StoreGameRequirements />
      {/* Categories / Genre */}
      <StoreGameCategories />
    </div>
  );
}
