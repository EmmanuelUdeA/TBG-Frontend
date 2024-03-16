"use client"
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";




const SubFooter = () => {
    return (
        <div className="h-64 w-screen flex flex-row justify-center items-center bg-black px-5">
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center">
                    Contact
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">
                        +57 324 5769790
                    </li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">
                        Emmanuel.bustamante@gmail.co
                    </li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center">
                    About Us
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Culture</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Vision</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Team</li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center">
                    Help
                </h1>
                <ul className="text-sm flex flex-col justify-start items-start w-full h-4/5 ">
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Shipping</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Refunds and Warranties</li>
                    <li className="w-full h-1/2 flex flex-row justify-start items-center">Frequent Questions</li>
                </ul>
            </section>
            <section className="flex flex-col justify-start items-center h-full w-1/4 py-20 px-5 text-white">
                <h1 className="text-lg mb-5 w-full h-1/5 flex flex-row justify-start items-center">
                    Follow Us
                </h1>
                <ul className="flex flex-row justify-start items-start w-full h-4/5">
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <BsWhatsapp />
                    </li>
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <BsInstagram />
                    </li>
                    <li className=" w-8 h-1/5 flex flex-row justify-start items-center">
                        <MdOutlineEmail size={20} />

                    </li>
                </ul>
            </section>
        </div>
    )
}

export default SubFooter