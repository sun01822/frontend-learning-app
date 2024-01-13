import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { useGetConversationsQuery } from "@/redux/features/payment/paymentApi";
import { useSelector } from "react-redux";
import Link from "next/link";

const MessageDropDown = () => {
  const { User } = useSelector((state) => state.user);
  const { data: conversations } = useGetConversationsQuery(User?._id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0}>
          <p className="indicator tab tab-lifted tab-active border-none text-xl">
            <span className="bg-base-200 p-2 rounded-full">
              <AiOutlineMessage />
            </span>
            <span className="badge rounded-full badge-error -mt-6 text-white font-bold">
              {conversations?.length}
            </span>
          </p>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] w-96 bg-white rounded-md shadow-lg border border-gray-300"
        >
          <div className="p-3 flex justify-between border-b">
            <h2 className="text-lg font-semibold">Conversations</h2>
            <Link href="/conversations/38">
              <span className="text-blue-500">See Messages</span>
            </Link>
          </div>
          <ul className="h-72 overflow-y-auto">
            {conversations?.map((user, index) => (
              <li
                key={index}
                className="flex items-center border-b p-2 hover:bg-gray-100 relative"
              >
                <img
                  src="/images/avatar.jpg"
                  className="w-10 h-10 object-cover rounded-full mr-2"
                />
                <div>
                  <div className="font-semibold text-sm">
                    {user.student_id.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {user.tutor_id.name}
                  </div>
                </div>
                {user.isActive && (
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full right-2 top-1" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MessageDropDown;
