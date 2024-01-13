// Importing necessary modules
import { AiOutlineStar, AiOutlineSend } from "react-icons/ai";
import Link from "next/link";
import moment from "moment";

// Functional component Card
const Card = ({ problem }) => {
  return (
    <div className="border mb-2 py-4 rounded-lg px-5 hover:scale-[1.02] hover:shadow-lg duration-150">
      {/* Header */}
      <div className="flex items-center flex-wrap gap-2 justify-between">
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
            <p className="text-sm text-gray-400">
              {moment(problem?.createdAt).startOf("hour").fromNow()}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-800 font-semibold">৳ {problem?.budget} tk</p>
        </div>
      </div>
      {/* Problem */}
      <Link href={`/apply/${problem?._id}`}>
        <h2 className="text-xl hover:text-sky-500 duration-200 font-semibold mt-3">
          {problem?.title}
        </h2>
      </Link>

      <div className="mt-4">
        <div className="flex items-center gap-4">
          <Link href={`/apply/${problem?._id}`}>
            <button className="btn btn-xs gap-2 btn_sar text-white rounded-full px-3 capitalize">
              Details <AiOutlineSend />
            </button>
          </Link>
          <p className="text-sm">#{problem?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
