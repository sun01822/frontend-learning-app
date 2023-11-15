import Link from "next/link";
import { useGetAllCommentsOnPostQuery } from "@/redux/features/comment/commentApi";
import moment from "moment";

const Proposal = ({ id }) => {
  // Fetch comments for the current post using the useGetAllCommentsOnPostQuery hook
  const { data: comments, isError, error } = useGetAllCommentsOnPostQuery({ postId: id }, {refetchOnMountOrArgChange: true});
  console.log("Comment: ", comments);
  console.log("ProblemID: ", id);

  console.log("Error: ", error);
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Proposals</h2>

      {isError && <p>Error loading proposals</p>}

      {!isError && comments && comments.length === 0 && (
        <p>No proposals available yet.</p>
      )}

      {comments && comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment._id} className="border p-4 rounded-md">
              <p className="text-gray-700">{comment.proposal}</p>
              <div className="flex justify-between items-center mt-2">
                {/* <span className="text-sm text-gray-500">
                  Submitted {moment(comment.createdAt).fromNow()}
                </span> */}
                {/* <Link href={`/profile/${comment.userid}`}>
                  <a className="text-blue-500">View Profile</a>
                </Link> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Proposal;
