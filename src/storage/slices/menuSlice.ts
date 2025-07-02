import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/storage/wrapper";

interface Menu {
  id: string;
  links: any[];
}

interface menuStateType {
  [id: string]: Menu;
}

const menuSlice = createSlice({
  name: "menu",

  initialState: {} as menuStateType,

  reducers: {
    setMenu(state, action: PayloadAction<Menu>) {
      state[action.payload.id] = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.menu };
      return state;
    }
  }
});

export const { setMenu } = menuSlice.actions;
export const selectMenu = (id: string, fallback?: any) => (state: AppState) =>
  state.menu?.[id] ?? fallback ?? null;

export default menuSlice;
