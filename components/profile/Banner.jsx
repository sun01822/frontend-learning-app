import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useGetTotalAmountForTutorQuery } from "@/redux/features/payment/paymentApi";

const Banner = () => {
  const { User } = useSelector((state) => state.user);
  const { data: totalEarning, error, isLoading } = useGetTotalAmountForTutorQuery(User?._id);

  return (
    <div className="flex flex-wrap gap-3 items-center justify-between bg-white mt-2 p-4 lg:p-10 rounded-lg">
      <div className="flex gap-3">
        <img
          className="w-[100px] h-[100px] p-1 rounded-full border-2 border-primary"
          src={User?.image || "/default/avatar.jpg"}
          alt="Rakib"
        />
        <div>
          <h3 className="text-xl font-semibold flex items-center">
            {User?.name} &nbsp;
          </h3>
          <p className="text-sm pt-1">{User?.workingAs}</p>
          <p className="text-sm pt-1">{User?.companyName}</p>
          <Link
            href={`/setting/${User?._id}}`}
            className="btn btn-sm mt-3 flex items-center gap-2"
          >
            <AiFillEdit />
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="min-w-[300px] bg-base-300 p-4 rounded-lg">
        <div className="flex justify-between border-b border-gray-400 pb-3">
          <p className="font-semibold">Total Earning</p>
          <p className="font-bold"> {isLoading ? "Loading..." : totalEarning?.totalAmount || "0"}</p>
        </div>
        <div className="flex justify-between pt-3">
          <p className="font-semibold">Level</p>
          <p className="font-bold">1</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
