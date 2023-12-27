"use client";
import Link from "next/link";
import React from "react";
import { Lato } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Loader from "./Loader";
import { useContextStates } from "@/provider/ContextProvider";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});

const Navbar = () => {
  let pathName = usePathname();
  const { data, status } = useSession();
  // console.log(data?.user);
  const { user } = useContextStates();
  if (status === "loading") {
    return <Loader />;
  }
  console.log("user prodile pic : ", user?.profilePic);
  if (user) {
    pathName = "/";
  }
  const handleLogout = () => {
    signOut();
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div
      className={`navbar lg:flex justify-between max-w-[90%] left-[5%]  ${
        pathName !== "/"
          ? "bg-white text-black shadow-xl"
          : "bg-transparent text-white"
      } m-auto  absolute pt-2 z-10`}
    >
      {/* logo */}
      <div className="flex">
        <Link
          className={"btn btn-ghost text-2xl font-semibold " + lato.className}
          href={"/"}
        >
          Journal X
        </Link>
      </div>

      {/* search bar */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search a Blog"
          className={
            ` min-w-[30vw] ${
              pathName !== "/"
                ? "bg-white text-black border border-black p-2 outline-offset-2 focus:outline-blackk placeholder:text-black"
                : "bg-transparent border border-white p-2 outline-none focus:outline-white placeholder:text-white"
            } from-inherit ` +
            " " +
            lato.className
          }
        />
        <div
          className={`border-2 ${
            pathName !== "/"
              ? "border-solid border-black p-1 cursor-pointer"
              : "border-solid border-white p-1 cursor-pointer"
          } `}
        >
          <CiSearch className="" fontSize={"30px"} />
        </div>
      </div>

      {/* navigation buttons */}
      <div className="flex items-center gap-2">
        <Link
          className={lato.className + " text-lg p-2 hover:text-slate-300 "}
          href={"/"}
        >
          Home
        </Link>

        {/* ----------- */}
        <div className="dropdown dropdown-hover bg-transparent">
          <div tabIndex={0} role="button" className="m-1">
            <Link
              className={lato.className + " text-lg p-2 hover:text-slate-300 "}
              href={"/category"}
            >
              Category
              {/* ------------ */}
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] text-black bg-white menu p-2   rounded-none w-52"
          >
            <li className={"text-md bg-transparent " + lato.className}>
              <a>Item 1</a>
            </li>
          </ul>
        </div>

        <Link
          className={lato.className + " text-lg p-2 hover:text-slate-300 "}
          href={"/about"}
        >
          About
        </Link>
        <Link
          className={lato.className + " text-lg  p-2  hover:text-slate-300 "}
          href={"/myblogs"}
        >
          My Blogs
        </Link>
        {/* auth buttons */}
        <div className={`${!user ? "flex" : "hidden"} gap-3`}>
          <Link
            href={"/auth/login"}
            className={
              `btn ${pathName !== "/" ? "text-black" : "text-white"} font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-none ` +
              " " +
              lato.className
            }
          >
            Login
          </Link>
          <Link
            href={"/auth/signup"}
            className={
              `btn ${pathName !== "/" ? "text-black" : "text-white"} font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-none ` +
              " " +
              lato.className
            }
          >
            Signup
          </Link>
        </div>
        <div>
          {status === "authenticated" || user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10 m-1">
                <div className="avatar">
                  <div className="w-fit rounded-full">
                    <img
                      width={24}
                      height={24}
                      className="w-1"
                      src={user?.profilePic}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-none w-52"
              >
                <li className="btn font-lato p-0" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
