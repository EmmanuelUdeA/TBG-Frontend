import Logo from "./logo"

const Footer = () => {
    return (
        <footer className="flex flex-row w-screen h-20 justify-center items-center bg-black	">
            <section className="flex flex-row w-1/5 h-full justify-start items-center pl-10">
                <div className="flex flex-row h-10 w-10 justify-center items-center bg-white rounded-3xl">
                    <Logo />
                </div>
            </section>
            <section className="flex flex-row w-3/5 h-full justify-center items-center">
                <ul className="text-slate-50 flex flex-row justify-center items-center h-full w-full">
                    <li className="flex flex-row justify-end items-center h-5 w-3/12 pr-3 border-solid border-r-2 border-white">Conditions</li>
                    <li className="flex flex-row justify-start items-center h-5 w-3/12 pl-3"> Policies </li>
                </ul>
            </section>
            <section className="flex flex-row w-1/5 h-full justify-center items-center">
                <h1 className="text-slate-50 flex flex-row justify-center items-center h-full w-full">
                    TBG <label>&#174;</label>
                </h1>
            </section>
        </footer>
    )
}

export default Footer