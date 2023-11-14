import { apiSlice } from "../api/apiSlice";

export const commentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      getAllCommentsOnPost: builder.query({
        query: ({ postId }) => ({
          url: `/comment`,
          params: { postId },
        }),
      }),
    }),
  });
  

export const { useGetAllCommentsOnPostQuery } = commentApi;