import { apiSlice } from "../api/apiSlice";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get user messages
    getConvMessages: builder.query({
      query: (conversation_id) => ({
        url: `/chat?conversation_id=${conversation_id}`,
        method: "GET",
      }),
      providesTags: ["Chat"],
    }),

    // send a message
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `/chat`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
});

export const { useGetConvMessagesQuery, useSendMessageMutation } = chatApi;
