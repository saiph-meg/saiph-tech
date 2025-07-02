import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/storage/wrapper";
import { Collection } from "~/lib/default.types";

interface Content {
  entity: { id: string; type: string } | null;
  data: Collection | null;
  error?: any;
  meta?: any;
}

const initialState = {
  entity: null,
  data: null,
  error: null,
  meta: null
} as Content;

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Content["data"]>) {
      return { ...state, data: action.payload };
    },
    setEntity(state, action: PayloadAction<Content["entity"]>) {
      return { ...state, entity: action.payload };
    },
    setMeta(state, action: PayloadAction<Content["meta"]>) {
      return { ...state, meta: action.payload };
    },
    setError(state, action: PayloadAction<Content["error"]>) {
      return { ...state, error: action.payload };
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.content };
      return state;
    }
  }
});

export const { setData, setEntity, setMeta, setError } = contentSlice.actions;

export const selectContent = (state: AppState) => state.content;
export const selectContentData = (state: AppState) => state.content.data;
export const selectEntity = (id: string, type: string) => (state: AppState) => {
  return state?.content?.data?.[type]?.[id];
};

export const selectRootEntity = (state: AppState) => {
  const { data, entity } = state.content;
  const { type, id } = entity ?? {};
  return type && id ? data?.[type]?.[id] : null;
};

export default contentSlice;
