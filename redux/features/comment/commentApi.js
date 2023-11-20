import { apiSlice } from "../api/apiSlice";

export const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommentsOnPost: builder.query({
      query: ({ postId }) => ({
        url: `/comment/proposal/${postId}`
      }),
      providesTags: ['Comments']
    }),
    createComment: builder.mutation({
      query: (commentData) => ({
        url: `/comment/`,
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const { useGetAllCommentsOnPostQuery, useCreateCommentMutation } = commentApi;
