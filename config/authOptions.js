import prisma from "@/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getToken } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profile(profile) {
        // console.log(profile);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          profilePic: profile.picture,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async (session, user) => {
      // console.log("session : ", session);
      // console.log({ user });
      return session;
    },
    jwt: async ({ token, user }) => {
      console.log("token : ", token);
      return { ...token, ...user };
    },
    signIn: async ({ session, user, account, profile, email, credentials }) => {
      // console.log(user, profile, email, credentials);
      // console.log("session : ", session);
      // console.log("user : ", user);
      // console.log("account : ", account);
      // console.log("profile : ", profile);
      // console.log("email : ", email);
      // console.log("credentials : ", credentials);
      // check if user already exists in db
      const existUser = await prisma.user.findUnique({
        where: {
          email: profile.email,
        },
      });
      console.log(existUser);
      if (!existUser) {
        // // if not, create user
        const newUser = await prisma.user.create({
          data: {
            email: profile.email,
            name: profile.name,
            profilePic: profile.profilePic,
            id: profile.id,
          },
        });
        console.log(newUser);
      }

      // return true to accept the login
      return true;
    },
  },
};
