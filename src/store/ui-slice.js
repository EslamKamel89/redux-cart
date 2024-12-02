import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartIsVisibile: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisibile = !state.cartIsVisibile;
    },
  },
});
export const uiActions = uiSlice.actions;
const uiSliceReducer = uiSlice.reducer;
export default uiSliceReducer;
