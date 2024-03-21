"use client";

import Link from "next/link";

const ProductList = ({ products }) => {
    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center">
            <ul className="flex flex-row w-11/12 h-auto justify-center items-start my-10 flex-wrap">
                {products.map((p: any, i: any) => {
                    return (
                        <li key={i} className="flex flex-col w-1/5 h-96 justify-center items-center mx-5 mb-10">
                            <img src={p.imagen} alt={p.nombre} width={300} height={384} className="flex flex-col w-80 h-96 justify-center items-center object-cover object-center" />
                            <section className="flex flex-row justify-center items-center w-full h-6 mt-2">
                                <p className="flex flex-row justify-start items-center w-2/3 text-xs pl-3">{p.tipo}</p>
                                <p className="flex flex-row justify-end items-center w-1/3 pr-3 text-sm text-gray-600">{p.precio}$</p>
                            </section>
                            <Link href={"/store/product/" + p.nombre} className="flex flex-row w-full h-6 justify-center items-center text-sm pl-3">
                                <h2 className="flex flex-row w-full h-6 justify-start items-center text-sm">{p.nombre}</h2>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProductList;