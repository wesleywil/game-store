import Container from "@/components/container/container.component";
import PublishItem from "@/components/publish_item/publish_item.component";

export default function List() {
  return (
    <Container>
      <h1 className="w-11/12 mx-auto  pb-2 text-center text-2xl font-bold border-b-2 border-black">
        Published
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2">
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
        <PublishItem
          id="0"
          img=""
          name="Game Name"
          description="game description goes here..."
          price={450.5}
        />
      </div>
    </Container>
  );
}
