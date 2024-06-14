"use client"
import { useSignup } from "@/hooks/useAuth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useFetchLandingImg } from "@/hooks/useLanding";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLoginWithGoogle } from "@/hooks/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();
    const signup = useSignup();
    const loginWithGoogle = useLoginWithGoogle();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
    const handleSubmit = (formData) => {
        const user = {
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        signup.mutate(user);
    }
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
    useEffect(() => {
        if (signup.isSuccess) {
            if (signup.data.auth) {
                toast.success("The user has been created.");
                redirect("/login");
            } else {
                toast.error(signup.data.error);
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
    }, [signup.isSuccess, loginWithGoogle.isSuccess]);
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
            <section className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto max-h-full flex flex-col justify-center items-center bg-white rounded-md z-10 absolute mt-32 py-6">
                <h1 className="w-full h-12 flex flex-row justify-center items-end text-4xl">
                    Signup
                </h1>
                <p className="w-full h-12 flex flex-row justify-center items-center mb-10">
                    Register with email and password.
                </p>
                <form className="w-full h-auto flex flex-col justify-center items-center mb-10" action={handleSubmit}>
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="name">Name</label>
                    <input className="w-3/4 h-16 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5" id="name" name="name" type="text" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="lastname">Lastname</label>
                    <input className="w-3/4 h-16 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5" id="lastname" name="lastname" type="text" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">Email</label>
                    <input className="w-3/4 h-16 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5" id="email" name="email" type="email" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="password">Password</label>
                    <input className="w-3/4 h-16 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5" id="password" name="password" type="password" />
                    <input className="text-xl w-60 h-10 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black" type="submit" />
                </form>
                <p className="w-full h-auto flex flex-row justify-center items-center mb-5">
                    Already have an account?
                    <Link className="ml-4 text-sky-500" href="/login">Login with email</Link>
                </p>
                <button onClick={() => loginWithGoogle.mutate()} className="flex flex-row justify-center items-center py-2 px-8 border border-gray-400 bg-white rounded-lg">
                    <FcGoogle className="cursor-pointer flex flex-row h-5 w-5 md:h-8 md:w-8 justify-center items-center mr-2" />
                    <span>Continue with Google</span>
                </button>
            </section >
            {landingImg && <img src={landingImg.landing1} alt="" loading="lazy" className="w-full h-full block" />}
        </div >
    )
}

export default Signup