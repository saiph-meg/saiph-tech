import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "~/storage/wrapper";
import { HYDRATE } from "next-redux-wrapper";

interface Screen {
  size: string;
}

const initialState = { size: "" } as Screen;

const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    setScreen(state, action: PayloadAction<Screen["size"]>) {
      state.size = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.screen };
      return state;
    }
  }
});

export const { setScreen } = screenSlice.actions;
export const selectScreen = (state: AppState) => state.screen.size;
export const checkScreen = (sizes: string[]) => (state: AppState) =>
  sizes.indexOf(state.screen.size) >= 0;

export default screenSlice;
