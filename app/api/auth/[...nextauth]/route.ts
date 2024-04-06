import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user }) {
            if (user.email === process.env.ALI_EMAIL || user.email === process.env.EMMA_EMAIL) {
                return true;
            } else {
                return false;
            }
        }
    },
    theme: {
        colorScheme: "light",
        brandColor: "#ffffff",
        logo: "/TBG.svg",
    }
})

export { authOptions as GET, authOptions as POST }