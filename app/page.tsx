"use client";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Footer from "./components/footer";
import SubFooter from "./components/subFooter";
import Menu from "./components/menu";
import { useState } from "react";

export default function Home() {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <main className="flex flex-col items-center justify-start w-screen h-auto overflow-x-hidden">
      <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
      {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
      <Landing />
      <SubFooter />
      <Footer />
    </main>
  );
}
