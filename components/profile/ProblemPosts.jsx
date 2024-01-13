import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

import {
  useGetAllProblemsByUserIdQuery,
  useDeleteProblemMutation,
} from "@/redux/features/problems/problemApi";

const ProblemPosts = ({ userId }) => {
  const {
    data: problems,
    isLoading,
    isError,
  } = useGetAllProblemsByUserIdQuery(userId);
  const [deleteProblemMutation] = useDeleteProblemMutation(); // Initialize the delete mutation

  // const handleDelete = async (problemId) => {
  //   console.log('Deleting problem with ID:', problemId);
  //   const confirmDeletion = window.confirm("Are you sure you want to delete this problem?");
  //   if (!confirmDeletion) {
  //     return; // User canceled the deletion
  //   }

  //   try {
  //     const f = await deleteProblemMutation.mutateAsync(problemId);
  //     console.log("Hello", f);
  //     // Optionally, you can handle success (e.g., show a success message or update the UI)
  //   } catch (error) {
  //     // Handle errors (e.g., show an error message)
  //     console.error('Error deleting problem:', error);
  //   }
  // };
  if (isLoading || isError) {
    return <div>Loading...</div>;
  }

  // if (isError) {
  //   return <div>Error loading problems.</div>;
  // }
  return (
    <div className="mt-2 p-4 lg:p-10 rounded-lg bg-white">
      <div className="flex justify-between pb-4">
        <h3 className="text-xl font-semibold">Posted Problems</h3>
        <Link href="/post/upload">
          <button className="btn btn_sar btn-sm">New Problems</button>
        </Link>
      </div>
      <div>
        {problems.map((problem) => (
          <div
            key={problem._id}
            className="flex flex-wrap gap-4 justify-between items-center mt-3 border-t pt-3"
          >
            <div>
              <Link href={`/apply/${problem._id}`}>
                <h2 className="font-semibold hover:text-primary">
                  {problem.title}
                </h2>
              </Link>
              {/* <p>{`Description: ${problem.description}`}</p>
            <p>{`Budget: ${problem.budget}`}</p> */}
              {/* Add more details as needed */}
            </div>
            {/* <button
            className="btn btn-error btn-sm rounded-full text-white"
            onClick={() => {
              console.log('Clicked Delete Button with ID:', problem.id);
              handleDelete(problem._id);
            }}
          >
            Delete
          </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemPosts;
