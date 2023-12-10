import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  useGetSkillOfUserQuery,
  useAddSkillMutation,
  useDeleteSkillByIdMutation,
} from "@/redux/features/skill/skillApi";

const Skills = () => {
  const [showModal, setShowModal] = useState(false);
  const { User } = useSelector((state) => state.user);

  const { data: skills, isError } = useGetSkillOfUserQuery(
    { userId: User?._id },
    { refetchOnMountOrArgChange: true }
  );

  const [addSkill] = useAddSkillMutation();
  const [deleteSkillById] = useDeleteSkillByIdMutation();

  const handleAddSkill = async (newSkill) => {
    // Perform add operation and showing the toaster
    try {
      await addSkill({ skillData: { userId: User?._id, skills: [newSkill] } });
      toast.success("Skill added successfully!");
    } catch (error) {
      console.error("Error adding skill:", error);
      toast.error("Failed to add skill. Please try again.");
    }
  };

  // Modified handleDeleteSkill to accept skillId directly
  const handleDeleteSkill = async (skillId, skillName) => {
    // Log the skill information before deletion
    //console.log(`Deleting Skill: ${skillName} (ID: ${skillId})`);

    // Perform the deletion and showing the toaster
    try {
      await deleteSkillById({ userId: User?._id, id: skillId });
      toast.success("Skill deleted successfully!");
    } catch (error) {
      console.error("Error deleting skill:", error);
      toast.error("Failed to delete skill. Please try again.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="mt-2 p-4 lg:p-10 rounded-lg bg-white min-w-[350px]">
        <div className="flex justify-between pb-4">
          <h3 className="text-xl font-semibold">Skills</h3>
          <button
            className="btn btn_sar btn-sm"
            onClick={() => setShowModal(true)}
          >
            Add skills
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {skills?.map((userSkill) =>
                userSkill.skills.map((skill) => (
                  <tr key={userSkill._id + skill._id}>
                    <td>{skill.name}</td>
                    <td>{skill.level}</td>
                    <td>
                      <button
                        className="btn btn-error btn-xs rounded-full text-white"
                        onClick={() => handleDeleteSkill(skill._id, skill.name)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showModal && (
          <Modal setShowModal={setShowModal} onAddSkill={handleAddSkill} />
        )}
      </div>
    </>
  );
};

export default Skills;
