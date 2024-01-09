import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    if (blogs.length === 0) {
      return NextResponse.json(
        {
          status: "error",
          message: "No blogs found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        data: blogs,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal server error",
        error: error.message, // Include more details if needed
      },
      { status: 500 }
    );
  }
};
