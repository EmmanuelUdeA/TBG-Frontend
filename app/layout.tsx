import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { Botpress } from "./components/botpress";
import NavbarLayout from "./components/navbarLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "TBG SHOP",
  description: "Trip boys gang shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <Botpress />
      </head>
      <body className={GeistSans.className} >
        <QueryClientProvider client={queryClient}>
          <NavbarLayout>
            {children}
            <Toaster richColors closeButton position="bottom-center"/>
          </NavbarLayout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
