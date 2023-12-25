import prisma from "@/prisma";
import { generateJwtToken } from "@/utils/generateJwtToken";
import { compare, genSalt, hash } from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  let reqBody = await req.json();

  let { email, password } = reqBody;
  try {
    if (!email || !password) {
      return NextResponse.json({ message: "Please fill all the fields" });
    }
    const existedUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!existedUser) {
      return NextResponse.json({ message: "User does not exists" });
    }

    // match password
    const isMatch = await compare(password, existedUser.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    console.log(existedUser);

    return NextResponse.json({
      data: { ...existedUser, token: generateJwtToken(email) },
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error });
  }
}
