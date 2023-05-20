import Link from "next/link";
import React from "react";
import { useState } from "react";

const UploadProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let errors = {};
    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!category) {
      errors.category = "Category is required";
    }
    if (!budget) {
      errors.budget = "Budget is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-b py-6 px-5 rounded-lg mt-2"
    >
      <h1 className="text-5xl text-gray-900 dark:text-black">Add a Title</h1>
      <hr />
      <br />
      <textarea
        id="title"
        rows="2"
        className="textarea textarea-sm  rounded-lg w-full bg-base-200 focus:outline-none"
        placeholder="Need help to host my website ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span className="text-red-500">{errors.title}</span>}
      <br />
      <br />
      <p>The more context you provide, the better our experts can help you.</p>
      <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-200" />
      <textarea
        id="description"
        rows="4"
        className="textarea textarea-sm  rounded-lg w-full bg-base-200 focus:outline-none"
        placeholder="Provide more context here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description}</span>
      )}
      <br /> <br />
      <div className="justify-between mt-4 flex">
        <select
          id="category"
          className="block mb-2 text-sm font-medium text-gray-900 border-solid"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose a category</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Website Hosting">Website Hosting</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
        </select>
        {errors.category && (
          <span className="text-red-500">{errors.category}</span>
        )}
        <input
          type="number"
          id="budget"
          className="bg-base-200 focus:outline-none rounded-md py-3 px-3  "
          placeholder="Enter budget (Taka)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        {errors.budget && <span className="text-red-500">{errors.budget}</span>}
      </div>
      <div className="mt-6  flex justify-end">
        <button
          type="submit"
          className="btn btn-sar px-5 py-2 mr-4 rounded-full"
        >
          Post your problem
        </button>
        <button
          type="reset"
          className="btn bg-gray-700 hover:bg-red-600 px-5 py-2 mr-4 rounded-full"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UploadProblem;
