import { apiSlice } from "../api/apiSlice";

export const subcategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all category
    getAllsubCategories: builder.query({
      query: () => ({
        url: `/subcategory`,
      }),
    }),

    // get single category by id
    getsubCategoryById: builder.query({
      query: (id) => ({url:`/subcategory/${id}`}),
    }),
  }),
});
export const { useGetAllsubCategoriesQuery, useGetsubCategoryByIdQuery } = subcategoryApi;
