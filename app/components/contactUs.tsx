"use client";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import React, { useState } from 'react';
import { useFetchMailer } from '@/hooks/useMailer';
import { toast } from 'sonner';

const ContactUs: React.FC = () => {
    const fetchMailer = useFetchMailer();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mail = {
            fromEmail: email,
            fromUser: name,
            subject: subject,
            message: message
        }
        fetchMailer.mutate(mail);
    };
    useEffect(() => {
        if (fetchMailer.isSuccess) {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            toast.success(fetchMailer.data);
        }
    }, [fetchMailer.isSuccess]);
    return (
        <div className="h-auto w-screen flex flex-col justify-start text-center items-center mt-40 mb-16">
                <h1 className="text-4xl font-bold mb-5 text-black w-full p-5">
                    Contact Us
                </h1>
                <form className="flex flex-col justify-center items-center w-1/2 h-auto" onSubmit={handleSubmit}>
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="name">Name:</label>
                    <input
                        className="w-3/4 h-4/5 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-4 py-5 text-black"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">Email:</label>
                    <input
                        className="w-3/4 h-4/5 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5 py-5 text-black"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="subject">Subject:</label>
                    <input
                        className="w-3/4 h-4/5 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5 py-5 text-black"
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    ></input>
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="message">Message:</label>
                    <textarea
                        className="w-3/4 h-44 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5 py-5 text-black resize-none"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <input className="text-xl w-60 h-14 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black" type="submit" />
                </form>
        </div>
    );
};

export default ContactUs;