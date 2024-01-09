import React, { useState, useEffect } from "react";
import {
  useGetAllCategoriesQuery,
  useDeleteCategoryByIdMutation,
  useCreateCategoryMutation,
} from "@/redux/features/category/categoryApi";

const CategoryList = () => {
  const { data: categories, error: getAllCategoriesError, refetch } = useGetAllCategoriesQuery();

  const [deleteCategoryById] = useDeleteCategoryByIdMutation();

  const [createCategory] = useCreateCategoryMutation();
  const [newCategory, setNewCategory] = useState({ category_name: "", hidden: false });

  const handleDeleteCategory = async (id) => {
    await deleteCategoryById(id);
    refetch();
  };

  const handleCreateCategory = async () => {
    await createCategory(newCategory);
    refetch();
    setNewCategory({ category_name: "", hidden: false });
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Add New Category</h2>
        <label className="block mb-2">
          Category Name:
          <input
            type="text"
            value={newCategory.category_name}
            onChange={(e) => setNewCategory({ ...newCategory, category_name: e.target.value })}
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <button
          onClick={handleCreateCategory}
          className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Add Category
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">All Category</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Category Name</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (
              <tr key={category._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{category._id}</td>
                <td className="py-2 px-4 border-b">{category.category_name}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDeleteCategory(category._id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-md focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
