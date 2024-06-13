import { VscClose } from "react-icons/vsc";
import Link from "next/link";

const Menu = ({ setViewMenu, viewMenu }) => {
    const handleViewMenu = () => {
        setViewMenu(!viewMenu);
    }
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center fixed z-50 bg-opacity-80 bg-black text-white text-2xl">
            <section className="w-full h-12 flex flex-row justify-end items-center pr-6">
                <VscClose className="cursor-pointer" size={30} onClick={handleViewMenu} />
            </section>
            <ul className="w-full h-full justify-center items-center flex flex-col px-64 py-40">
                <li className="h-1/4 w-full flex flex-row justify-center items-center">
                    {/*<Link href={`/` + (uid ? '?uid=' + uid : '')} onClick={handleViewMenu}>
                        Home
                    </Link>*/}
                    <Link href={`/`} onClick={handleViewMenu}>
                        Home
                    </Link>
                </li>
                <li className="h-1/4 w-full flex flex-row justify-center items-center">
                    {/*<Link href={`/store` + (uid ? '?uid=' + uid : '')} onClick={handleViewMenu}>
                        Store
                    </Link>*/}
                    <Link href={`/store`} onClick={handleViewMenu}>
                        Store
                    </Link>
                </li>
                <li className="h-1/4 w-full flex flex-row justify-center items-center">
                    {/*<Link href={`/collections` + (uid ? '?uid=' + uid : '')} onClick={handleViewMenu}>
                        Collections
                    </Link>*/}
                    <Link href={`/collections`} onClick={handleViewMenu}>
                        Collections
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;