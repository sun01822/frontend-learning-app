import { apiSlice } from "../api/apiSlice";
import { setProblems } from "./problemSlice";

export const problemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all problems
    getAllProblems: builder.query({
      query: (query) => ({
        url: `/problem?${query}`,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(setProblems(result.data));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["Problems"],
    }),

    // get single problem by id
    getProblemById: builder.query({
      query: (id) => `/problem/${id}`,
    }),

    // create a new problem
    createProblem: builder.mutation({
      query: (newProblem) => ({
        url: "/problem",
        method: "POST",
        body: newProblem,
      }),
      invalidatesTags: ["Problems"],
    }),

    // get all problems by user ID
    getAllProblemsByUserId: builder.query({
      query: (userId) => ({
        url: `/problem/user/${userId}`,
      }),
    }),

    // delete a problem by id
    deleteProblem: builder.mutation({
      query: (problemId) => ({
        url: `/problem/${problemId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Problems"],
    }),
  }),
});

export const {
  useGetAllProblemsQuery,
  useGetProblemByIdQuery,
  useCreateProblemMutation,
  useGetAllProblemsByUserIdQuery,
  useDeleteProblemMutation,
} = problemApi;
