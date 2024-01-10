
import React, { useState } from 'react';
import { useGetAllCategoriesQuery } from '@/redux/features/category/categoryApi';
import CategoryList from './CategoryList';
import ProblemList from './ProblemList';
import Subcategory from './Subcategory'; 

const Sidebar = () => {
  const [isCategoryListVisible, setCategoryListVisible] = useState(false);
  const [isProblemListVisible, setProblemListVisible] = useState(false);
  const [isSubcategoryVisible, setSubcategoryVisible] = useState(false); 
  const [isWelcomeVisible, setWelcomeVisible] = useState(true);
  

  const { data: categoriesData, error: categoriesError, isLoading: isLoadingCategories } = useGetAllCategoriesQuery();

  const handleViewCategoryClick = () => {
    setCategoryListVisible(!isCategoryListVisible);
    setWelcomeVisible(false);
    setProblemListVisible(false);
    setSubcategoryVisible(false); 
  };

  const handleViewProblemClick = () => {
    setProblemListVisible(!isProblemListVisible);
    setWelcomeVisible(false);
    setCategoryListVisible(false);
    setSubcategoryVisible(false); 
  };

  const handleViewSubcategoryClick = () => {
    setSubcategoryVisible(!isSubcategoryVisible);
    setWelcomeVisible(false);
    setCategoryListVisible(false);
    setProblemListVisible(false); 
  };

  const handleHomeClick = () => {
    setWelcomeVisible(true);
    setCategoryListVisible(false);
    setProblemListVisible(false);
    setSubcategoryVisible(false); 
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4">
        <button
          className="bg-blue-500 text-white py-2 px-12 rounded mb-1 block"
          onClick={handleHomeClick}
        >
          Home
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-5 rounded mb-1 block"
          onClick={handleViewCategoryClick}
        >
          View Categories
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-6 rounded mb-1 block"
          onClick={handleViewProblemClick}
        >
          View Problems
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-3 rounded mb-1 block"
          onClick={handleViewSubcategoryClick}
        >
          View Subcategories
        </button>
      </div>

      <div className="w-3/4 p-4">
        {/* Display content based on visibility states */}
        {isCategoryListVisible && (
          <div>
            {isLoadingCategories ? (
              <p>Loading categories...</p>
            ) : (
              <CategoryList />
            )}
          </div>
        )}

        {isProblemListVisible && (
          <div>
            <h2 className="text-2xl font-bold mb-4">All Problems</h2>
            <ProblemList />
          </div>
        )}

        {isSubcategoryVisible && (
          <div>
            <Subcategory />
          </div>
        )}

        {isWelcomeVisible && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Panel</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
