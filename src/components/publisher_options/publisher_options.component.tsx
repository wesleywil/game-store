"use client";

import { FaEdit, FaTrashAlt, FaPhotoVideo } from "react-icons/fa";

const PublisherOptions = () => {
  return (
    <div className="w-full mt-2 px-2 py-4 flex justify-center items-center gap-8 text-4xl text-black">
      <button className="hover:text-green-600">
        <FaPhotoVideo />
      </button>
      <button className="hover:text-green-600">
        <FaEdit />
      </button>
      <button className="hover:text-green-600">
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default PublisherOptions;
