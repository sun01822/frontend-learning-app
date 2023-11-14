import React from "react";
import Card from "./Card";

const Problems = ({ problems }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-xl pb-2 pl-4 border-b">Results</h3>
      <div>
        {problems &&
          problems.map((problem) => (
            <Card key={problem._id} problem={problem} />
          ))}
      </div>
    </div>
  );
};

export default Problems;
