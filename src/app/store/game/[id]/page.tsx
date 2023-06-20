import StoreGameCategories from "@/components/store_game_categories/store_game_categories.component";
import StoreGameGallery from "@/components/store_game_gallery/store_game_gallery.component";
import StoreGameInfo from "@/components/store_game_info/store_game_info.component";
import StoreGamePrice from "@/components/store_game_price/store_game_price.component";
import StoreGameRequirements from "@/components/store_game_requirements/store_game_requirements.component";

export default function Game() {
  return (
    <div>
      <h1 className="text-black text-2xl font-semibold">Name of the game</h1>
      {/* Game gallery */}
      <StoreGameGallery />
      {/* Game Price */}
      <StoreGamePrice />
      {/* Info */}
      <StoreGameInfo />
      {/* System Requirements */}
      <StoreGameRequirements />
      {/* Categories / Genre */}
      <StoreGameCategories />
    </div>
  );
}
