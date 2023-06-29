"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import PublisherGameMediaDelete from "../publisher_gameMedia_delete/publisher_gameMedia_delete.component";

const BtnDeleteGameMedia = ({
  mediaId,
  id,
}: {
  mediaId: string;
  id: string;
}) => {
  const router = useRouter();
  const [hidden, setHidden] = useState<boolean>(true);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/gamemidia/media/${mediaId}`);
    router.replace(`/publisher/game/${id}/media`);
  };
  return (
    <>
      {hidden ? (
        ""
      ) : (
        <PublisherGameMediaDelete
          handleDelete={handleDelete}
          mediaId={mediaId}
          id={id}
        />
      )}

      <button
        onClick={() => setHidden(!hidden)}
        className="text-red-400 hover:text-red-600"
      >
        <FaTrashAlt />
      </button>
    </>
  );
};

export default BtnDeleteGameMedia;
