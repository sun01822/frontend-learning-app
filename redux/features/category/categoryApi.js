import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all categories
    getAllCategories: builder.query({
      query: () => ({
        url: `/category`,
      }),
    }),

    // get single category by id
    getCategoryById: builder.query({
      query: (id) => ({ url: `/category/${id}` }),
    }),

    // create category
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: `/category`,
        method: "POST",
        body: newCategory,
      }),
    }),

    // delete category by id
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useDeleteCategoryByIdMutation,
} = categoryApi;
