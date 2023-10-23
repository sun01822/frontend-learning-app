import React from "react";
import Image from "next/image";
import { MdLogin } from "react-icons/md";
import NotificationDropDown from "./NotificationDropDown";
import MessageDropDown from "./MessageDropDown";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../public/images/logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import Rakib from "../../public/images/rakib.jpg";
import Link from "next/link";
import { useState } from "react";
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

const DropLinks = [
  {
    url: "/",
    icon: <AiOutlineHome />,
    text: "Home",
  },
  {
    url: "/post/125",
    icon: <AiOutlinePlus />,
    text: "Upload Problem",
  },
  {
    url: "/feed",
    icon: <MdOutlineWork />,
    text: "Jobs",
  },
  {
    url: "/profile/rakib38",
    icon: <BsPersonCircle />,
    text: "Profile",
  },
  {
    url: "/setting/123",
    icon: <AiOutlineSetting />,
    text: "Setting",
  },
  {
    url: "/",
    icon: <AiOutlineLogout />,
    text: "Log out",
  },
];

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const isLoggedIn = false;

  console.log("User: ", user);

  return (
    <div className="w-full bg-white">
      {/* main */}
      <div className="max-w-[1100px] px-4 mx-auto py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
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
          <div className="hidden md:flex justify-between md:mr-10 lg:mr-0">
            <NotificationDropDown />
            <MessageDropDown />
          </div>
          {/* {isLoggedIn ? (
            // Show user
            <div className="flex gap-3 items-center">
              <div className="text-right">
                <h3 className="font-bold text-sm text-black">
                  Md.Rakibuzzaman
                </h3>
                <p className="text-sm">৳ 10.00k BDT</p>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <Image
                    className="w-10 rounded-full border border-primary"
                    src={Rakib}
                    alt="Learning APP"
                    priority
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow border bg-base-100 rounded-box w-52"
                >
                  {DropLinks.map((data, index) => (
                    <li key={index}>
                      <Link href={data.url}>
                        {" "}
                        {data.icon} {data.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/auth/login" className="btn btn_sar gap-2">
              Login{" "}
              <span className="text-lg">
                <MdLogin />
              </span>
            </Link>
          )} */}

          {isSignedIn ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="m-1 flex gap-2 items-center">
                <span className="font-semibold">{user.fullName}</span>
                <img
                  className="w-[40px] rounded-full border"
                  src={user.imageUrl}
                  alt="Image"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow border bg-base-100 rounded-lg w-52"
              >
                <li>
                  <Link href="/profile/rakib38" className="gap-2">
                    <CgProfile /> Profile
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
  );
};

export default Navbar;
