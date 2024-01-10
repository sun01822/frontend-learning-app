import React, { useEffect } from 'react';
import {
  useGetAllProblemsQuery,
  useDeleteProblemMutation,
} from '@/redux/features/problems/problemApi'; 

const ProblemList = () => {
  const { data: problems, error, isLoading, refetch } = useGetAllProblemsQuery();
  const [deleteProblem] = useDeleteProblemMutation();

  useEffect(() => {
    refetch();
  }, [refetch]); 

  const handleDelete = async (problemId) => {
    try {
      await deleteProblem(problemId);
      refetch();
    } catch (error) {
      console.error('Error deleting problem:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Serial Number</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {problems && problems.data.map((problem, index) => (
            <tr key={problem._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{problem.title}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDelete(problem._id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProblemList;
