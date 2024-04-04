"use client"
import React, { useState, useEffect } from "react";
import { TbMenu2 } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiContactsLine } from "react-icons/ri";
import LogoText from "./logoText";
import Link from "next/link";

const Navbar = ({ setViewMenu, viewMenu }) => {


    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true);

    const handleView = () => {
        setViewMenu(!viewMenu)
    }
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`flex flex-row justify-between items-center w-screen h-20 top-0 z-10 px-5 md:scroll-px-5`}>
            <section className="flex flex-row justify-start items-center w-full md:w-3/12">
                <TbMenu2
                    className="flex flex-row h-5 w-5 md:h-7 md:w-7 cursor-pointer " onClick={handleView} />
                <label className="hidden md:flex flex-row h-full justify-center items-center text-base ml-3 font-bold">Menu</label>
            </section>
            <section className="hidden md:flex flex-row justify-center items-center w-6/12 h-full">
                <Link href="/">
                    <LogoText />
                </Link>
            </section>
            <section className="flex flex-row justify-end items-center w-full md:w-3/12">
                <BiSearchAlt className="flex flex-row h-5 w-5 md:h-8 md:w-8 mr-5 cursor-pointer " />
                <TfiShoppingCartFull className=" flex flex-row h-5 w-5 md:h-8 md:w-8 mr-5 cursor-pointer " />
                <Link className="flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center item" href="/login">
                    <RiContactsLine className="cursor-pointer h-full w-full" />
                </Link>
            </section>
        </nav>
    )
}

export default Navbar