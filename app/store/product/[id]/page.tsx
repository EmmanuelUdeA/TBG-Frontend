"use client";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useFetchProducts } from "@/hooks/useProducts";
import { toast } from "sonner";

export default function Page() {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    const pathname = usePathname();
    let arrPath = pathname.split("/");
    let id = parseInt(arrPath[arrPath.length - 1]);
    const updateCart = useStore(store => store.updateCart);
    const updateProducts = useStore(state => state.updateProducts);
    const fetchProducts = useFetchProducts();
    let getProduct = useStore(state => state.getProduct);
    const [product, setProduct] = useState(getProduct(id));
    useEffect(() => {
        if (!product) {
            fetchProducts.mutate();
        }
    }, []);
    useEffect(() => {
        if (fetchProducts.isSuccess) {
            const data = fetchProducts.data;
            updateProducts(data);
            let prod = data.find((product) => product.id === id);
            setProduct(prod);
        }
    }, [fetchProducts.isSuccess]);
    const handleAddQuantity = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
        }
    }
    const handleRemoveQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleSize = (e: any) => {
        const newSize = e.target.getAttribute("value");
        setSize(newSize);
    }
    const addProductToCart = () => {
        if (product && size!=="") {
            const productToCart = {
                ...product,
                size,
                quantity
            };
            updateCart(productToCart);
        }
    }
    return (
        <div className="flex flex-row w-screen h-screen justify-center items-center mt-40">
            <section className="flex flex-col w-1/2 h-full justify-center items-center">
                {product && <img className="flex flex-col justify-center items-center w-5/6 h-5/6" alt="product" src={product.front_image} />}
            </section>
            <section className="flex flex-col w-1/2 h-full justify-start items-start pl-16 mt-40">
                <h1 className="flex flex-row justify-start items-center w-full h-auto text-3xl font-extrabold">{product ? product.name : ""}</h1>
                <h2 className="flex flex-row justify-start items-center w-full h-auto text-xl mt-5">${product ? product.price : ""}</h2>
                <div className="flex flex-col justify-center items-start w-full h-auto mt-10">
                    <span className="flex flex-row justify-start items-center w-full h-auto text-lg">Sizes: </span>
                    <ul className="flex flex-row justify-start items-center w-full h-auto mt-3">
                        <li className={size === "S" ? "mr-3 border rounded-2xl px-5 py-4 bg-gray-200" : "mr-3 border rounded-2xl px-5 py-4"} onClick={(e) => handleSize(e)} value="S">
                            <button className="cursor-pointer" value="S">S</button>
                        </li>
                        <li className={size === "M" ? "mr-3 border rounded-2xl px-5 py-4 bg-gray-200" : "mr-3 border rounded-2xl px-5 py-4"} onClick={(e) => handleSize(e)} value="M">
                            <button className="cursor-pointer" value="M">M</button>
                        </li>
                        <li className={size === "L" ? "mr-3 border rounded-2xl px-5 py-4 bg-gray-200" : "mr-3 border rounded-2xl px-5 py-4"} onClick={(e) => handleSize(e)} value="L">
                            <button className="cursor-pointer" value="L">L</button>
                        </li>
                        <li className={size === "XL" ? "mr-3 border rounded-2xl px-5 py-4 bg-gray-200" : "mr-3 border rounded-2xl px-5 py-4"} onClick={(e) => handleSize(e)} value="XL">
                            <button className="cursor-pointer" value="XL">XL</button>
                        </li>
                        <li className={size === "XXL" ? "mr-3 border rounded-2xl px-5 py-4 bg-gray-200" : "mr-3 border rounded-2xl px-5 py-4"} onClick={(e) => handleSize(e)} value="XXL">
                            <button className="cursor-pointer" value="XXL">XXL</button>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-start w-full h-auto mt-10">
                    <span className="flex flex-row justify-start items-center w-full h-auto text-lg">Quantity: </span>
                    <div className="flex flex-row justify-start items-center w-auto h-auto mt-3 border rounded-2xl">
                        <button className="h-full w-1/3 flex flex-col justify-center items-center px-5 py-4 hover:bg-gray-200 rounded-2xl" onClick={handleRemoveQuantity}>-</button>
                        <label className="h-full w-1/3 flex flex-col justify-center items-center px-5 py-4">{quantity}</label>
                        <button className="h-full w-1/3 flex flex-col justify-center items-center px-5 py-4 hover:bg-gray-200 rounded-2xl" onClick={handleAddQuantity}>+</button>
                    </div>
                </div>
                <button className="mt-10 w-2/3 h-16 flex flex-row justify-center items-center bg-black text-white text-lg font-bold rounded-2xl" onClick={addProductToCart}>
                    ADD TO CART
                </button>
                <button className="mt-5 w-2/3 h-16 flex flex-row justify-center items-center bg-black text-white text-lg font-bold rounded-2xl">
                    BUY NOW
                </button>
            </section>
        </div>
    )
}