"use client"
import { useSignup } from "@/hooks/useAuth";
import Link from "next/link"
import { redirect } from "next/navigation";

const SignUp = () => {
    const signup = useSignup();
    const handleSubmit = (formData) => {
        const user = {
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        signup.mutate(user);
    }
    if (signup.isSuccess) {
        redirect("/login");
    }
    return (
        <div className="justify-center items-center w-screen h-autow-full h-screen bg-no-repeat bg-center bg-cover flex flex-col border-s ">
            <section className="w-1/2 h-5/6 flex flex-col justify-center items-center bg-white rounded-md ">
                <  h1 className="w-full h-1/6 flex flex-row justify-center items-end text-4xl" >
                    Sign Up
                </ h1 >
                <p className="w-full h-1/6 flex flex-row justify-center items-center">
                    Create your account and be part of our family.
                </p>
                <form className="w-full h-1/2 flex flex-col justify-center items-center" action={handleSubmit}>
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="name">name</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="name" name="name" type="text" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="lastname">lastname</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="lastname" name="lastname" type="text" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">email</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="email" name="email" type="email" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="password"> password</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="password" name="password" type="password" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="reply_password"> reply password</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="reply_password" name="reply_password" type="password" />
                    <input className="w-20 h-10 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer " type="submit" />
                </form>
            </section >
        </div >
    )
}

export default SignUp