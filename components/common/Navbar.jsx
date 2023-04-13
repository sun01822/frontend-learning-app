import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Rakib from "../../public/images/rakib.jpg";
import Link from "next/link";
import {
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlineUpload,
  AiOutlineHome,
} from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const DropLinks = [
    {
      url: "/profile/rakib38",
      icon: <BsPersonCircle />,
      text: "Profile",
    },
    {
      url: "/feed",
      icon: <MdOutlineWork />,
      text: "Jobs",
    },
    {
      url: "/",
      icon: <AiOutlineHome />,
      text: "Home",
    },
    {
      url: "#",
      icon: <AiOutlinePlus />,
      text: "Upload Problem",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* main */}
      <div className="max-w-[1100px] px-4 mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Learning APP" priority />
        </Link>
        {/* Nav Links */}
        <div className="flex items-center lg:gap-10">
          {/* post */}
          <Link href="#" className="hidden lg:block">
            <button className="btn btn-sm px-5 py-2 btn-sar gap-2 rounded-full">
              Upload problem <AiOutlineUpload />{" "}
            </button>
          </Link>
          {/* icons */}
          <div className="hidden md:flex md:mr-10 lg:mr-0 gap-5">
            <Link href="#">
              <p className="indicator tab tab-lifted tab-active border-none text-xl">
                <span className="indicator-item badge rounded-full badge-error text-white font-bold">
                  9
                </span>
                <span className="bg-base-200 p-2 rounded-full">
                  <AiOutlineBell />
                </span>
              </p>
            </Link>
            <Link href="#">
              <p className="indicator tab tab-lifted tab-active border-none text-xl">
                <span className="indicator-item rounded-full badge badge-error text-white font-bold">
                  4
                </span>
                <span className="bg-base-200 p-2 rounded-full">
                  <AiOutlineMessage />
                </span>
              </p>
            </Link>
          </div>
          {/* user */}
          <div className="flex gap-3 items-center">
            <div className="text-right">
              <h3 className="font-bold text-sm text-black">Md.Rakibuzzaman</h3>
              <p className="text-sm">৳ 10.00 BDT</p>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
