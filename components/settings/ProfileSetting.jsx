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
                    <input type="text" placeholder="Md. Rakibuzzaman" readOnly className="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="xyz@gmail.com" readOnly className="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" value="0123456789" className="input input-bordered w-full max-w-xs" />
                    <br /><br />
                    <button className="btn btn-sar btn-sm">Save</button>

                </div>
                <div className="">
                    <h3 className="text-xl font-semibold">Profile Photo</h3>
                    <hr />
                    <br />
                    <div className="avatar">
                        <div className="w-48 rounded">
                            <img src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1687522239~exp=1687522839~hmac=1953cb0346fb849e096878aa2c8581507ba6591301bd457fe87c4d8ba8209d39" />
                        </div>
                    </div>
                    <form>
                        <input type="file" id="img" name="img" accept="image/*" />
                        <br /><br />
                        <button className="btn btn-sar btn-sm">Update profile photo</button>
                    </form>
                </div>

            </div>
            <br />


            <div className="study">
                <h3 className="text-xl font-semibold">Study</h3>
                <hr />
                <label className="label">
                    <span className="label-text">I study at</span>
                </label>
                <input type="text" placeholder="Varendra University" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text">I study in </span>
                </label>
                <input type="text" Value="CSE" readOnly className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text">I started studying form</span>
                </label>
                <select className="select select-secondary w-full max-w-xs">
                    <option disabled selected>
                        Pick a year
                    </option>
                    {years.map((year) => (
                        <option key={year}>{year}</option>
                    ))}
                </select>
                <br /><br />
                <button className="btn btn-sar btn-sm">Save</button>

            </div>
            <br /><br />
            <div className="password">
                <h3 className="text-xl font-semibold">Password</h3>
                <hr />
                <label className="label">
                    <span className="label-pass">Old Password</span>
                </label>
                <input type="password" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-pass">New Password</span>
                </label>
                <input type="password" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-pass">confirm Password</span>
                </label>
                <input type="password" className="input input-bordered w-full max-w-xs" />
                <br /><br />
                <button className="btn btn-sar btn-sm">Save</button>
            </div>

        </div>
    );
};

export default ProfileSettings;