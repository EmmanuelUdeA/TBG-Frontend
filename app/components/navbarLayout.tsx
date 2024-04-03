"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubFooter from "../components/subFooter";
import Menu from "../components/menu";
import { useState } from "react";

const NavbarLayout = ({ children }) => {
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <div className="flex flex-col w-screen h-auto justify-start items-center">
            <Navbar viewMenu={viewMenu} setViewMenu={setViewMenu} />
            {viewMenu && <Menu viewMenu={viewMenu} setViewMenu={setViewMenu} />}
            {children}
            <SubFooter />
            <Footer />
        </div>
    )
}

export default NavbarLayout