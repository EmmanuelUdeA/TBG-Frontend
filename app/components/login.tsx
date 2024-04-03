import Link from "next/link"


const Login = () => {
    return (
        <div className="bg-[url('/LoginBackground.webp')] justify-center items-center w-screen h-autow-full h-screen bg-no-repeat bg-center bg-cover flex flex-col">
            <section className="w-1/2 h-5/6 flex flex-col justify-center items-center bg-white rounded-md ">
                <h1 className="w-full h-1/6 flex flex-row justify-center items-end text-4xl">
                    Login
                </h1>
                <p className="w-full h-1/6 flex flex-row justify-center items-center">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <form className="w-full h-1/2 flex flex-col justify-center items-center">
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="email">username or email</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="email" name="email" type="email" />
                    <label className="w-3/4 h-2 flex flex-row justify-start items-center mb-2 text-sm" htmlFor="password"> password</label>
                    <input className="w-3/4 h-1/5 flex flex-row justify-center item-center border-solid border mb-3 rounded-md" id="password" name="password" type="password" />
                    <input className="w-20 h-10 flex flex-row justify-center items-center border-0 bg-black text-white rounded-md cursor-pointer " type="submit" />


                </form>
                <p className="w-full h-1/6 flex flex-row justify-center items-center">
                    ¿New client?
                    <Link className="ml-4 " href="#">Create account</Link>
                </p>

            </section>
        </div>

    )
}

export default Login