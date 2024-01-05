"use client";
import blogDummyData from "@/data/blogData";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin-ext"],
});

const Myblogs = () => {
  const pathName = "/myblogs";
  const router = useRouter();
  const [blogs, setBlogs] = useState(blogDummyData);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  useEffect(() => {
    const token = loggedInUser.token;
    console.log(token);
    const fetchBlogs = async () => {
      const response = await fetch("/api/user/myblogs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) throw new Error(data.message);
      else {
        router.push("/user/myblogs");
      }
      setBlogs(data.blogs);
    };
    fetchBlogs();
  }, []);
  return (
    <div className="w-[90%] h-screen bg-white flex-col justify-center m-auto">
      <div className="m-auto w-full flex items-center justify-between gap-4 mt-8">
        <button
          className={`${lato.className} text-lg font-bold p-4 border border-black hover:bg-black hover:text-white hover:border-black ease-linear rounded-full`}
          onClick={() => router.push("/user/myblogs/create")}
        >
          Create New Blog
        </button>
        <div className="flex items-center gap-2 justify-center">
          <input
            type="text"
            placeholder="Search a Blog"
            className={
              `w-[20vw] ${
                pathName !== "/"
                  ? "bg-white text-black border border-black p-2 placeholder:text-black"
                  : "bg-transparent border border-white p-2 outline-none focus:outline-white placeholder:text-white"
              } from-inherit font-lato rounded-full` +
              " " +
              lato.className
            }
          />
          <div
            className={`border-2 ${
              pathName !== "/"
                ? "border-solid border-black p-1 cursor-pointer"
                : "border-solid border-white p-1 cursor-pointer"
            } rounded-full`}
          >
            <CiSearch className="" fontSize={"30px"} />
          </div>
        </div>
      </div>
      <div>
        {/* <h2 className="text-2xl font-semibold text-left">My Blogs</h2> */}
        <div className="grid grid-cols-3 gap-10 mt-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-1/1 h-[320px]  border-black p-8 rounded-3xl shadow-lg relative overflow-hidden cursor-pointer "
            >
              <FiArrowUpRight className="relative z-10 rounded-full left-[95%] top-[-5%] text-white bg-black p-1 text-4xl" />
              <div
                style={{
                  backgroundImage: `url(${"https://picsum.photos/500/370"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%", // Set the width of the image container
                  height: "100%", // Set the height of the image container
                  filter: "blur(0px) brightness(0.6) contrast(1) grayscale(0)",
                }}
                className="w-full h-full absolute top-0 left-0 z-0 hover:scale-125 transition-all ease-linear hover:blur-sm"
              ></div>
              <div className="relative z-10 top-[25%] flex-col w-full h-full items-center justify-center">
                <h1 className=" font-lato relative bottom-0 text-2xl font-bold text-white">
                  {blog.title}
                </h1>
                {/* <p className="text-md text-white">{blog.content}</p> */}
                <div className="flex gap-2 text-white items-center">
                  <p className="w-fit bg-white  rounded-full text-black pt-1 pb-1 pr-3 pl-3 font-normal font-lato ">
                    {blog.category}
                  </p>
                  <p
                    className="text-white
                "
                  >
                    12 Aug 2023
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myblogs;
