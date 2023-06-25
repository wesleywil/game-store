import Link from "next/link";

type PublishItemProps = {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
};

const PublishItem = ({
  id,
  img,
  name,
  description,
  price,
}: PublishItemProps) => {
  return (
    <div className="w-full flex flex-col border border-green-400 rounded">
      <div className="p-2 flex justify-center items-center gap-4">
        <div className="w-12 h-12 bg-black rounded-full"></div>
        <div className="flex flex-col justify-center text-left">
          <h1 className="font-bold">{name}</h1>
          <p className="w-36 text-xs border border-red-400">
            {description.length > 56
              ? description.slice(0, 56) + "..."
              : description}
          </p>
        </div>
        {String(price).length > 4 ? (
          <div className="text-xl">
            <h1>$ {price}</h1>
          </div>
        ) : (
          <div className="text-2xl">
            <h1>$ {price}</h1>
          </div>
        )}
      </div>
      <Link
        href={`/publisher/game/${id}`}
        className="w-full  bg-green-400 hover:bg-green-600 text-center font-bold"
      >
        Details
      </Link>
    </div>
  );
};

export default PublishItem;
