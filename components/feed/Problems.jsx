import React from "react";
import Card from "./Card";

const Problems = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-xl pb-2 pl-4">Results</h3>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Problems;
