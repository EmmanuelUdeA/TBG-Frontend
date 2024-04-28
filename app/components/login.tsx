"use client"
import Link from "next/link";
import { useLogin, useLoginWithGoogle } from "@/hooks/useAuth";
import { redirect } from "next/navigation";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";

const Login = () => {
    const updateUser = useStore(state => state.updateUser);
    const login = useLogin();
    const loginWithGoogle = useLoginWithGoogle();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            updateUser(loginWithGoogle.data);
            redirect(`/?uid=${user.uid}`);
        });
    }, []);
    const handleSubmit = (formData) => {
        const user = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        login.mutate(user);
    }
    if (login.isSuccess) {
        if (login.data.uid) {
            updateUser(login.data);
            redirect(`/?uid=${login.data.uid}`);
        }
    }
    if (loginWithGoogle.isSuccess) {
        if (loginWithGoogle.data.uid) {
            redirect(`/?uid=${login.data.uid}`);
        }
    }
    return (
        <div className="bg-[url('/LoginBackground.webp')] justify-center items-center w-screen h-autow-full h-screen bg-no-repeat bg-center bg-cover flex flex-col">
            <section className="w-1/2 h-5/6 flex flex-col justify-center items-center bg-white rounded-md ">
                <h1 className="w-full h-1/6 flex flex-row justify-center items-end text-4xl">
                    Login
                </h1>
                <p className="w-full h-1/6 flex flex-row justify-center items-center">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <form className="w-full h-1/2 flex flex-col justify-center items-center" action={handleSubmit}>
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">username or email</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="email" name="email" type="email" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="password"> password</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="password" name="password" type="password" />
                    <input className="w-20 h-10 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer " type="submit" />
                </form>
                <p className="w-full h-1/6 flex flex-row justify-center items-center">
                    ¿New client?
                    <Link className="ml-4 " href="/signup">Create account</Link>
                </p>
                <button onClick={() => loginWithGoogle.mutate()}>LoginWithGoogle</button>
            </section>
        </div>

    )
}

export default Login