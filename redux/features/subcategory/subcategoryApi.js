import { apiSlice } from "../api/apiSlice";

export const subcategoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all subcategories
    getAllsubCategories: builder.query({
      query: () => ({
        url: `/subcategory`,
      }),
    }),

    // get single subcategory by id
    getsubCategoryById: builder.query({
      query: (id) => ({ url: `/subcategory/${id}` }),
    }),

    // create subcategory
    createSubcategory: builder.mutation({
      query: (newSubcategory) => ({
        url: `/subcategory`,
        method: "POST",
        body: newSubcategory,
      }),
    }),

    // delete subcategory by id
    deleteSubcategory: builder.mutation({
      query: (id) => ({
        url: `/subcategory/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllsubCategoriesQuery,
  useGetsubCategoryByIdQuery,
  useCreateSubcategoryMutation,
  useDeleteSubcategoryMutation,
} = subcategoryApi;
