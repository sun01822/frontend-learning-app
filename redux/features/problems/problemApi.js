import { apiSlice } from "../api/apiSlice";

export const problemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all problems
    getAllProblems: builder.query({
      query: () => ({
        url: `/problem`,
      }),
      providesTags: ["Problems"],
    }),

    // get single problem by id
    getProblemById: builder.query({
      query: (id) => `/problem/${id}`,
    }),

    // create a new problem
    createProblem: builder.mutation({
      query: (newProblem) => ({
        url: '/problem',
        method: 'POST',
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
        method: 'DELETE',
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
