"use client";

import Link from "next/link";
import ProductsFilters from "./productsFilters";

const Store = ({ products }) => {
    return (
        <div className="flex w-screen h-screen">
            <ProductsFilters />
            <div className="flex flex-col w-full sm:w-3/4 h-full justify-start items-center overflow-auto">
                <h1 className="flex w-11/12 h-12 justify-center items-center text-2xl mt-10 font-bold">Store</h1>
                <ul className="flex flex-row w-11/12 h-auto justify-center items-start my-10 flex-wrap">
                    {products.map((p: any, i: any) => {
                        return (
                            <li key={i} className="flex flex-col w-1/5 h-96 justify-center items-center mx-5 mb-10">
                                <img src={p.imagen} alt={p.nombre} className="flex w-80 h-96 justify-center items-center object-cover object-center" />
                                <section className="flex justify-center items-center w-full h-6 mt-2">
                                    <p className="w-2/3 text-xs pl-3">{p.tipo}</p>
                                    <p className="w-1/3 pr-3 text-sm text-gray-600">{p.precio}$</p>
                                </section>
                                <Link href={"/store/product/" + p.nombre} className="w-full h-6 flex justify-center items-center text-sm pl-3">
                                    <h2 className="w-full h-6 flex justify-start items-center text-sm">{p.nombre}</h2>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};


export default Store;