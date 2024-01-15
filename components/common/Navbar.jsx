import React from "react";
import Image from "next/image";
import NotificationDropDown from "./NotificationDropDown";
import MessageDropDown from "./MessageDropDown";
import Logo from "../../public/images/logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineUpload, MdOutlineDashboard } from "react-icons/md";
import { BsClipboard } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useGetTotalAmountForTutorQuery } from "@/redux/features/payment/paymentApi";

import {
  AiOutlinePlus,
  AiOutlineUpload,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

// clerk
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const { User } = useSelector((state) => state.user);
    const { data: totalEarning, error, isLoading } = useGetTotalAmountForTutorQuery(User?._id);

  const { isSignedIn, user } = useUser();
  const isLoggedIn = false;

  return (
    <div className="w-full bg-white border-b">
      {/* main */}
      <div className="max-w-[1100px] px-4 mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href={User ? "/feed" : "/"}>
          <Image src={Logo} alt="Learning APP" priority />
        </Link>
        {/* Nav Links */}
        <div className="flex items-center lg:gap-10">
          {
            // Upload problem
            isLoggedIn ? (
              <Link href="/post/456" className="hidden lg:block">
                <button className="btn btn-sm px-5 py-2 btn_sar gap-2 rounded-full">
                  Upload problem <AiOutlineUpload />{" "}
                </button>
              </Link>
            ) : (
              ""
            )
          }
          {/* icons */}
          {User && (
            <div className="hidden md:flex justify-between md:mr-10 lg:mr-0">
              {/* <NotificationDropDown /> */}
              <MessageDropDown />
            </div>
          )}
          {/* user */}
          <div className="flex gap-3 items-center">
            <div className="text-right">
              {User ? (
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className="m-1 flex gap-2 items-center">
                    <div>
                      <span className="font-semibold">{User?.name}</span>
                      <p className="text-sm">৳ {isLoading ? "Loading..." : totalEarning?.totalAmount || "0" }</p>
                    </div>
                    <img
                      className="w-[45px] rounded-full"
                      src={User?.image || "/default/avatar.jpg"}
                      alt="Image"
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow border bg-base-100 rounded-lg w-52"
                  >
                    <li>
                      <Link href={`/profile/${User?._id}`} className="gap-2">
                        <CgProfile /> Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/post/upload" className="gap-2">
                        <MdOutlineUpload /> Upload Problem
                      </Link>
                    </li>
                    <li>
                      <Link href="/conversation/38" className="gap-2">
                        <BiMessageRounded /> Messages
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/Whiteboard" className="gap-2">
                        <BsClipboard /> Whiteboard
                      </Link>
                    </li>
                    <li>
                      <Link href="/Admin/Sidebar" className="gap-2">
                        <MdOutlineDashboard /> Dashboard
                      </Link>
                    </li>
                    <li>
                      <SignOutButton>
                        <button className="gap-2">
                          <AiOutlineLogout /> Sign Out
                        </button>
                      </SignOutButton>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link href="/sign-up">
                  <button className="btn_sm gap-2">
                    Sign up <AiOutlineArrowRight />
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
