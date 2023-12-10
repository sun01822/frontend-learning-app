import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all category
    getAllCategories: builder.query({
      query: () => ({
        url: `/category`,
      }),
    }),

    // get single category by id
    getCategoryById: builder.query({
      query: (id) => ({url:`/category/${id}`}),
    }),
  }),
});
export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
