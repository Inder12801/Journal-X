import prisma from "@/prisma";
import { generateJwtToken } from "@/utils/generateJwtToken";
import { genSalt, hash } from "bcryptjs";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  let reqBody = await req.json();

  let { email, password, name, profilePic } = reqBody;
  try {
    if (!email || !password || !name || !profilePic) {
      return NextResponse.json({ message: "Please fill all the fields" });
    }
    const existedUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existedUser) {
      return NextResponse.json({ message: "User already exists" });
    }
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const createdUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        profilePic,
      },
    });
    console.log(createdUser);

    return NextResponse.json({
      data: { ...createdUser, token: generateJwtToken(email) },
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error });
  }
}
