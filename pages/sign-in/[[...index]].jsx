import { SignIn } from "@clerk/nextjs";

const Signin = () => {
  return (
    <div className="w-fit mx-auto mt-10">
      <SignIn />
    </div>
  );
};

export default Signin;
