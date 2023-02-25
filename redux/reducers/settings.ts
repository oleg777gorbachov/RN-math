import { OperatorsI } from "./../../types/OperatorsI";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsI {
  level: number;
  language: string;
  seconds: number;
  isShowGuide: boolean;
  width: number;
  height: number;
  operators: OperatorsI[];
}

const initialState: SettingsI = {
  language: "ua",
  seconds: 60,
  level: 1,
  isShowGuide: true,
  height: 0,
  width: 0,
  operators: ["*", "+", "-", "/"],
};

export const settingsReducer = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguageAction(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setLevelAction(state, action: PayloadAction<number>) {
      state.level = action.payload;
    },
    setSecondAction(state, action: PayloadAction<number>) {
      state.seconds = action.payload;
    },
    setGuideAction(state, action: PayloadAction<boolean>) {
      state.isShowGuide = action.payload;
    },
    setSizeAction(
      state,
      action: PayloadAction<{ height: number; width: number }>
    ) {
      state.height = action.payload.height;
      state.width = action.payload.width;
    },
    setOperatorsAction(state, action: PayloadAction<OperatorsI[]>) {
      state.operators = action.payload;
    },
  },
});
