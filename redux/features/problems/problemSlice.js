import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Problems: [],
};

const problemsSlice = createSlice({
  name: "problems",
  initialState,
  reducers: {
    setProblems: (state, { payload }) => {
      state.Problems = payload;
    },
  },
});

export const { setProblems } = problemsSlice.actions;
export default problemsSlice.reducer;
