import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import menuSlice from "./slices/menuSlice";
import pageSlice from "./slices/pageSlice";
import domainSlice from "./slices/domainSlice";
import contentSlice from "./slices/contentSlice";
import screenSlice from "./slices/screenSlice";
import dictionarySlice from "./slices/dictionarySlice";
import languagesSlice from "./slices/languagesSlice";
// import { colorReducer } from "./colorsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [domainSlice.name]: domainSlice.reducer,
      [contentSlice.name]: contentSlice.reducer,
      [menuSlice.name]: menuSlice.reducer,
      [pageSlice.name]: pageSlice.reducer,
      [screenSlice.name]: screenSlice.reducer,
      [dictionarySlice.name]: dictionarySlice.reducer,
      [languagesSlice.name]: languagesSlice.reducer
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
