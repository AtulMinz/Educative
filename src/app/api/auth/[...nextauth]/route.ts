import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { permanentRedirect, redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma?.user.findUnique({
          where: {
            email: String(credentials.email),
          },
        });
        if (user) {
          return {
            id: user?.id,
            email: user?.email,
            name: user?.name,
          };
        } else {
          const newUser = await prisma?.user.create({
            data: {
              email: credentials.email,
              password: credentials.password,
            },
          });

          if (newUser) {
            return {
              id: newUser?.id,
              email: newUser?.email,
            };
          }
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
