import Link from "next/link";
import React from "react";

const ProblemPosts = () => {
  return (
    <div className="mt-2 p-4 lg:p-10 rounded-lg bg-white">
      <div className="flex justify-between pb-4">
        <h3 className="text-xl font-semibold">Posted Problems</h3>
        <Link href="/post/125">
          <button className="btn btn_sar btn-sm">New Problems</button>
        </Link>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-between items-center mt-3 border-t pt-3">
          <Link href="/problems/2">
            <h2 className="font-semibold hover:text-primary">
              Need help hosting topic on Javascript.
            </h2>
          </Link>
          <button className="btn btn-error btn-sm rounded-full text-white">
            Delete
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-between items-center mt-3 border-t pt-3">
          <Link href="/problems/2">
            <h2 className="font-semibold hover:text-primary">Math problem</h2>
          </Link>
          <button className="btn btn-error btn-sm rounded-full text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemPosts;
