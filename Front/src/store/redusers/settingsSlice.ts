import { createSlice } from "@reduxjs/toolkit";
import store from "..";

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    search: "",
  },
  reducers: {
    setYandexSearch(state, actions) {
      state.search = actions.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { setYandexSearch } = settingsSlice.actions;
export default settingsSlice.reducer;
