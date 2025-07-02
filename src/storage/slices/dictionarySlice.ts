import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "@store://wrapper";

interface Dictionary {
  [key: string]: string;
}

const initialState = {} as Dictionary;

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionary(state, action: PayloadAction<Dictionary>) {
      return { ...action.payload };
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.dictionary };
      return state;
    }
  }
});

export const { setDictionary } = dictionarySlice.actions;
export const selectDictionary = (state: AppState) => state.dictionary;
export default dictionarySlice;
