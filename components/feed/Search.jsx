import { AiOutlineSearch } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import { useGetAllProblemsQuery } from "@/redux/features/problems/problemApi";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const {} = useGetAllProblemsQuery(query, {
    refetchOnMountOrArgChange: true,
  });

  const handleSeach = (e) => {
    e.preventDefault();
    let search = e.target[0].value;

    if (search === "") {
      alert("Seach could't be empty");
      return;
    }
    setQuery(`search=${search}`);
  };

  return (
    <div className="w-full bg-white my-2 p-5 rounded-lg flex items-center justify-center gap-3">
      <h2 className="text-xl font-semibold">Browse</h2>
      <form
        onSubmit={handleSeach}
        className="border rounded-full lg:min-w-[500px] max-w-[400px] flex items-center justify-between overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 focus:outline-none px-5 border-r"
        />
        <button type="submit" className="px-5">
          <AiOutlineSearch />
        </button>
      </form>
      <button className="btn btn_sar" onClick={() => setQuery("")}>
        <IoMdRefresh /> &nbsp; Clear
      </button>
    </div>
  );
};

export default Search;
