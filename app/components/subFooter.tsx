"use client"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTiktok } from "react-icons/bs";
import Link from "next/link";





const SubFooter = () => {
    return (
        <div className="h-64 w-screen flex flex-row justify-center items-center bg-black px-20">
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center font-semibold">
                    Contact Us
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">
                        +57 324 5769790
                    </li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">
                        Tripboysgang@gmail.com
                    </li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center font-semibold">
                    About Us
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Culture</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Vision</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Team</li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center font-semibold">
                    Help
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5 ">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Frequent Questions</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Refunds and Warranties</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Shipping</li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center font-semibold">
                    Follow Us
                </h1>
                <ul className="flex flex-row justify-start items-start w-full h-4/5 ">
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <Link href="https://wa.me/573243947774" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp className="hover:text-green-500 cursor-pointer" />
                        </Link>
                    </li>
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <Link href="https://www.instagram.com/trip_boysgang/" target="_blank" rel="noopener noreferrer">
                            <BsInstagram className="hover:text-orange-500 cursor-pointer" />
                        </Link>
                    </li>
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <Link href="http://www.gmail.com" target="_blank" rel="noopener noreferrer" >
                            <MdOutlineEmail size={20} className="hover:text-red-500 cursor-pointer" />
                        </Link>
                    </li>
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <Link href="https://www.tiktok.com/@trip_boysgang" target="_blank" rel="noopener noreferrer">
                            <BsTiktok className="hover:text-purple-500 cursor-pointer" />
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default SubFooter