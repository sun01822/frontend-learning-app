import React from 'react';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';

const CategoryList = () => {
  const { data: categoriesData, error: categoriesError, isLoading: isLoadingCategories } = useGetAllCategoriesQuery();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">All Categories</h2>
      {isLoadingCategories ? (
        <p>Loading categories...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Category Name</th>
            </tr>
          </thead>
          <tbody>
            {categoriesData && categoriesData.map((category) => (
              <tr key={category._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{category._id}</td>
                <td className="py-2 px-4 border-b">{category.category_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryList;
