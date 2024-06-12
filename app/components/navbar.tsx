"use client";
import { TbMenu2 } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";
//import { useSearchParams } from "next/navigation";
import useScrollDirection from "@/hooks/useScrollDirection";
import { useLogout, useLogouWithGoogle } from "@/hooks/useAuth";

const Navbar = ({ setViewMenu, viewMenu, viewCart, setViewCart }) => {
    const logout = useLogout();
    const logoutWithGoogle = useLogouWithGoogle();
    //const searchParams = useSearchParams();
    //const uid = searchParams.get('uid');
    const handleView = () => {
        setViewMenu(!viewMenu);
    }
    const handleCart = () => {
        setViewCart(!viewCart);
    }
    const handleLogout = () => {
        const typeSession = localStorage.getItem("session");
        console.log(typeSession)
        if (typeSession === 'email/password') {
            logout.mutate();
            location.reload();
        }
        if (typeSession === 'google') {
            logoutWithGoogle.mutate();
            location.reload();
        }
    }
    const showNav = useScrollDirection();
    return (
        <nav
            className={`flex flex-row justify-between items-center w-screen h-20 fixed top-10 z-20 px-5 bg-black text-white transition-transform duration-300 ${showNav ? 'transform translate-y-0' : 'transform -translate-y-40'}`}
        >
            <section className="flex flex-row justify-start items-center w-full md:w-3/12">
                <TbMenu2
                    className="flex flex-row h-5 w-5 md:h-7 md:w-7 cursor-pointer text-white " onClick={handleView} />
                <span className="hidden md:flex flex-row h-full justify-center items-center text-base ml-3 font-bold">Menu</span>
            </section>
            <section className="hidden md:flex flex-row justify-center items-center w-6/12">
                {/*<Link href={`/` + (uid ? '?uid=' + uid : '')} className="filter grayscale">
                    <img src="/TBGLogo.webp" className="h-8 w-48" />
                </Link>*/}
                <Link href={`/`} className="filter grayscale">
                    <img src="/TBGLogo.webp" className="h-8 w-48" />
                </Link>
            </section>
            <section className="flex flex-row justify-end items-center w-full md:w-3/12 pr-5">
                <form className="relative w-auto mr-5 h-10">
                    <input type="search"
                        className="relative z-10 h-10 rounded-full border bg-transparent outline-none w-56 cursor-tex pl-10 pr-3" />
                    <BiSearchAlt className="absolute inset-y-0 h-8 w-8 border-r border-transparent my-auto ml-2" />
                </form>
                <TfiShoppingCartFull className="flex flex-row h-5 w-5 md:h-8 md:w-8 mr-5 cursor-pointer" onClick={handleCart} />
                {false ?
                    <FaUserAstronaut className="cursor-pointer flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center items-center" onClick={handleLogout} />
                    :
                    <Link href="/login">
                        <RiContactsLine className="cursor-pointer flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center items-center" />
                    </Link>}
            </section>
        </nav>
    )
}

export default Navbar;
