import { useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { useGetAllCategoriesQuery } from "@/redux/features/category/categoryApi";
import { useGetAllProblemsQuery } from "@/redux/features/problems/problemApi";
import { IoFilterSharp } from "react-icons/io5";

const Filter = () => {
  const [isExpend, setIsExpend] = useState(false);
  const [query, setQuery] = useState("");
  const { data: categories } = useGetAllCategoriesQuery(null);
  const {} = useGetAllProblemsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let min_tk = e.target[0].value;
    let max_tk = e.target[1].value;

    if (min_tk < 0) {
      alert("Minimum price can't be negative");
      return;
    }
    setQuery(`min_tk=${min_tk}&max_tk=${max_tk}`);
  };

  return (
    <div className="bg-white rounded-lg p-4 sticky top-2 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">Filters</h3>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsExpend(!isExpend)}
        >
          {isExpend ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </button>
      </div>
      <div className={isExpend ? "block" : "hidden md:block"}>
        <h3 className="font-semibold text-sm uppercase text-gray-400 mt-6">
          Price Range (tk)
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between mt-2 mb-4 px-2"
        >
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
          <button className="btn btn-sm p2-4 capitalize text-white rounded-md">
            <IoFilterSharp /> &nbsp; Filter
          </button>
        </form>
        <h3 className="font-semibold text-sm uppercase text-gray-400 mt-6 mb-2">
          Subjects
        </h3>
        <div>
          <ul>
            {categories?.map((category) => (
              <li
                className="py-2 border-t px-3 hover:bg-gray-400/30 cursor-pointer"
                key={category._id}
                onClick={() => setQuery(`category=${category.category_name}`)}
              >
                {category.category_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
