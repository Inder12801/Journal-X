import { NextResponse } from "next/server";

export async function GET(req, res) {
  let reqBody = await req.json();
  try {
    console.log(reqBody);
    const blogs = {
      id: 1,
      title: "Blog 1",
      content: "This is the content of blog 1",
    };

    return NextResponse.json({ blogs });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
