import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";

const ProfileSettings = () => {
  const { User } = useSelector((state) => state.user);
  const [
    updateUser,
    { isLoading: updating, isSuccess: updateDone, isError: updateError },
  ] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { address, companyName, name, passingYear, phone, workingAs } = data;
    const sendingData = {
      address,
      companyName,
      name,
      passingYear,
      phone,
      workingAs,
    };
    if (User) {
      updateUser({ data: sendingData, user_id: User._id });
    } else {
      toast.error("You are not logged in!");
    }
  };

  useEffect(() => {
    if (!updating && updateError) {
      toast.error("Something went wrong!");
    }

    if (!updating && updateDone) {
      toast.success("Profile updated successfully!");
    }
  }, [updateError, updateDone]);

  useEffect(() => {
    if (User) {
      reset(User);
    }
  }, [User]);

  return (
    <div className="bg-white border-b py-6 px-5 rounded-lg mt-2">
      <Toaster />
      <div className="flex flex-col gap-6 md:flex-row justify-between mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col md:flex-row gap-5"
        >
          <div className="w-full">
            <h3 className="text-xl font-semibold py-2">Account</h3>
            <hr />
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Mr.XZY"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name?.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              placeholder="01xxxxxxxx"
              maxLength={11}
              minLength={11}
              {...register("phone", { required: "phone is required" })}
              className="input input-bordered w-full"
            />
            {errors.phone && (
              <span className="text-xs text-red-600">
                {errors.phone?.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("address", { required: "address is required" })}
              placeholder="Address"
            />
            {errors.address && (
              <span className="text-xs text-red-600">
                {errors.address?.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <h3 className="text-xl font-semibold py-2">Study</h3>
            <hr />

            <label className="label">
              <span className="label-text">Working as </span>
            </label>
            <input
              type="text"
              placeholder="Developer / student"
              {...register("workingAs", {
                required: "What you do?",
              })}
              className="input input-bordered w-full"
            />
            {errors.workingAs && (
              <span className="text-xs text-red-600">
                {errors.workingAs?.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Company / School name</span>
            </label>

            <input
              type="text"
              placeholder="Varendra University"
              {...register("companyName", {
                required: "Company / School is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.companyName && (
              <span className="text-xs text-red-600">
                {errors.companyName?.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Passing Year</span>
            </label>
            <input
              type="number"
              minLength={4}
              className="input input-bordered w-full"
              {...register("passingYear")}
              placeholder="2025"
            />
            <br />
            <br />
            <button className="w-full btn btn_sar">Save</button>
          </div>
        </form>
        <div>
          <h3 className="text-xl font-semibold py-2">Profile Photo</h3>
          <hr />
          <br />
          <div className="avatar ">
            <div className="w-48 rounded-lg">
              <img src="/default/avatar.jpg" />
            </div>
          </div>
          <form>
            {/* <input type="file" id="img" name="img" accept="image/*" /> */}
            <br />
            <br />
            {/* <button className="btn btn_sar">Save</button> */}
          </form>
        </div>
      </div>
      <br />

      <br />
      {/* <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="password">
          <h3 className="text-xl font-semibold">Password</h3>
          <hr />
          <label className="label">
            <span className="label-pass">Old Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-pass">New Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-pass">confirm Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
          />
          <br />
          <br />
          <button className="btn btn_sar btn-sm">Save</button>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileSettings;
