import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MdPerson, MdManageAccounts } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

const Login = () => {
  //   const router = useRouter();
  //   const session = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   const loginHandler = async (e) => {
  //     e.preventDefault();
  //     const res = await signIn("credentials", {
  //       username,
  //       password,
  //       redirect: false,
  //     });
  //     if (res.error) {
  //       toast.error(res.error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (session) {
  //       if (session.data) {
  //         const { user } = session.data;
  //         // if user is admin go to Dashboard
  //         if (user.role === "admin") {
  //           router.push("/dashboard");
  //         }
  //         // if normal user go to home page
  //         if (user.role === "user") {
  //           router.push("/");
  //         }
  //       }
  //     }
  //   }, [session]);

  return (
    <div className="max-w-[600px] h-screen mx-auto flex flex-col items-center justify-center">
      <Toaster />
      <div className="text-3xl flex gap-3 justify-center items-center">
        <MdManageAccounts />
        <p className="font-bold py-3 text_gradient">Login</p>
      </div>
      <form className="min-w-[360px]">
        <label className="text-sm">Username</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded px-2 shadow border mb-2">
          <span className="text-2xl  text-gray-500 border-r pr-2">
            <MdPerson />
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="focus:outline-none py-3 w-full"
          />
        </div>
        <label className="text-sm ">Password</label>
        <div className="flex gap-2 mt-1 items-center bg-white rounded px-2 shadow border">
          <span className="text-xl text-gray-500 border-r pr-3">
            <RiLockPasswordFill />
          </span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="focus:outline-none py-3 w-full"
          />

          <button
            type="button"
            className="text-xl text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
          </button>
        </div>
        <div className="w-full flex items-center gap-3 justify-center mt-6">
          <button
            // onClick={loginHandler}
            type="submit"
            className="btn btn_sar"
          >
            Login
          </button>
          <Link className="text_link text-center" href="/">
            Cancle
          </Link>
        </div>

        <p className="mt-5">
          Don't have account?{" "}
          <Link href="/auth/registration" className="text_link">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
