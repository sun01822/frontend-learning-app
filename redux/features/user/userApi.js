import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all User
    getAllUser: builder.query({
      query: () => ({
        url: `/user`,
      }),
    }),

    // Login User
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem("token", JSON.stringify(result.data.token));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["User"],
    }),

    // update user
    updateUser: builder.mutation({
      query: ({ data, user_id }) => ({
        url: `/user/${user_id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoginUserMutation, useUpdateUserMutation } = userApi;
