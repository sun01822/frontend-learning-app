// Importing necessary modules
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import moment from "moment";
import { useGetAllCommentsOnPostQuery } from "@/redux/features/comment/commentApi";
import { useRouter } from "next/router";

// Functional component Card
const Card = ({ problem }) => {
  // Fetch comments for the current post using the useGetAllCommentsOnPostQuery hook
   // Get the problem ID from the URL
   const router = useRouter();
   const { id } = router.query;
 
   // Fetch comments for the current post using the useGetAllCommentsOnPostQuery hook
   const { data: comments, isLoading, isError } = useGetAllCommentsOnPostQuery({ postId: id });
 
  // const { data: comments, isLoading, isError } = useGetAllCommentsOnPostQuery({ postId: problem?._id });
  const Topics = ["Programming", "Javascript", "Website"];

  return (
    <div className="bg-white border-b py-6 px-5 rounded-lg">
      {/* Header */}
      <div className="flex flex-wrap gap-2 justify-between">
        <div className="flex items-center gap-2">
          <Link href="/profile/rakib38">
            <img
              src={problem?.user?.image || "/default/avatar.jpg"}
              className="w-12 h-12 rounded-full"
              alt="Rakib"
            />
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3">
              <Link href="/profile/rakib38">
                <p className="font-semibold text-gray-600 capitalize">
                  {problem?.user?.name}
                </p>
              </Link>
            </div>
            <p className="text-sm">
              {moment(problem?.createdAt).startOf("hour").fromNow()}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-800 font-semibold">৳ {problem?.budget} tk</p>
        </div>
      </div>
      {/* Problem */}
      <h2 className="text-xl font-semibold mt-3">{problem?.title}</h2>

      <div className="mt-4">
        <div className="flex items-center gap-4">
          <Link href={`/apply/${problem?._id}`}>
            <button className="btn btn-xs gap-2 btn_sar text-white rounded-full px-3">
              Details <AiOutlineSend />
            </button>
          </Link>
          <p className="flex gap-2 text-primary items-center">
            <AiOutlineStar /> Interested
            <span className="font-semibold">9</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap text-sm gap-3 mt-3 text-gray-400">
        {Topics.map((data, index) => (
          <p key={index}>#{data}</p>
        ))}
      </div>

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        {isLoading ? (
          <p>Loading comments...</p>
        ) : isError ? (
          <p>Error loading comments</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>
                {/* Display each comment */}
                <div>
                  <p>{comment.proposal}</p>
                  <p>Price: {comment.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default Card;
