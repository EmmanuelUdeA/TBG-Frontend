'use client'
import Link from "next/link"
import { VscClose } from "react-icons/vsc"
import { useStore } from "@/store/useStore"
import { GoTrash } from "react-icons/go";


const CartShop = ({ viewCart, setViewCart }) => {
    const handleViewMenu = () => {
        setViewCart(!viewCart)
    }
    const products = useStore(state => state.collections[0].products)

    return (
        <div className="w-screen h-full flex flex-col justify-center items-end fixed z-50 bg-opacity-80 bg-black text-white text-2xl">
            <section className="w-1/3 h-full flex flex-col justify-start items-center bg-white">
                <section className="w-full h-16 flex flex-row justify-between items-center bg-gray-200 ">
                    <h1 className="font-bold text-black ml-5"> Cart Shop </h1>
                    <VscClose className="cursor-pointer mr-8 text-black justify-center items-center" size={30} onClick={handleViewMenu} />
                </section>

                <ul className="w-full h-auto flex flex-col justify-center items-start">
                    {products.map((product, index) => (
                        <li className="w-full h-auto flex flex-row justify-start items-center text-black my-4 ml-8">
                            <img className="w-32 h-40 " src={product.imgPath} alt={product.name} />
                            <section className="w-auto h-full flex flex-col justify-between items-start p-6 ">
                                <h1 className="h-4 w-auto flex flex-row text-sm">{product.name}</h1>
                                <p className="h-4 w-auto flex flex-row text-xs">{product.price} $</p>
                                <p className="h-4 w-auto flex flex-row text-xs">XL</p>
                                <section className="flex flex-row w-full h-10 justify-between items-center">
                                    <div className="flex flex-row h-10 w-24 justify-between items-center rounded-xl bg-gray-200 mr-20 ">
                                        <button className="text-base w-1/3 flex justify-center items-center  ">-</button>
                                        <span className="text-base">1</span>
                                        <button className="text-base w-1/3 flex justify-center items-center">+</button>
                                    </div>
                                    <GoTrash />

                                </section>
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
