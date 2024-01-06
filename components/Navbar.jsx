"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Lato } from "next/font/google";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useContextStates } from "@/provider/ContextProvider";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useContextStates();
  const { data: session } = useSession();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = () => {
    signOut();
    localStorage.removeItem("user");
    setUser(null);
  };
  useEffect(() => {
    if (session) {
      console.log({ ...session.user });
      setUser((prev) => {
        return { ...prev, ...session.user };
      });
    }
  }, [session]);

  return (
    <div
      className={`navbar sm:flex lg:flex justify-between max-w-[90%]   ${
        usePathname() !== "/"
          ? "bg-white text-black shadow-xl relative m-auto"
          : "bg-transparent text-white absolute left-[5%]"
      } m-auto  pt-2 z-10 transition-all duration-500 ease-in-out`}
    >
      <div
        className={`border-2 border-solid border-black p-1 cursor-pointer rounded-full bg-black text-white sm:inline md:hidden lg:hidden `}
      >
        <CiSearch className="text-md" fontSize={""} />
      </div>

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
      <div className="flex search-bar items-center gap-2 min-w-[30%]">
        <input
          type="text"
          placeholder="Search a Blog"
          className={
            `w-full ${
              usePathname() !== "/"
                ? "bg-white text-black border border-black p-2 outline-offset-2 focus:outline-blackk placeholder:text-black"
                : "bg-transparent border border-white p-2 outline-none focus:outline-white placeholder:text-white"
            } from-inherit rounded-full ` +
            " " +
            lato.className
          }
        />
        <div
          className={`border-2 ${
            usePathname() !== "/"
              ? "border-solid border-black p-1 cursor-pointer rounded-full"
              : "border-solid border-black p-1 cursor-pointer rounded-full bg-black text-white"
          } `}
        >
          <CiSearch className="" fontSize={"30px"} />
        </div>
      </div>

      {/* navigation buttons */}
      <div
        className={`lg:flex items-center gap-2 ${
          isMobileMenuOpen ? "navlinks" : "hidden"
        }`}
      >
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
          href={"/user/myblogs"}
        >
          My Blogs
        </Link>

        {/* auth buttons */}
        <div className={`${!user ? "flex" : "hidden"} gap-3`}>
          <Link
            href={"/auth/login"}
            className={
              `btn ${
                usePathname() !== "/" ? "text-black" : "text-white"
              } font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-full ` +
              " " +
              lato.className
            }
          >
            Login
          </Link>
          <Link
            href={"/auth/signup"}
            className={
              `btn ${
                usePathname() !== "/" ? "text-black" : "text-white"
              } font-normal
             bg-transparent  hover:bg-black hover:text-white hover:border-black text-lg rounded-full ` +
              " " +
              lato.className
            }
          >
            Signup
          </Link>
        </div>

        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-10 m-1">
                <div className="avatar">
                  <div className="w-fit rounded-full">
                    <img
                      width={24}
                      height={24}
                      className="w-1"
                      src={user?.image}
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

      {/* Mobile menu button */}
      <div
        className={`sm:inline md:inline-block lg:hidden z-40`}
        onClick={toggleMobileMenu}
      >
        <FiMenu />
      </div>
    </div>
  );
};

export default Navbar;
