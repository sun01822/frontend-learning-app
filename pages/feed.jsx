import Filter from "@/components/feed/Filter";
import Problems from "@/components/feed/Problems";
import Search from "@/components/feed/Search";
import React from "react";

const Feed = () => {
  return (
    <div>
      <Search />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 md:col-span-4">
          <Filter />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Problems />

        </div>
      </div>
    </div>
  );
};

export default Feed;
