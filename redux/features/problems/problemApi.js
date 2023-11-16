import { apiSlice } from "../api/apiSlice";

export const problemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all problems
    getAllProblems: builder.query({
      query: () => ({
        url: `/problem`,
      }),
    }),
    

    // get single problem by id
    getProblemById: builder.query({
      query: (id) => `/problem/${id}`,
    }),
  }),
});

export const { useGetAllProblemsQuery, useGetProblemByIdQuery } = problemApi;
