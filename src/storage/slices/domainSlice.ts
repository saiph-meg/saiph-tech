import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "~/storage/wrapper";
import { GenericObject } from "~/lib/default.types";

interface DomainConfig {
  uuid: string;
  id: string;
  data: GenericObject;
}

interface Domain {
  id: string;
  name: string;
  configs: { [key: string]: DomainConfig };
}

const initialState = {
  id: "",
  name: "",
  configs: {}
} as Domain;

const domainSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setDomain(state, action: PayloadAction<Domain>) {
      return action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state = { ...state, ...action.payload.domain };
      return state;
    }
  }
});

export const { setDomain } = domainSlice.actions;

export const selectDomain = (state: AppState) => state.domain;
export const selectDomainConfig =
  (configName: string, emptyValue?: any) => (state: AppState) => {
    const configs: any[] = Object.values(state.domain?.configs ?? {}).filter(
      config => config.id === configName
    );
    if (configs.length === 1) {
      return configs[0].data;
    } else if (configs.length > 1) {
      return configs.map(item => item.data);
    }
    return emptyValue;
  };

export default domainSlice;
