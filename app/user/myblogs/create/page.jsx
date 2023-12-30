"use client";
import { saveImageToCloudinary } from "@/utils/saveImageToCloudinary";
import React, { useState } from "react";
import { FaCross } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { MdOutlineCancel } from "react-icons/md";

const CreateBlog = () => {
  const [coverImage, setCoverImage] = useState(
    JSON.parse(localStorage.getItem("blogDetails")).coverImage || null
  );
  const [imageLoader, setImageLoader] = useState(false);
  const [value, setValue] = useState("");

  const [blogDetails, setBlogDetails] = useState(
    JSON.parse(localStorage.getItem("blogDetails")) || {
      slug: "",
      title: "",
      content: "",
      coverImage: "",
      tempId: "",
    }
  );
  const addCoverImage = async (pic) => {
    try {
      setImageLoader(true);
      const picUrl = await saveImageToCloudinary(pic);
      console.log(picUrl);
      setCoverImage(picUrl);
      setBlogDetails({ ...blogDetails });
      localStorage.setItem(
        "blogDetails",
        JSON.stringify({ ...blogDetails, coverImage: picUrl.toString() })
      );
    } catch (error) {
      console.log(error);
    }
    setImageLoader(false);
  };

  const handleOnChange = (e) => {
    setBlogDetails({ ...blogDetails, [e.target.name]: e.target.value });
    localStorage.setItem("blogDetails", JSON.stringify({ ...blogDetails }));
  };
  const updateContent = () => {
    setValue(value);
  };
  return (
    <div className="container w-full h-screen  m-auto mt-12">
      {/* <h1 className="text-center">Create Blog</h1> */}
      <button className="self-end btn rounded-full font-lato text-lg bg-blue-100 hover:bg-black hover:text-white m-4 ml-0">
        Publish
      </button>

      <form className="w-full flex-col gap-8">
        {/* Title */}
        <div className="form-group w-full">
          {/* <label htmlFor="title">Title</label> */}
          <input
            type="text"
            className="input form-control text-4xl w-full outline-none p-4 placeholder:font-lato"
            id="title"
            placeholder="Title"
            value={blogDetails.title}
            name="title"
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        {/* Add image icon */}
        <div className="m-4 ml-0 relative">
          <label htmlFor="coverImage">
            <IoIosAddCircle className="text-4xl ml-0" />
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            className="file-input w-full max-w-xs hidden"
            onChange={(e) => {
              // setCoverImage(e.target.files[0]);
              console.log(coverImage);
              addCoverImage(e.target.files[0]);
              // handleImageUpload(e.target.files[0]);
            }}
          />
          <div
            className={
              coverImage
                ? "flex rounded-xl mt-4 ml-0 items-center justify-center "
                : "hidden"
            }
          >
            <MdOutlineCancel
              className={`${
                imageLoader ? "hidden" : "inline"
              } text-2xl text-red-600 absolute top-2 right-2 cursor-pointer`}
              onClick={() => {
                setCoverImage(null);
                setBlogDetails({ ...blogDetails, coverImage: "" });
                localStorage.setItem(
                  "blogDetails",
                  JSON.stringify({ ...blogDetails, coverImage: "" })
                );
              }}
            />
            {imageLoader ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <img
                src={coverImage}
                alt="Cover Image"
                className="w-full h-[40vh] object-cover rounded-xl ml-0"
              />
            )}
          </div>
        </div>
        {/* Main Content */}
        <div className="form-group mt-4">
          {/* <label htmlFor="content">Content</label> */}
          <textarea
            placeholder="Write your blog"
            className="textarea  textarea-lg w-full h-full p-4 text-xl font-lato"
            id="content"
            value={blogDetails.content}
            name="content"
            onChange={(e) => handleOnChange(e)}
          ></textarea>
          {/* <ReactQuill
            className={
              "w-full textarea textarea-accent h-full p-0 text-xl font-lato"
            }
            theme="bubble"
            value={value}
            onChange={() => {
              updateContent();
            }}
            placeholder="Tell your story..."
          /> */}
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
