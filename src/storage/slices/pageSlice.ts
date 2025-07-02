import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/storage/wrapper";

type Breadcrumb = {
  title: string;
  link?: string;
};

interface PageState {
  device: string;
  page: 0;
  route: string;
  locale: string;
  title: string;
  breadcrumbs: Breadcrumb[];
  type: string;
}

const pageSlice = createSlice({
  name: "page",

  initialState: {} as PageState,

  reducers: {
    setPageState(state, action) {
      return action.payload;
    },
    setPageTitle(state, action) {
      return { ...state, title: action.payload };
    },
    setPageType(state, action) {
      return { ...state, type: action.payload };
    },
    setBreadcrumbs(state, action) {
      return { ...state, breadcrumbs: action.payload };
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.page };
      return state;
    }
  }
});

export const { setPageState, setPageTitle, setPageType, setBreadcrumbs } =
  pageSlice.actions;
export const selectPageState = (state: AppState) => state.page;

export default pageSlice;
