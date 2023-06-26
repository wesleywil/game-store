"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEdit, FaTrashAlt, FaPhotoVideo } from "react-icons/fa";
import PublisherGameDelete from "../publisher_game_delete/publisher_game_delete.component";

const PublisherOptions = ({ id }: { id: string }) => {
  const router = useRouter();
  const [hidden, setHidden] = useState<Boolean>(true);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/games/${id}`);
    router.replace("/publisher");
  };

  return (
    <>
      <div className="w-full mt-2 px-2 py-4 flex justify-center items-center gap-8 text-4xl text-black">
        <button className="hover:text-green-600">
          <FaPhotoVideo />
        </button>
        <Link
          href={`/publisher/game/${id}/edit/`}
          className="hover:text-green-600"
        >
          <FaEdit />
        </Link>
        <button
          onClick={() => setHidden(!hidden)}
          className="hover:text-green-600"
        >
          <FaTrashAlt />
        </button>
      </div>
      {hidden ? "" : <PublisherGameDelete handleDelete={handleDelete} />}
    </>
  );
};

export default PublisherOptions;
