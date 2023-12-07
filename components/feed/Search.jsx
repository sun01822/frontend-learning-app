import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-full bg-white my-2 p-5 rounded-lg flex items-center justify-center gap-3">
      <h2 className="text-xl font-semibold">Browse</h2>
      <div className="border rounded-full lg:min-w-[500px] max-w-[400px] flex items-center justify-between overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 focus:outline-none px-5 border-r"
        />
        <button className="px-5">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
