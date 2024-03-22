"use client"
import React from "react";
import { TbMenu2 } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaUserAstronaut } from "react-icons/fa6";
import LogoText from "./logoText";
import Link from "next/link";


const Navbar = ({ setViewMenu, viewMenu }) => {
    const handleView = () => {
        setViewMenu(!viewMenu)
    }
    return (
        <nav className="flex flex-row justify-center items-center w-screen h-20">
            <section className="flex flex-row justify-start items-center w-3/12 h-full pl-5">
                <TbMenu2
                    size={30} className="cursor-pointer" onClick={handleView} />
                <label className="flex flex-row h-full justify-center items-center text-base ml-3 font-bold">Menu</label>
            </section>
            <section className="flex flex-row justify-center items-center w-6/12 h-full">
                {/*<Logo />*/}
                <Link href="/">
                    <LogoText />
                </Link>
            </section>
            <section className="flex flex-row justify-end items-center w-3/12 h-full pr-10">
                <BiSearchAlt size={30} className="mr-5 cursor-pointer" />
                <TfiShoppingCartFull size={30} className="mr-5 cursor-pointer" />
                <Link href="/login">
                    <FaUserAstronaut size={30} className="cursor-pointer" />
                </Link>
            </section>
        </nav>
    )
}

export default Navbar