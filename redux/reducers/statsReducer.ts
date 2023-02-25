import { WrongI } from "./../../types/WrongI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatsI {
  bad: WrongI[];
  bestScore: number;
}

const initialState: StatsI = {
  bad: [],
  bestScore: 0,
};

export const statsReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBestScore(state, action: PayloadAction<number>) {
      state.bestScore = action.payload;
    },
    addBadAction(state, action: PayloadAction<WrongI[]>) {
      state.bad = [...state.bad, ...action.payload];
    },
    clearAction(state) {
      state.bad = [];
    },
  },
});
