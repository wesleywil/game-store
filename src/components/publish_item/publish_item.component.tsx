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
    <div className="p-2 flex justify-center items-center gap-4 border border-green-400 rounded">
      <div className="w-12 h-12 bg-black rounded-full"></div>
      <div className="flex flex-col justify-center text-left">
        <h1 className="font-bold">{name}</h1>
        <p className="text-xs">{description}</p>
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
  );
};

export default PublishItem;
