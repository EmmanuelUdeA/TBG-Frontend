"use client"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTiktok } from "react-icons/bs";
import Link from "next/link";

const SubFooter = () => {
    return (
        <div className="h-auto py-6 md:py-0 md:h-16 w-screen flex flex-col md:flex-row justify-center items-center bg-black">
            <section className="my-2 md:my-0 flex flex-col justify-center items-center h-full w-full md:w-1/4 text-white">
                <Link href="/contactUs" className="text-lg hover:text-blue-500 w-full h-auto flex flex-row justify-center items-center font-semibold">Contact Us</Link>
            </section>
            <section className="my-2 md:my-0 flex flex-col justify-center items-center h-full w-full md:w-1/4 text-white">
                <Link href="/aboutUs" className="text-lg hover:text-blue-500 w-full h-auto flex flex-row justify-center items-center font-semibold">About Us</Link>
            </section>
            <section className="my-2 md:my-0 flex flex-col justify-center items-center h-full w-full md:w-1/4 text-white">
                <Link href="/help" className="text-lg hover:text-blue-500 w-full h-auto flex flex-row justify-center items-center font-semibold">Help</Link>
            </section>
            <ul className="my-2 md:my-0 flex flex-row justify-center items-center w-full md:w-1/4 h-full text-white text-lg font-semibold">
                <li className=" w-8 h-auto flex flex-row justify-center items-center">
                    <Link href="https://wa.me/573243947774" target="_blank" rel="noopener noreferrer">
                        <BsWhatsapp className="hover:text-green-500 cursor-pointer text-lg font-semibold text-white"/>
                    </Link>
                </li>
                <li className=" w-8 h-auto flex flex-row justify-center items-center">
                    <Link href="https://www.instagram.com/trip_boysgang/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="hover:text-orange-500 cursor-pointer text-lg font-semibold text-white" />
                    </Link>
                </li>
                <li className=" w-8 h-auto flex flex-row justify-center items-center">
                    <Link href="https://www.gmail.com" target="_blank" rel="noopener noreferrer" >
                        <MdOutlineEmail size={20} className="hover:text-red-500 cursor-pointer text-lg font-semibold text-white" />
                    </Link>
                </li>
                <li className=" w-8 h-auto flex flex-row justify-center items-center">
                    <Link href="https://www.tiktok.com/@trip_boysgang" target="_blank" rel="noopener noreferrer">
                        <BsTiktok className="hover:text-purple-500 cursor-pointer text-lg font-semibold text-white"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SubFooter