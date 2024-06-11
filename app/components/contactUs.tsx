import React, { useState } from 'react';

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado');
    };

    return (
        <div className="h-screen w-screen bg-black flex justify-center items-center">
            <section className="w-2/5 h-max flex flex-col justify-start items-center pt-10 bg-white rounded-md text-black">

                <h1 className="w-full h-12 flex flex-row justify-center items-start text-4xl font-bold">
                    Contact Us
                </h1>
                <form className="w-full h-auto flex flex-col justify-center items-center mb-10 pt-4" onSubmit={handleSubmit}>

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

                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="message">Subject:</label>
                    <input
                        className="w-3/4 h-4/5 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5 py-5 text-black"
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    ></input>

                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="message">Message:</label>
                    <textarea
                        className="w-3/4 h-4/5 flex flex-row justify-center item-center border-solid border mb-10 rounded-md px-5 py-5 text-black"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <input className="text-xl w-60 h-14 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black" type="submit" />
                </form>
            </section>
        </div>
    );
};

export default ContactUs;