'use client';
import { VscClose } from "react-icons/vsc";
import { useStore } from "@/store/useStore";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CartShop = ({ viewCart, setViewCart }) => {
    const cartProducts = useStore(state => state.cart);
    const removeCartProduct = useStore(state => state.removeFromCart);
    const addProductQuantity = useStore(state => state.addProductQuantity);
    const removeProductQuantity = useStore(state => state.removeProductQuantity);
    const handleViewMenu = () => {
        setViewCart(!viewCart)
    }
    const user = useStore((state) => state.user);
    const getSubtotal = (products) => {
        if (products) {
            let subtotal = 0;
            for (let i = 0; i < products.length; i++) {
                subtotal += products[i].price * products[i].quantity;
            }
            return subtotal;
        }
        else return null;
    }
    const [subtotal, setSubtotal] = useState(cartProducts ? getSubtotal(cartProducts) : null);

    const handleSubmit = () => {
        if (!user && localStorage.getItem("user") === null) {
            toast.error("You need to login to access this page");
        }
    }

    useEffect(() => {
        let subtotal = getSubtotal(cartProducts);
        setSubtotal(subtotal)
    }, [cartProducts]);

    return (
        <div className="w-screen h-full flex flex-col justify-center items-end fixed z-50 bg-opacity-80 bg-black text-white text-2xl">
            <section className="w-1/3 h-full flex flex-col justify-start items-center bg-white">
                <section className="w-full h-16 flex flex-row justify-between items-center bg-gray-200 ">
                    <h1 className="font-bold text-black ml-5"> Cart Shop </h1>
                    <VscClose className="cursor-pointer mr-8 text-black justify-center items-center" size={30} onClick={handleViewMenu} />
                </section>
                <ul className="w-full h-auto flex-1 flex-col justify-center items-start overflow-y-visible overflow-x-hidden mt-10">
                    {cartProducts?.map((product) => (
                        <li className="w-full h-auto flex flex-row justify-start items-center text-black my-4 ml-8" key={product.id}>
                            <img className="w-32 h-40 " src={product.front_image} alt={product.name} />
                            <section className="w-auto h-full flex flex-col justify-between items-start p-6 ">
                                <h1 className="h-4 w-auto flex flex-row text-sm">{product.name}</h1>
                                <p className="h-4 w-auto flex flex-row text-xs">{product.price} $</p>
                                <p className="h-4 w-auto flex flex-row text-xs">{product.size}</p>
                                <section className="flex flex-row w-full h-10 justify-between items-center">
                                    <div className="flex flex-row h-10 w-24 justify-between items-center rounded-xl bg-gray-200 mr-20 ">
                                        <button className="text-base w-1/3 flex justify-center items-center" onClick={() => removeProductQuantity(product.id, product.size)}>-</button>
                                        <span className="text-base">{product.quantity}</span>
                                        <button className="text-base w-1/3 flex justify-center items-center" onClick={() => addProductQuantity(product.id, product.size)}>+</button>
                                    </div>
                                    <GoTrash className="cursor-puntor" onClick={() => removeCartProduct(product.id, product.size)} />
                                </section>
                            </section>
                        </li>
                    ))
                    }
                </ul>
                {cartProducts && <section className="w-full h-auto flex flex-row justify-start items-center text-black text-xl pt-5 shadow-[rgba(0,0,15,0.5)_0px_-8px_6px_-6px] mt-10">
                    <p className="flex flex-row h-full w-full pl-5 pr-10 justify-between items-center">Subtotal: <label>{subtotal} $</label></p>
                </section>}
                {cartProducts && <button className="w-3/4 h-auto bg-sky-600 text-white font-bold p-3 mt-5 mb-5 rounded-xl" onClick={handleSubmit}>Checkout</button>}
            </section>

        </div>
    )
}

export default CartShop
