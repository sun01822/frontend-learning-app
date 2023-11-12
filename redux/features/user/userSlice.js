import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
