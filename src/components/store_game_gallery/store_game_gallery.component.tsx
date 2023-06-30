import React from "react";
import { Game } from "../../../utils/interfaces";

interface StoreGameGalleryProps {
  data: Game;
}

const StoreGameGallery: React.FC<StoreGameGalleryProps> = ({ data }) => {
  return (
    <>
      {data.gameMidia!.length ? (
        <>
          <div className="carousel w-full">
            {data.gameMidia?.map((item, index) => (
              <div id={`${index + 1}`} className="carousel-item w-full">
                <img src={item.url} className="w-full" alt="game media" />
              </div>
            ))}
          </div>
          <div className="w-full py-2 gap-2 flex justify-center">
            {data.gameMidia?.map((item, index) => (
              <a href={`#${index + 1}`} className="btn btn-xs">
                {index + 1}
              </a>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-48 flex items-center justify-center text-4xl text-white font-bold bg-black rounded">
          <h1>NO MEDIA</h1>
        </div>
      )}
    </>
  );
};

export default StoreGameGallery;
