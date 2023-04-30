import {useState} from "react";
import {MdOutlineExpandLess,MdOutlineExpandMore} from "react-icons/md";

const Filter = () => {
  const [isExpend, setIsExpend] = useState(false);

  return (
    <div className="bg-white rounded-lg p-4 sticky top-2 overflow-y-auto">
      <div className="flex items-center justify-between">
      <h3 className="font-semibold text-xl">Filters</h3>
      <button className="md:hidden text-2xl" onClick={() => setIsExpend(!isExpend)}>
        {isExpend ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
      </button>
      </div>
      <div className={isExpend ? "block" : "hidden md:block"}>
      <h3 className="font-semibold text-sm uppercase text-gray-400 mt-6">
        Price Range (tk)
      </h3>
      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="">
          <input
            type="number"
            className="max-w-[100px] focus:outline-none border py-1 px-3 rounded-md"
            placeholder="From"
          />
          &nbsp;
          <input
            type="number"
            className="max-w-[100px] focus:outline-none border  py-1 px-3 rounded-md"
            placeholder="To"
          />
        </div>
        <button className="btn btn-sm px-4 text-white rounded-md">
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
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">English</span>
            <input
              type="checkbox"
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Mathematics</span>
            <input
              type="checkbox"
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Chemistry</span>
            <input
              type="checkbox"
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Physics</span>
            <input
              type="checkbox"
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text font-semibold">Others</span>
            <input
              type="checkbox"
              readOnly
              className="checkbox checkbox-sm checkbox-success"
            />
          </label>

          <button className="mt-2 btn btn-sm px-4 text-white rounded-md">
            Filter
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
