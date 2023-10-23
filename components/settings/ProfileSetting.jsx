import Link from "next/link";
import React from "react";
const ProfileSettings = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );
  return (
    <div className="bg-white border-b py-6 px-5 rounded-lg mt-2">
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="account ">
          <h3 className="text-xl font-semibold">Account</h3>
          <hr />
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            Value="Md. Rakibuzzaman"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="xyz@gmail.com"
            readOnly
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            value="0123456789"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <button className="btn btn_sar btn-sm">Save</button>
        </div>
        <div className="study">
          <h3 className="text-xl font-semibold">Study</h3>
          <hr />
          <label className="label">
            <span className="label-text">I study at</span>
          </label>
          <input
            type="text"
            Value="Varendra University"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text">I study in </span>
          </label>
          <input
            type="text"
            Value="CSE"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text">I started studying form</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              year
            </option>
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <br />
          <br />
          <button className="btn btn_sar btn-sm">Save</button>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold">Profile Photo</h3>
          <hr />
          <br />
          <div className="avatar ">
            <div className="w-48 rounded">
              <img src="https://frontend-learning-app.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frakib.081885d9.jpg&w=1080&q=75" />
            </div>
          </div>
          <form>
            <input type="file" id="img" name="img" accept="image/*" />
            <br />
            <br />
            <button className="btn btn_sar btn-sm">Update profile photo</button>
          </form>
        </div>
      </div>
      <br />

      <br />
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div className="password">
          <h3 className="text-xl font-semibold">Password</h3>
          <hr />
          <label className="label">
            <span className="label-pass">Old Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-pass">New Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-pass">confirm Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <button className="btn btn_sar btn-sm">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
