import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchState } from "../../interfaces/interfaces";

const initialState: SearchState = {
  text: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;
