'use client'
import Navbar from "../components/navbar"
import { useState } from "react";
import Menu from "../components/menu";
import SubFooter from "../components/subFooter";
import Footer from "../components/footer";
import AboutUs from "../components/aboutUs";

const Page = () => {
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <div className="flex flex-col justify-start items-center w-screen h-auto">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
            <AboutUs />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page