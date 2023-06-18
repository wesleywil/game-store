import Container from "@/components/container/container.component";
import GamerItem from "@/components/gamer_item/gamer_item.component";
import GamerListSearch from "@/components/gamer_list_search/gamer_list_search.component";

export default function List() {
  return (
    <Container>
      <h1 className="w-11/12 mx-auto  pb-2 text-center text-2xl font-bold border-b-2 border-black">
        Library
      </h1>
      <GamerListSearch />
      <div className="mt-4 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2">
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
        <GamerItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here........."
        />
      </div>
    </Container>
  );
}
