"use client"
import Link from "next/link";
import { useLogin, useLoginWithGoogle } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useFetchLandingImg } from "@/hooks/useLanding";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
    const login = useLogin();
    const loginWithGoogle = useLoginWithGoogle();
    useEffect(() => {
        if (user) {
            router.push('/');
        } else if (localStorage.getItem("uid") !== null) {
            router.push(`?uid=${localStorage.getItem("uid")}`);
            let user = JSON.parse(localStorage.getItem("user"));
            let token = localStorage.getItem("accessToken");
            user["token"] = token;
            updateUser(user);
        }
    }, [user]);
    const handleSubmit = (formData) => {
        const user = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        login.mutate(user);
    }
    useEffect(() => {
        if (login.isSuccess) {
            if (login.data.auth) {
                updateUser(login.data.user);
                toast.success("Login was successful.");
                redirect(`/`);
            } else {
                toast.error(login.data.error);
            }
        }
        if (loginWithGoogle.isSuccess) {
            if (loginWithGoogle.data.auth) {
                updateUser(loginWithGoogle.data.user);
                toast.success("Login was successful.");
                redirect(`/`);
            } else {
                toast.error("Error while logging in.");
            }
        }
    }, [login.isSuccess, loginWithGoogle.isSuccess]);
    const updateLandingImg = useStore(state => state.updateLandingImg);
    const fetchLandingImg = useFetchLandingImg();
    let landingImg = useStore(state => state.landingImg);
    useEffect(() => {
        if (!landingImg) {
            fetchLandingImg.mutate();
        }
    }, []);
    useEffect(() => {
        if (fetchLandingImg.isSuccess) {
            const data = fetchLandingImg.data;
            updateLandingImg(data);
        }
    }, [fetchLandingImg.isSuccess])
    return (
        <div className="bg-[url('/Landing/Landing1-blur.jpg')] bg-cover bg-center w-screen h-screen blur-load flex justify-center items-center">
            <section className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto flex flex-col justify-center items-center bg-white rounded-md z-10 mt-10 absolute top-1/2 transform -translate-y-1/2 p-5">
                <h1 className="w-full h-10 sm:h-12 flex flex-row justify-center items-end text-2xl sm:text-3xl md:text-4xl mb-4">
                    Login
                </h1>
                <p className="w-full h-10 sm:h-12 flex flex-row justify-center items-center mb-4 sm:mb-6 text-center text-sm sm:text-base">
                    Login with email and password.
                </p>
                <form className="w-full h-auto flex flex-col justify-center items-center mb-6 sm:mb-10" onSubmit={handleSubmit}>
                    <label className="w-full sm:w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">Email</label>
                    <input className="w-full sm:w-3/4 h-10 sm:h-12 flex flex-row justify-center item-center border-solid border mb-4 sm:mb-6 rounded-md px-5" id="email" name="email" type="email" />
                    <label className="w-full sm:w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="password">Password</label>
                    <input className="w-full sm:w-3/4 h-10 sm:h-12 flex flex-row justify-center item-center border-solid border mb-4 sm:mb-6 rounded-md px-5" id="password" name="password" type="password" />
                    <input className="text-lg sm:text-xl w-40 sm:w-60 h-10 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer hover:bg-white hover:text-black " type="submit" />
                </form>
                <p className="w-full h-auto flex flex-row justify-center items-center mb-4 sm:mb-5 text-center text-sm sm:text-base">
                    New client?
                    <Link className="ml-2 sm:ml-4 text-sky-500" href="/signUp">Create account</Link>
                </p>
                <button onClick={() => loginWithGoogle.mutate()} className="flex flex-row justify-center items-center py-2 px-4 sm:px-6 border border-gray-400 bg-white rounded-lg">
                    <FcGoogle className="cursor-pointer flex flex-row h-5 w-5 md:h-6 md:w-6 justify-center items-center mr-2" />
                    <span className="text-sm sm:text-base">Continue with Google</span>
                </button>
            </section>
            {landingImg && <img src={landingImg.landing1} alt="" loading="lazy" className="w-full h-full block" />}
        </div>

    )
}

export default Login