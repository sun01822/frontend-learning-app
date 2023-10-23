import React from "react";

const Skills = () => {
  return (
    <div className="mt-2 p-4 lg:p-10 rounded-lg bg-white min-w-[350px]">
      <div className="flex justify-between pb-4">
        <h3 className="text-xl font-semibold">Skills</h3>
        <button className="btn btn_sar btn-sm">Add skills</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Lavel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Javascript</td>
              <td>Advance</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>Beginner</td>
            </tr>
            <tr>
              <td>C++</td>
              <td>Intermediet</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skills;
