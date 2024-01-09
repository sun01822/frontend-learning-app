import React, { useState, useEffect } from 'react';
import {
  useGetAllsubCategoriesQuery,
  useCreateSubcategoryMutation,
  useDeleteSubcategoryMutation,
} from '@/redux/features/subcategory/subcategoryApi';
import {
  useGetAllCategoriesQuery,
} from '@/redux/features/category/categoryApi';

const Subcategory = () => {
  const { data: subcategories, error: subcategoriesError, isLoading: isLoadingSubcategories, refetch: refetchSubcategories } = useGetAllsubCategoriesQuery();
  const { data: categories, error: categoriesError, refetch: refetchCategories } = useGetAllCategoriesQuery();

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [newSubcategory, setNewSubcategory] = useState({
    name: '',
    categoryId: '',
  });

  const [createSubcategory, { isLoading: isCreatingSubcategory }] = useCreateSubcategoryMutation();
  const [deleteSubcategory, { isLoading: isDeletingSubcategory }] = useDeleteSubcategoryMutation();

  useEffect(() => {
    refetchCategories();
    refetchSubcategories();
  }, [refetchCategories, refetchSubcategories]);

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
    setNewSubcategory({
      ...newSubcategory,
      categoryId: event.target.value,
    });
  };

  const handleSubcategoryNameChange = (event) => {
    setNewSubcategory({
      ...newSubcategory,
      name: event.target.value,
    });
  };

  const handleCreateSubcategory = async () => {
    try {
      await createSubcategory(newSubcategory);
      refetchSubcategories();
      setNewSubcategory({
        name: '',
        categoryId: selectedCategoryId,
      });
    } catch (error) {
      console.error('Error creating subcategory:', error);
    }
  };

  const handleDeleteSubcategory = async (subcategoryId) => {
    try {
      await deleteSubcategory(subcategoryId);
      refetchSubcategories();
    } catch (error) {
      console.error('Error deleting subcategory:', error);
    }
  };

  const filteredSubcategories = selectedCategoryId
    ? subcategories?.filter((subcategory) => subcategory.categoryId === selectedCategoryId)
    : subcategories;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">All Subcategories</h2>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Filter by Category:</label>
        <select
          className="mt-1 p-2 border rounded-md"
          value={selectedCategoryId}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.category_name}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Create New Subcategory</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Subcategory Name"
            value={newSubcategory.name}
            onChange={handleSubcategoryNameChange}
            className="p-2 border rounded-md"
          />

          <select
            value={selectedCategoryId}
            onChange={handleCategoryChange}
            className="p-2 border rounded-md"
          >
            <option value="" disabled>Select a Category</option>
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.category_name}
                </option>
              ))}
          </select>

          <button
            onClick={handleCreateSubcategory}
            disabled={isCreatingSubcategory}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {isCreatingSubcategory ? 'Creating...' : 'Create'}
          </button>
        </div>
      </div>

      {isLoadingSubcategories ? (
        <p>Loading subcategories...</p>
      ) : subcategoriesError ? (
        <p>Error: {subcategoriesError.message}</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Subcategory Name</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubcategories &&
              filteredSubcategories.map((subcategory) => (
                <tr key={subcategory._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{subcategory._id}</td>
                  <td className="py-2 px-3 border-b">{subcategory.name}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDeleteSubcategory(subcategory._id)}
                      disabled={isDeletingSubcategory}
                      className="bg-red-500 text-white py-2 px-4 rounded-md"
                    >
                      {isDeletingSubcategory ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Subcategory;
