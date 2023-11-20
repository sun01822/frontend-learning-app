import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API_URL = "http://localhost:8000/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const auth = JSON.parse(localStorage.getItem("auth"));
      if (auth) {
        headers.set("Authorization", `Bearer ${auth.access_token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 600, //600s -> 10 min
  tagTypes: ["User", "Comments", "Skill"],
  endpoints: () => ({}),
});

// export const { useGetUserQuery } = apiSlice;
