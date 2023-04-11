import React from "react";

const Filter = () => {
  return (
    <div className="bg-white rounded-lg p-4 sticky top-2">
      <h3 className="font-semibold text-xl">Filters</h3>
      <h3 className="font-semibold text-sm uppercase text-gray-400 mt-6">
        Price Range (tk)
      </h3>
      <div className="flex items-center justify-between mt-2 mb-4">
        <div>
          <input
            type="number"
            className="max-w-[120px] focus:outline-none border py-1 px-3 rounded-md"
            placeholder="From"
          />
          <input
            type="number"
            className="max-w-[120px] focus:outline-none border  py-1 px-3 rounded-md"
            placeholder="To"
          />
        </div>
        <button className="btn btn-sm bg-primary px-4 text-white rounded-md">
          Filter
        </button>
      </div>
      <h3 className="font-semibold text-sm uppercase text-gray-400 mt-6">
        Subjects
      </h3>
      <div>
        <div className="form-control ">
          <label className="label cursor-pointer ">
            <span className="label-text font-semibold">Programming</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">English</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Mathematics</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Chemistry</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Physics</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Others</span>
            <input
              type="checkbox"
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>

          <button className="mt-2 btn btn-sm bg-primary px-4 text-white rounded-md">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
