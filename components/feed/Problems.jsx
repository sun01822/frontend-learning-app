import React from "react";
import Card from "./Card";

const Problems = ({ problems }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-xl pb-2 pl-4">Results</h3>
      {problems.length === 0 && <p className="p-4">No problems found!</p>}
      <div>
        {problems &&
          problems.map((problem) =>
            problem.isPaid ? "  " : <Card key={problem._id} problem={problem} />
          )}
      </div>
    </div>
  );
};

export default Problems;
