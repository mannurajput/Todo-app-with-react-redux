import { createSlice } from "@reduxjs/toolkit";

const ReduxSlices = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addData(state, action) {
      return (state = [...state, action.payload]);
    },
    deleteData(state, action) {
      state.splice(action.payload, 1);
    },
    editData(state, action) {},
  },
});
export { ReduxSlices };
export const { addData, deleteData, editData } = ReduxSlices.actions;
