"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubFooter from "../components/subFooter";
import Menu from "../components/menu";
import { useState } from "react";
import CartShop from "../components/cartShop";
import Ads from "./ads";
import LoginBox from "./loginBox";

const NavbarLayout = ({ children }) => {
    const [viewMenu, setViewMenu] = useState(false);
    const [viewCart, setViewCart] = useState(false);
    const [viewLoginBox, setViewLoginBox] = useState(false);
    return (
        <div className="flex flex-col w-screen h-auto justify-start items-center">
            <Ads />
            <Navbar viewMenu={viewMenu} setViewMenu={setViewMenu} viewCart={viewCart} setViewCart={setViewCart} viewLoginBox={viewLoginBox} setViewLoginBox={setViewLoginBox}/>
            {viewMenu && <Menu viewMenu={viewMenu} setViewMenu={setViewMenu} />}
            {viewCart && <CartShop viewCart={viewCart} setViewCart={setViewCart} />}
            {viewLoginBox && <LoginBox viewLoginBox={viewLoginBox} setViewLoginBox={setViewLoginBox} />}
            {children}
            <SubFooter />
            <Footer />
        </div>
    )
}

export default NavbarLayout