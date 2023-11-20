import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ setShowModal, onAddSkill }) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [isSkillSelected, setIsSkillSelected] = useState(true);

  const handleAddSkill = () => {
    if (!selectedSkill) {
      toast.error("Please select a skill name.");
      setIsSkillSelected(false);
      return;
    }

    const newSkill = { name: selectedSkill, level };
    onAddSkill(newSkill);
    setSelectedSkill("");
    setLevel("Beginner");
    setShowModal(false);
  };

  const skillOptions = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    // Add more skills as needed
  ];

  const levelOptions = ["Beginner", "Intermediate", "Advanced", "Professional"];

  return (
    <>
      <Toaster/>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="modal-box">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-green-500">
                Add Skill
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="selectedSkill"
                >
                  Skill Name:
                </label>
                <select
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    !isSkillSelected ? "border-red-500" : ""
                  }`}
                  id="selectedSkill"
                  value={selectedSkill}
                  onChange={(e) => {
                    setSelectedSkill(e.target.value);
                    setIsSkillSelected(true);
                  }}
                >
                  <option value="" disabled>
                    Select a Skill
                  </option>
                  {skillOptions.map((skill) => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="level"
                >
                  Level:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                >
                  {levelOptions.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleAddSkill}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
