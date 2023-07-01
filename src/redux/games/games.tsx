import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Game, GameMidia } from "../../../utils/interfaces";

export interface GameState {
  games: Game[];
  game: Game;
  status: string;
  error: string;
}

const initialState: GameState = {
  games: [],
  game: {} as Game,
  status: "idle",
  error: "",
};

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const res = await axios.get("http://localhost:3000/api/games");
  return res.data;
});

export const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = "fetching";
      })
      .addCase(fetchGames.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.games = payload;
      })
      .addCase(fetchGames.rejected, (state, { payload }) => {
        state.error = String(payload);
      });
  },
});

export const {} = gameSlice.actions;

export default gameSlice.reducer;
