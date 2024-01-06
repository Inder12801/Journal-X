import { connectToDB } from "@/utils/connectToDb";
import prisma from "../prisma/index";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getToken } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/userModel";

export const authOptions = {
  // adapter: PrismaAdapter(prisma),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // profile(profile) {
      //   // console.log(profile);
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     profilePic: profile.picture,
      //   };
      // },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session }) => {
      console.log("session : ", session);
      // console.log({ user });
      await connectToDB();
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id;
      return { session };
    },

    signIn: async ({ session, account, profile, email, credentials }) => {
      try {
        await connectToDB();
        // check if user exists
        let user = await User.findOne({
          email: profile.email,
        });
        if (!user) {
          user = await User.create({
            name: profile.name,
            email: profile.email,
            profilePic: profile.picture,
          });
        }
      } catch (error) {
        console.error(error);
      }
      return true;
    },
  },
};
