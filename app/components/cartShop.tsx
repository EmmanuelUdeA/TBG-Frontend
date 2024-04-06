'use client'
import Link from "next/link"
import { VscClose } from "react-icons/vsc"
import { useStore } from "@/store/useStore"

const CartShop = ({ viewCart, setViewCart }) => {
    const handleViewMenu = () => {
        setViewCart(!viewCart)
    }
    const products = useStore(state => state.products)

    return (
        <div className="w-screen h-full flex flex-col justify-center items-end fixed z-50 bg-opacity-80 bg-black text-white text-2xl">
            <section className="w-1/4 h-full flex flex-col justify-start items-center bg-slate-600">
                <section className="w-full h-8 flex flex-row justify-end items-center">
                    <VscClose className="cursor-pointer mr-5" size={30} onClick={handleViewMenu} />
                </section>
                <h1 className="font-bold text-black"> Cart Shop </h1>
                <ul className="w-full h-auto flex flex-col justify-center items-start p-6">
                    {products.lumen.map((product, index) => (
                        <li className="w-full h-20 flex flex-row justify-start items-center">
                            <img className="w-20 h-20 " src={product.imgPath} alt={product.name} />
                            <section className="w-auto h-8 flex flex-col justify-center items-start">
                                <h1 className="h-4 w-auto flex flex-row text-xs">{product.name}</h1>
                                <p className="h-4 w-auto flex flex-row text-xs">{product.price}</p>
                            </section>
                        </li>
                    ))
                    }
                </ul>
            </section>

        </div>
    )
}

export default CartShop
