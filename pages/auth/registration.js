import { Formik, Form, Field } from "formik";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const Registration = () => {
  const [passToggle, setPassToggle] = useState(true);
  return (
    <div className="max-w-[600px] h-screen mx-auto flex flex-col items-center justify-center">
      <div className="text-3xl flex gap-3 justify-center items-center">
        <p className="font-bold py-3 text_gradient text-4xl mb-4">
          Create Account
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log("Values: ", values);
        }}
        // enableReinitialize
      >
        {() => (
          <Form className="border bg-white shadow-xl p-8 rounded-lg">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Name *</label>
              <Field
                required
                type="text"
                name="name"
                placeholder="Abdur Rahim"
                className="input input-sm input-bordered w-[300px]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-sm">Email *</label>
              <Field
                required
                type="email"
                name="email"
                placeholder="abdurrahim@gmail.com"
                className="input input-sm input-bordered w-[300px]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-sm">Phone *</label>
              <Field
                required
                type="text"
                name="phone"
                placeholder="01..."
                className="input input-sm input-bordered w-[300px]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-sm">Address *</label>
              <Field
                required
                type="text"
                name="address"
                placeholder="Santhia, Pabna Bangladesh"
                className="input input-sm input-bordered w-[300px]"
              />
            </div>
            <div className="flex flex-col gap-2 mt-3">
              <label className="text-sm">Password *</label>
              <div className="input input-sm input-bordered w-[300px] flex gap-2">
                <Field
                  required
                  type={passToggle ? "password" : "text"}
                  name="text"
                  className="w-full focus:outline-none"
                />
                <span
                  className="cursor-pointer text-lg pt-[6px] text-gray-500"
                  onClick={() => setPassToggle((prev) => !prev)}
                >
                  {passToggle ? <BiHide /> : <BiShow />}
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn_sar mt-4">
              Register
            </button>
            &nbsp;&nbsp;
            <Link className="text_link" href="/">
              Cancle
            </Link>
            <p className="mt-4">
              Already an account?{" "}
              <Link href="/auth/login" className="text_link">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
