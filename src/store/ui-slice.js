import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartIsVisibile: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsVisibile = !state.cartIsVisibile;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
const uiSliceReducer = uiSlice.reducer;
export default uiSliceReducer;
