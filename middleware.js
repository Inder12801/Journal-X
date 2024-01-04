// import { config } from "next/dist/build/templates/pages"

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const middleware = async (req, res) => {
  const authHeader = await req.headers.authorization;
  if (authHeader) {
    const token = await authHeader.split(" ")[1];

    req.token = await token;
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    // if()
  }
  if (req.nextUrl.pathname == "/user/myblogs") {
    console.log("middleware");
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
};

export const config = {
  matcher: ["/user/myblogs:path*"],
};
