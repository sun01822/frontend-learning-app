import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { useCreateProblemMutation } from "@/redux/features/problems/problemApi";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useGetAllsubCategoriesQuery } from "@/redux/features/subcategory/subcategoryApi";
import { useRouter } from "next/router";

const UploadProblem = () => {
  const [createProblem] = useCreateProblemMutation();
  const { User } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm();

  const router = useRouter();

  // Fetch categories, subcategories
  const { data: categoriesData } = useGetAllCategoriesQuery();
  const { data: subcategoriesData } = useGetAllsubCategoriesQuery();

  const handleCategoryChange = (selectedCategory) => {
    setValue("category", selectedCategory);
    setValue("subcategory", "");
  };

  const onSubmit = async (data) => {
    try {
      const selectedCategoryId = data.category;
      const selectedCategory = categoriesData.find(
        (cat) => cat._id === selectedCategoryId
      );

      const modifiedData = {
        ...data,
        category: selectedCategory ? selectedCategory.category_name : "",
        user: User._id,
      };
      // const { category, ...dataToSend } = modifiedData;
      const response = await createProblem(modifiedData);

      console.log("Collected Data:", modifiedData);
      console.log("Res", response);
      if (response && response.data && response.data.success) {
        // Show success toast
        toast.success(response.data.message || "Problem posted successfully");

        // Reset form fields
        setValue("title", "");
        setValue("description", "");
        setValue("category", "");
        setValue("subcategory", "");
        setValue("budget", "");
      } else {
        // Show error toast if the post was not successful
        toast.error(response?.data?.message || "Error posting the problem");
      }
    } catch (error) {
      //console.error('Error posting the problem:', error.message);
      // Show error toast
      toast.error("Error posting the problem");
    }
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
        <Toaster />
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
              <select {...field} className="select select-bordered ml-2">
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
        <button
          type="reset"
          className="btn_secondary mr-4"
          onClick={() => {
            router.back();
          }}
        >
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
