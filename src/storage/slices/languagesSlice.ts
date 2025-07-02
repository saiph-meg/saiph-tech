import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/storage/wrapper";

interface LanguagesState {
  current: string;
  default: string;
  list: { [key: string]: string };
}

const languagesSlice = createSlice({
  name: "languages",

  initialState: {} as LanguagesState,

  reducers: {
    setLanguages(state, action) {
      return action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.languages };
      return state;
    }
  }
});

export const { setLanguages } = languagesSlice.actions;
export const selectDefaultLanguage = (state: AppState) =>
  state.languages.default;
export const selectCurrentLanguage = (state: AppState) =>
  state.languages.current;
export const selectLanguageList = (state: AppState) => state.languages.list;

export default languagesSlice;
