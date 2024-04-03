import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { Botpress } from "./components/botpress";
import NavbarLayout from "./components/navbarLayout";

export const metadata: Metadata = {
  title: "TBGSHOP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Botpress />
      </head>
      <body className={GeistSans.className}>
        <NavbarLayout>
          {children}
        </NavbarLayout>
      </body>
    </html>
  );
}
