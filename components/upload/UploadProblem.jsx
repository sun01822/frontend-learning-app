// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
// import { useGetAllsubCategoriesQuery } from "@/redux/features/subcategory/subcategoryApi";

// const UploadProblem = () => {
//   // Fetch categories from API
//   const { data: categoriesData, error: categoriesError } = useGetAllCategoriesQuery();
//   const { data: subcategoriesData, error: subcategoriesError } = useGetAllsubCategoriesQuery();
//   console.log("hello",subcategoriesData);


//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [subcategory, setSubcategory] = useState("");
//   const [budget, setBudget] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleCategoryChange = (e) => {
//     const selectedCategory = e.target.value;
//     setCategory(selectedCategory);
//     setSubcategory(""); // Reset subcategory when changing category
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Form validation
//     let errors = {};
//     if (!title) {
//       errors.title = "Title is required";
//     }
//     if (!description) {
//       errors.description = "Description is required";
//     }
//     if (!category) {
//       errors.category = "Category is required";
//     }
//     if (!subcategory) {
//       errors.subcategory = "Subcategory is required";
//     }
//     if (!budget) {
//       errors.budget = "Budget is required";
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     // Form submission logic
//     // ...

//     // Reset form fields
//     setTitle("");
//     setDescription("");
//     setCategory("");
//     setSubcategory("");
//     setBudget("");
//     setErrors({});
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white border-b py-6 px-5 rounded-lg mt-2"
//     >
//       <h1 className="secondary_title uppercase">Add Problem Title</h1>
//       <br />
//       <textarea
//         id="title"
//         rows="2"
//         className="textarea textarea-bordered w-full"
//         placeholder="Need help to host my website ..."
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       {errors.title && <span className="text-red-500">{errors.title}</span>}
//       <br />
//       <br />
//       <p className="mb-3">
//         The more context you provide, the better our experts can help you.
//       </p>
//       <textarea
//         id="description"
//         rows="4"
//         className="textarea textarea-bordered w-full"
//         placeholder="Provide more context here..."
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       {errors.description && (
//         <span className="text-red-500">{errors.description}</span>
//       )}
//       <br /> <br />
//       <div className="flex flex-col md:flex-row justify-between mt-4">
//         <select
//           id="category"
//           className="select select-bordered"
//           value={category}
//           onChange={handleCategoryChange}
//         >
//           <option value="">Choose a category</option>
//           {categoriesData &&
//             categoriesData.map((cat) => (
//               <option key={cat._id} value={cat._id}>
//                 {cat.category_name}
//               </option>
//             ))}
//         </select>
//         {errors.category && (
//           <span className="text-red-500">{errors.category}</span>
//         )}
//         {category && (
//           <select
//             id="subcategory"
//             className="select select-bordered ml-2"
//             value={subcategory}
//             onChange={(e) => setSubcategory(e.target.value)}
//           >
//             <option value="">Choose a subcategory</option>
//             {categoriesData &&
//               categoriesData
//                 .find((cat) => cat._id === category)
//                 .subcategories.map((subcat) => (
//                   <option key={subcat} value={subcat}>
//                     {subcat}
//                   </option>
//                 ))}
//           </select>
//         )}
//         {errors.subcategory && (
//           <span className="text-red-500">{errors.subcategory}</span>
//         )}
//         <input
//           type="number"
//           id="budget"
//           className="input input-bordered"
//           placeholder="Enter budget (Taka)"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//         />
//         {errors.budget && <span className="text-red-500">{errors.budget}</span>}
//       </div>
//       <div className="mt-6 flex justify-end">
//         <button type="reset" className="btn_secondary mr-4">
//           Cancel
//         </button>
//         <button type="submit" className="btn btn_sar px-5 py-2 rounded-full">
//           Post your problem
//         </button>
//       </div>
//     </form>
//   );
// };

// export default UploadProblem;


import Link from "next/link";
import React from "react";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useGetAllsubCategoriesQuery } from "@/redux/features/subcategory/subcategoryApi";
import { useForm, Controller } from "react-hook-form";

const UploadProblem = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  const { data: categoriesData } = useGetAllCategoriesQuery();

  // Fetch subcategories from the subcategory API
  const { data: subcategoriesData } = useGetAllsubCategoriesQuery();

  const handleCategoryChange = (selectedCategory) => {
    setValue("category", selectedCategory);
    setValue("subcategory", ""); 
  };

  const onSubmit = (data) => {
    const selectedCategoryId = data.category;
    const selectedCategory = categoriesData.find((cat) => cat._id === selectedCategoryId);

    const modifiedData = {
      ...data,
      category: selectedCategory ? selectedCategory.category_name : '',
    };

    // Log the modified data
    console.log("Collected Data:", modifiedData);

    // Reset form fields
    setValue("title", "");
    setValue("description", "");
    setValue("category", "");
    setValue("subcategory", "");
    setValue("budget", "");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border-b py-6 px-5 rounded-lg mt-2"
    >
      <h1 className="secondary_title uppercase">Add Problem Title</h1>
      <br />
      <textarea
        {...register("title", { required: "Title is required" })}
        id="title"
        rows="2"
        className="textarea textarea-bordered w-full"
        placeholder="Need help to host my website ..."
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}
      <br />
      <br />
      <p className="mb-3">
        The more context you provide, the better our experts can help you.
      </p>
      <textarea
        {...register("description", { required: "Description is required" })}
        id="description"
        rows="4"
        className="textarea textarea-bordered w-full"
        placeholder="Provide more context here..."
      />
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
      <br /> <br />
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <select
          {...register("category", { required: "Category is required" })}
          id="category"
          className="select select-bordered"
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">Choose a category</option>
          {categoriesData &&
            categoriesData.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.category_name}
              </option>
            ))}
        </select>
        {errors.category && (
          <span className="text-red-500">{errors.category.message}</span>
        )}
        {watch("category") && (
          <Controller
            control={control}
            name="subcategory"
            render={({ field }) => (
              <select
                {...field}
                className="select select-bordered ml-2"
              >
                <option value="">Choose a subcategory</option>
                {subcategoriesData &&
                  subcategoriesData
                    .filter((subcat) => subcat.categoryId === watch("category"))
                    .map((subcat) => (
                      <option key={subcat._id} value={subcat.name}>
                        {subcat.name}
                      </option>
                    ))}
              </select>
            )}
          />
        )}
        {errors.subcategory && (
          <span className="text-red-500">{errors.subcategory.message}</span>
        )}
        <input
          {...register("budget", { required: "Budget is required" })}
          type="number"
          id="budget"
          className="input input-bordered"
          placeholder="Enter budget (Taka)"
        />
        {errors.budget && (
          <span className="text-red-500">{errors.budget.message}</span>
        )}
      </div>
      <div className="mt-6 flex justify-end">
        <button type="reset" className="btn_secondary mr-4">
          Cancel
        </button>
        <button type="submit" className="btn btn_sar px-5 py-2 rounded-full">
          Post your problem
        </button>
      </div>
    </form>
  );
};

export default UploadProblem;
