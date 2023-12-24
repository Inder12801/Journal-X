import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FiMail, FiLock, FiEye } from "react-icons/fi";
import { IoMdLock } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen font-lato">
      <div className="max-w-lg flex-col w-full min-h-1/2 p-16 shadow-xl bg-white border-solid border-[0px] border-black">
        <div className="flex-col items-center justify-center text-center">
          <FaLock className="text-4xl self-center m-auto bg-black text-white p-2 rounded-full" />
          <h2 className="text-3xl font-extrabold mb-4 text-center  font-lato mt-2">
            Signup
          </h2>
        </div>
        <form className="text-center">
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="name"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              {/* <FiMail size={18} /> */}
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="email"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              {/* <FiMail size={18} /> */}
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 flex-col text-left font-lato">
            <label
              htmlFor="password"
              className="block text-gray-700 text-md font-bold mb-2 mr-2 font-lato"
            >
              {/* <FiLock size={18} /> */}
              Password
            </label>
            <div className=" flex items-center">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border text-lg border-gray-300 p-2 focus:outline-none focus:border-black font-lato"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="w-full text-lg border border-black bg-white text-black p-2 hover:bg-black hover:text-white transition duration-300 ease-in-out">
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