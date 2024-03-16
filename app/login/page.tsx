"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubFooter from "../components/subFooter";
import Menu from "../components/menu";
import { useState } from "react";
import Login from "../components/login";

const Page = () => {
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <div className="flex flex-col justify-start items-center w-screen h-auto">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
            <Login />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page