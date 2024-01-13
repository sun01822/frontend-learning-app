import Filter from "@/components/feed/Filter";
import Problems from "@/components/feed/Problems";
import Search from "@/components/feed/Search";
import React from "react";
import { useGetAllProblemsQuery } from "@/redux/features/problems/problemApi";
import { useSelector } from "react-redux";

const Feed = () => {
  const { data, error } = useGetAllProblemsQuery(null);

  const { Problems: filteredProblems } = useSelector((state) => state.problems);

  if (error) console.log("Login: ", error);

  return (
    <div>
      <Search />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-4">
          <Filter />
        </div>
        <div className="col-span-12 md:col-span-8">
          {data && <Problems problems={filteredProblems.data || data.data} />}
        </div>
      </div>
    </div>
  );
};

export default Feed;
