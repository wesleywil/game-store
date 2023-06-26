import Link from "next/link";

const PublisherGameDelete = ({
  handleDelete,
}: {
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className="absolute top-0 w-screen h-screen flex items-center justify-center bg-gray-600/30">
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-4 bg-green-400 rounded">
        <h1 className="text-2xl text-center font-bold">
          Are you sure you want to delete this game?
        </h1>
        <div className="flex p-2 gap-4 justify-center text-3xl text-white">
          <button
            onClick={handleDelete}
            className="px-2 py-1 bg-red-400 hover:bg-red-600 rounded"
          >
            Yes
          </button>
          /{" "}
          <Link
            href="/publisher"
            className="px-2 py-1 bg-blue-400 hover:bg-blue-600 rounded"
          >
            No
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublisherGameDelete;
