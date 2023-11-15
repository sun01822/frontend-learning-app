import { AiOutlineSend } from "react-icons/ai";
import Rating from "@/components/common/Rating";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProblemByIdQuery } from "@/redux/features/problems/problemApi";
import moment from "moment";
import Proposal from "@/components/apply/Proposal";

const Apply = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: problem, error } = useGetProblemByIdQuery(router.query.id, {
    refetchOnMountOrArgChange: true,
  });

  const Topics = ["Programming", "Javascript", "Website"];
  return (
    <>
      <div className="bg-white border-b py-6 px-5 rounded-lg mt-2">
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
            <div>
              <div className="flex items-center gap-3">
                <Link href="/profile/rakib38">
                  <p className="font-semibold">{problem?.user?.name}</p>
                </Link>
                <Rating />
                (4.4)
              </div>
              <p className="text-sm">
                {moment(problem?.createdAt).startOf("hour").fromNow()}
              </p>
            </div>
          </div>
          <div>
            <p className=" text-gray-800 font-semibold">
              ৳ {problem?.budget} tk
            </p>
          </div>
        </div>
        {/* Problem */}
        <h3 className="text-sm font-semibold pt-4 text-gray-400">Problem</h3>
        <h2 className="text-xl font-semibold text-primary">{problem?.title}</h2>
        <p className="text-sm font-semibold pt-2 pb-2 text-gray-400">
          Description
        </p>
        <p className="">{problem?.description}</p>

        <br />
        <hr />
        <br />

        <form>
          <h3 className="font-semibold mb-2">
            Write Description <span>(21/2000)</span>
          </h3>
          <textarea
            placeholder="About your experience"
            className="textarea textarea-sm  rounded-lg w-full bg-base-200 focus:outline-none"
          ></textarea>
          <h3 className="font-semibold mb-2 mt-4">
            Price <span>(Max 150tk)</span>
          </h3>
          <input
            type="number"
            placeholder="tk"
            className="bg-base-200 focus:outline-none rounded-md py-2 px-3"
          />
          <div className="mt-10">
            <div className="flex items-center gap-4">
              <Link href="#">
                <button className="btn btn-sm gap-2 btn_sar text-white rounded-full px-3">
                  Apply Job <AiOutlineSend />
                </button>
              </Link>
              <Link href="/feed">
                <button className="btn btn-sm gap-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full px-3">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* Proposal call */}
      <div className="bg-white rounded-md p-5 mt-5">
        <Proposal id={id} />
      </div>
    </>
  );
};

export default Apply;
