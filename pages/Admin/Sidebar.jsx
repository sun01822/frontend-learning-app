import React, { useState } from 'react';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import CategoryList from './CategoryList'; // Assuming CategoryList is in the same directory

const Sidebar = () => {
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [isWelcomeVisible, setWelcomeVisible] = useState(true);
  const { data: categoriesData, error: categoriesError, isLoading: isLoadingCategories } = useGetAllCategoriesQuery();

  const handleViewCategoryClick = () => {
    setCategoryListVisible(!isCategoryListVisible);
    setWelcomeVisible(false);
  };

  const handleHomeClick = () => {
    setWelcomeVisible(true);
    setCategoryListVisible(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
          <div className="w-1/4 bg-gray-200 p-4">
              <button
          className="bg-green-500 text-white py-2 px-4 rounded block"
          onClick={handleHomeClick}
        >
          Home
              </button>
              
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4 block"
          onClick={handleViewCategoryClick}
        >
          View Categories
        </button>
        
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {isCategoryListVisible && (
          <div>
            <h2 className="text-2xl font-bold mb-4">All Categories</h2>
            {isLoadingCategories ? (
              <p>Loading categories...</p>
            ) : (
              <CategoryList />
            )}
          </div>
        )}

        {isWelcomeVisible && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
