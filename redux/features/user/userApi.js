import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all User
    getAllUser: builder.query({
      query: () => ({
        url: `/api/users`,
      }),
    }),
  }),
});

export const {} = userApi;
