'use client';
import Link from "next/link";
import { IoIosWarning } from "react-icons/io";

const CollectionProductList = ({ products }) => {
    return (
        <ul className="flex flex-row flex-wrap w-full h-auto justify-center items-start my-10 ">
            {products.length > 0 && products.map((prod: any, index: number) => {
                return (
                    <li
                        style={{ backgroundImage: `url(${prod.back_img})` }}
                        className="flex flex-col w-1/6 h-auto justify-center items-center mx-8 mb-10 bg-cover bg-no-repeat"
                        key={index}
                    >
                        <Link href={"/store/product/" + prod.id} className="w-full h-auto flex flex-col justify-center items-center cursor-pointer">
                            {prod.front_img ? <img src={prod.front_img} alt={prod.name} className="flex w-full h-96 justify-center items-center hover:opacity-0 hover:transition-all duration-200" /> :
                                <section className="flex w-full h-96 justify-center items-center bg-gray-300">
                                    <IoIosWarning className="h-5 w-5 md:h-8 md:w-8" />
                                </section>}
                            <section className="flex justify-between items-center w-full h-auto mt-2 text-lg">
                                <p className="w-auto flex justify-center items-center">{prod.name}</p>
                                <p className="w-auto text-gray-600">{prod.price}$</p>
                            </section>
                        </Link>
                    </li>
                )
            })}
        </ul>

    )

}

export default CollectionProductList;