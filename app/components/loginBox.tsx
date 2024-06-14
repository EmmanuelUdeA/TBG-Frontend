"use client";
import { VscClose } from "react-icons/vsc";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLogout, useLogouWithGoogle } from "@/hooks/useAuth";
import { toast } from "sonner";
import useScrollDirection from "@/hooks/useScrollDirection";

const LoginBox = ({ viewLoginBox, setViewLoginBox }) => {
    const showNav = useScrollDirection();
    const logout = useLogout();
    const logoutWithGoogle = useLogouWithGoogle();
    const router = useRouter();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
    const handleViewLoginBox = () => {
        setViewLoginBox(!viewLoginBox);
    }
    const handleLogout = () => {
        const typeSession = localStorage.getItem("session");
        if (typeSession === 'email/password') {
            logout.mutate();
        }
        if (typeSession === 'google') {
            logoutWithGoogle.mutate();
        }
    }
    const handleLogin = () => {
        handleViewLoginBox();
        router.push('/login');
    }
    const handleSignUp = () => {
        handleViewLoginBox();
        router.push('/signUp')
    }
    useEffect(() => {
        if(!showNav){
            setViewLoginBox(false);
        }
    }, [showNav])
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
    useEffect(() => {
        if (logout.isSuccess || logoutWithGoogle.isSuccess) {
            updateUser(null);
            handleViewLoginBox();
            toast.success("Logout was successful.");
            router.push('/');
        }
    }, [logout.isSuccess, logoutWithGoogle.isSuccess])
    return (
        <div className='w-screen h-full flex flex-row justify-end items-start fixed z-50'>
            <div className='bg-white flex flex-col w-80 mr-12 h-auto z-50 p-3 rounded-xl mt-28 text-black text-lg justify-start items-center'>
                <section className="w-full h-8 flex flex-row justify-start items-center mb-5">
                    <div className="w-72 h-full text-sm flex flex-col">                    {user && <label className="w-auto h-1/2">User: {user.name} {user.lastname}</label>}
                        {user && <label className="w-auto h-1/2">Email: {user.tbl_email.email}</label>}
                    </div>
                    <VscClose className="cursor-pointer w-8 h-8" onClick={handleViewLoginBox} />
                </section>
                {user ? <button className="flex w-60 flex-row justify-center items-center h-14 bg-black rounded-xl mt-6 text-white hover:bg-white hover:text-black hover:border hover:border-black">Profile</button> : <button className="flex w-60 flex-row justify-center items-center h-14 bg-black rounded-xl mt-6 text-white hover:bg-white hover:text-black hover:border hover:border-black" onClick={handleSignUp}>SignUp</button>}
                {user ? <button className="flex w-60 flex-row justify-center items-center h-14 bg-black rounded-xl mt-3 text-white hover:bg-white hover:text-black hover:border hover:border-black" onClick={handleLogout}>LogOut</button> : <button className="flex w-60 flex-row justify-center items-center h-14 bg-black rounded-xl mt-3 text-white hover:bg-white hover:text-black hover:border hover:border-black" onClick={handleLogin}>LogIn</button>}
            </div>
        </div>
    )
}

export default LoginBox;