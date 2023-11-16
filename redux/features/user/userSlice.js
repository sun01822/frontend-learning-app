import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.User = payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
