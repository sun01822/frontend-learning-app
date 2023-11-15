import { useGetAllCommentsOnPostQuery } from "@/redux/features/comment/commentApi";
import moment from "moment";

const Proposal = ({ id }) => {
  const { data: comments, isError, error } = useGetAllCommentsOnPostQuery(
    { postId: id },
    { refetchOnMountOrArgChange: true }
  );
  // Proposal Started
  return (  
    <div className="mt-4 space-y-4">
      <h2 className="text-2xl font-semibold mt-16 mb-4">Proposals</h2>

      {isError && <p className="text-red-500">Error loading proposals</p>}

      {!isError && comments && comments.length === 0 && (
        <p>No proposals available yet.</p>
      )}

      {comments && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className="border p-4 rounded-md">
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
                <span className="text-lg font-semibold text-green-500">
                  {comment.price} tk
                </span>
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
