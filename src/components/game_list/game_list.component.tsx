"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchGames } from "@/redux/games/games";

import GameItem from "../game_item/game_item.component";

const GameList = () => {
  const status = useSelector((state: RootState) => state.games.status);
  const games = useSelector((state: RootState) => state.games.games);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchGames());
    }
  }, [status]);
  if (games.length) {
    return (
      <div className="mb-2 px-2 grid grid-cols-2 md:flex gap-4 md:gap-40 justify-center">
        {games.map((item, index) => (
          <GameItem
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            gameMidia={item.gameMidia!}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="h-48 flex justify-center items-center text-3xl text-green-400 font-bold">
        <h1>NO GAMES IN STORE</h1>
      </div>
    );
  }
};

export default GameList;
