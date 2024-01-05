// import { config } from "next/dist/build/templates/pages"

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/prisma/index";

export const middleware = async (req, res, next) => {
  if (req.nextUrl.pathname == "/user/myblogs") {
    console.log("middleware");
    const authHeader = await req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
      const token = await authHeader.split(" ")[1];

      req.token = await token;
      console.log(token);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // returns the payload(email)
      const isLoggedIn = await prisma.user.find({
        where: {
          email: decodedToken.email,
        },
      });

      if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
      }
      return NextResponse.next();
    } else return NextResponse.redirect(new URL("/auth/login", req.url));
  }
};

export const config = {
  matcher: ["/user/myblogs:path*"],
};
