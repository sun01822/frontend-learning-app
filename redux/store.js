import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import userSlice from "./features/user/userSlice";
import problemSlice from "./features/problems/problemSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
    problems: problemSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});
