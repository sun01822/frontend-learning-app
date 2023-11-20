import { useGetAllCommentsOnPostQuery } from "@/redux/features/comment/commentApi";
import moment from "moment";

const Proposal = ({ id }) => {
  const { data: comments, isError } = useGetAllCommentsOnPostQuery(
    { postId: id },
    { refetchOnMountOrArgChange: true }
  );

  const handleApply = (proposalId) => {
    // Implement your logic for applying to the proposal here
    console.log(`Applying to proposal with ID: ${proposalId}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Proposals</h2>

      {isError && <p className="text-red-500">Error loading proposals</p>}

      {!isError && comments && comments.length === 0 && (
        <p>No proposals available yet.</p>
      )}

      {comments && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className="border p-4 rounded-md mt-2">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img
                    src={comment.userId.image || "/default/avatar.jpg"}
                    alt={comment.userId.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <span className="text-lg font-semibold text-blue-500">
                    {comment.userId.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-green-500">
                    {comment.price} tk
                  </span>
                  <button
                    className="bg-blue-500 ml-4 btn-xs rounded-full text-white"
                    onClick={() => handleApply(comment._id)}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{comment.proposal}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {moment(comment.createdAt).fromNow()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proposal;
