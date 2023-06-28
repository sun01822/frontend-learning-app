import Link from "next/link";
import React from "react";
import { useState } from "react";

const UploadProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState({});

  const categories = [
    {
      name: "Computer Science",
      subcategories: [
        "Algorithms",
        "Data Structures",
        "Database Management",
        "Machine Learning",
      ],
    },
    {
      name: "Electrical Engineering",
      subcategories: [
        "Circuit Design",
        "Power Systems",
        "Digital Signal Processing",
        "Control Systems",
      ],
    },
    {
      name: "Math",
      subcategories: [
        "Calculus",
        "Linear Algebra",
        "Probability",
        "Statistics",
      ],
    },
    {
      name: "Physics",
      subcategories: [
        "Classical Mechanics",
        "Electromagnetism",
        "Quantum Mechanics",
        "Thermodynamics",
      ],
    },
    {
      name: "Chemistry",
      subcategories: [
        "Organic Chemistry",
        "Inorganic Chemistry",
        "Physical Chemistry",
        "Analytical Chemistry",
      ],
    },
    {
      name: "Website Hosting",
      subcategories: [
        "Shared Hosting",
        "Virtual Private Server (VPS)",
        "Dedicated Hosting",
        "Cloud Hosting",
      ],
    },
    {
      name: "Web Development",
      subcategories: [
        "Front-end Development",
        "Back-end Development",
        "Full-stack Development",
        "Responsive Design",
      ],
    },
    {
      name: "Graphic Design",
      subcategories: [
        "Logo Design",
        "UI/UX Design",
        "Print Design",
        "Illustration",
      ],
    },
    {
      name: "Marketing",
      subcategories: [
        "Digital Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      name: "Others",
      subcategories: ["General Help", "Miscellaneous", "Custom Category"],
    },
  ];

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(""); // Reset subcategory when changing category
  };

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
    if (!subcategory) {
      errors.subcategory = "Subcategory is required";
    }
    if (!budget) {
      errors.budget = "Budget is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Form submission logic
    // ...

    // Reset form fields
    setTitle("");
    setDescription("");
    setCategory("");
    setSubcategory("");
    setBudget("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border-b py-6 px-5 rounded-lg mt-2"
    >
      <h1 className="secondary_title uppercase">Add Problem Title</h1>
      <br />
      <textarea
        id="title"
        rows="2"
        className="textarea textarea-bordered w-full"
        placeholder="Need help to host my website ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <span className="text-red-500">{errors.title}</span>}
      <br />
      <br />
      <p className="mb-3">
        The more context you provide, the better our experts can help you.
      </p>
      <textarea
        id="description"
        rows="4"
        className="textarea textarea-bordered w-full"
        placeholder="Provide more context here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <span className="text-red-500">{errors.description}</span>
      )}
      <br /> <br />
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <select
          id="category"
          className="select select-bordered"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Choose a category</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-red-500">{errors.category}</span>
        )}
        {category && (
          <select
            id="subcategory"
            className="select select-bordered ml-2"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <option value="">Choose a subcategory</option>
            {categories
              .find((cat) => cat.name === category)
              .subcategories.map((subcat) => (
                <option key={subcat} value={subcat}>
                  {subcat}
                </option>
              ))}
          </select>
        )}
        {errors.subcategory && (
          <span className="text-red-500">{errors.subcategory}</span>
        )}
        <input
          type="number"
          id="budget"
          className="input input-bordered"
          placeholder="Enter budget (Taka)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        {errors.budget && <span className="text-red-500">{errors.budget}</span>}
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
