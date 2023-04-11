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
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  const DropLinks = [
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
    {
      url: "#",
      icon: <BsPersonCircle />,
      text: "Profile",
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
            <button className="btn btn-sm px-5 py-2 btn-success gap-2 text-white rounded-full">
              Upload problem <AiOutlineUpload />{" "}
            </button>
          </Link>
          {/* icons */}
          <div className="hidden md:flex md:mr-10 lg:mr-0 gap-5">
            <Link href="#">
              <p className="indicator tab tab-lifted tab-active border-none text-xl">
                <span className="indicator-item badge rounded-full badge-error">
                  99+
                </span>
                <div className="bg-base-200 p-2 rounded-full">
                  <AiOutlineBell />
                </div>
              </p>
            </Link>
            <Link href="#">
              <p className="indicator tab tab-lifted tab-active border-none text-xl">
                <span className="indicator-item rounded-full badge badge-error">
                  4
                </span>
                <div className="bg-base-200 p-2 rounded-full">
                  <AiOutlineMessage />
                </div>
              </p>
            </Link>
          </div>
          {/* user */}
          <div className="flex gap-3 items-center">
            <div className="text-right">
              <h3 className="font-bold text-black">Md.Rakibuzzaman</h3>
              <p>৳ 10.00 BDT</p>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <Image
                  className="w-12 rounded-full border border-primary"
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
