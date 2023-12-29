"use client";
import Link from "next/link";

import { FaLock } from "react-icons/fa";
import { useState } from "react";

import { saveImageToCloudinary } from "@/utils/saveImageToCloudinary";
import axios from "axios";
import { toast } from "react-toastify";
import { useAlertStyles } from "@chakra-ui/alert";
import { useContextStates } from "@/provider/ContextProvider";
import { useRouter } from "next/navigation";
const Signup = () => {
  // console.log(process.env.CLOUDINARY_CLOUD_NAME);
  const [profilePicSelected, setProfilePicSelected] = useState(null);
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const { user, setUser, theme, setTheme } = useContextStates();
  const router = useRouter();
  const handleImageUpload = async (pics) => {
    console.log(pics);
    // const picUrl = await saveImageToCloudinary(pics);
    setFromData({
      ...formData,
      profilePic:
        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    });
  };
  const handleOnChange = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    console.log("submit");
    toast("Entered");
    e.preventDefault();
    const { name, email, password, profilePic } = formData;
    if (!name || !email || !password || !profilePic) {
      toast("Please fill all the fields");
      return;
    }
    try {
      const res = await axios.post("/api/auth/signup", formData);
      console.log(res);
      if (res.data.error) {
        toast(res.data.error);
        return;
      }
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data.data);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen font-lato">
      <div className="max-w-lg flex-col max-h-1/3 w-full p-12 shadow-xl bg-white border-solid border-[0px] border-black rounded-3xl">
        <div className="flex-col items-center justify-center text-center">
          <FaLock className="text-4xl self-center m-auto bg-black text-white p-2 rounded-full" />
          <h2 className="text-3xl font-extrabold mb-2 text-center  font-lato mt-2">
            Signup
          </h2>
        </div>
        <form className="text-center" onSubmit={handleSubmit}>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="name"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="email"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="password"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              Password
            </label>
            <div className="flex items-center">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato rounded-lg"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="profilePic"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              <div className="avatar flex items-center gap-3">
                <div className="w-16 rounded-full">
                  <img
                    src={
                      profilePicSelected
                        ? URL.createObjectURL(profilePicSelected)
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
                Choose Profile Pic
              </div>
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                className="file-input w-full max-w-xs hidden "
                onChange={(e) => {
                  setProfilePicSelected(e.target.files[0]);
                  console.log(profilePicSelected);
                  handleImageUpload(e.target.files[0]);
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-lg border border-black bg-white text-black p-2 hover:bg-black hover:text-white transition duration-300 ease-in-out rounded-lg"
          >
            Signup
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 font-lato">
            Already have an account?
          </span>{" "}
          <Link href="/auth/login">
            <span className="text-blue-500 hover:underline font-lato">
              Login here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
