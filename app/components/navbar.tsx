"use client";
import { TbMenu2 } from "react-icons/tb";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";
import { FaUserAstronaut } from "react-icons/fa";
import useScrollDirection from "@/hooks/useScrollDirection";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

const Navbar = ({ setViewMenu, viewMenu, viewCart, setViewCart, viewLoginBox, setViewLoginBox }) => {
    const showNav = useScrollDirection();
    const router = useRouter();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
    const cartProducts = useStore(state => state.cart);
    useEffect(() => {
        if (user) {
            router.push(`?uid=${user.uid}`);
        } else if (localStorage.getItem("uid") !== null) {
            router.push(`?uid=${localStorage.getItem("uid")}`);
            let user = JSON.parse(localStorage.getItem("user"));
            let token = localStorage.getItem("accessToken");
            user["token"] = token;
            updateUser(user);
        }
    }, [user]);
    const handleView = () => {
        setViewMenu(!viewMenu);
    }
    const handleCart = () => {
        setViewCart(!viewCart);
    }
    const handleLoginBox = () => {
        setViewLoginBox(!viewLoginBox);
    }
    return (
        <nav
            className={`flex flex-row justify-between items-center w-screen h-20 fixed top-10 z-20 px-5 bg-black text-white transition-transform duration-300 ${showNav ? 'transform translate-y-0' : 'transform -translate-y-40'}`}
        >
            <section className="flex flex-row justify-start items-center w-full md:w-3/12">
                <TbMenu2
                    className="flex flex-row h-5 w-5 md:h-7 md:w-7 cursor-pointer text-white " onClick={handleView} />
                <span className="hidden md:flex flex-row h-full justify-center items-center text-base ml-3 font-bold">Menu</span>
            </section>
            <section className="flex flex-row justify-center items-center w-full pr-10 md:w-6/12">
                <Link href={`/`} className="filter grayscale">
                    {/* Imagen del logo para pantallas medianas y grandes */}
                    <img src="/TBGLogo.webp" className="hidden md:block h-8 md:w-48 w-auto" alt="TBG Logo" />
                    {/* Texto TBG para pantallas pequeñas */}
                    <span className="block md:hidden text-xl font-bold">TBG</span>
                </Link>
            </section>

            <section className="flex flex-row justify-end items-center w-auto md:w-3/12 pr-5">
                <TfiShoppingCartFull className="flex flex-row md:h-8 md:w-8 cursor-pointer" onClick={handleCart} />
                <h1 className="flex flex-row text-xl font-bold md:h-auto md:w-auto mr-5 cursor-pointer">{cartProducts ? cartProducts.length : 0}</h1>
                {user ?
                    <FaUserAstronaut className="cursor-pointer flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center items-center" onClick={handleLoginBox} />
                    :
                    <RiContactsLine className="cursor-pointer flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center items-center" onClick={handleLoginBox} />}
            </section>
        </nav>
    )
}

export default Navbar;
