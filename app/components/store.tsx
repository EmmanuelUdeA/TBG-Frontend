"use client";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import { useFetchProducts, useFetchCategories } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowDown, IoIosWarning } from "react-icons/io";
import Pagination from "./pagination";

const Store = () => {
    const productsPerPage = 8;
    const [actualPage, setActualPage] = useState(0);
    const [productsLenght, setProductsLength] = useState(0);
    const updateProducts = useStore(state => state.updateProducts);
    const updateCategories = useStore(store => store.updateCategories);
    let products = useStore(store => store.products);
    let categories = useStore(store => store.categories);
    const fetchProducts = useFetchProducts();
    const fetchCategories = useFetchCategories();
    const [viewCategories, setViewCategories] = useState(false);
    const [actualProducts, setActualProducts] = useState(products ? products.slice(productsPerPage * actualPage, (productsPerPage * actualPage) + productsPerPage) : null);
    useEffect(() => {
        if (!products) {
            fetchProducts.mutate();
        }
        if (!categories) {
            fetchCategories.mutate();
        }
    }, []);
    useEffect(() => {
        if (fetchProducts.isSuccess) {
            const data = fetchProducts.data;
            updateProducts(data);

        }
        if (fetchCategories.isSuccess) {
            const data = fetchCategories.data;
            updateCategories(data);
        }
    }, [fetchProducts.isSuccess, fetchCategories.isSuccess]);
    useEffect(() => {
        if (products) {
            const actualData = products.slice(productsPerPage * actualPage, (productsPerPage * actualPage) + productsPerPage);
            setActualProducts(actualData);
            setProductsLength(products.length);
        }
    }, [products, actualPage])
    const handleViewCategories = () => {
        setViewCategories(!viewCategories);
    }
    return (
        <div className="flex w-screen h-auto">
            <div className="flex flex-row flex-wrap w-full h-auto justify-start items-start mb-12 overflow-y-auto">
                <h1 className="flex w-full h-12 justify-center items-center text-3xl mt-20 font-extrabold">Store</h1>
                <section className="flex flex-col w-1/4 h-auto justify-start items-center my-20 shadow-[2px_0_2px_-2px_rgba(0,0,0,0.7)] pb-40 ">
                    <h2 className="flex flex-row w-full h-auto justify-center items-center font-bold text-xl">Filters</h2>
                    <ul className="flex flex-col justify-center items-center w-full h-auto mt-10">
                        <li
                            className="flex flex-row w-full h-10 cursor-pointer justify-between items-center px-10"
                            role="button"
                            tabIndex={0}
                            onClick={handleViewCategories}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleViewCategories(); }}
                            aria-expanded={viewCategories}
                            aria-label="View categories"
                        >
                            Category {viewCategories ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        </li>
                        {viewCategories && <ul className="flex flex-col justify-center items-start w-full h-auto">
                            {categories && categories.map((cat: any, idx: number) => {
                                return (
                                    <li key={cat.id} className="flex flex-row w-auto h-10 cursor-pointer justify-start items-center px-16">
                                        <input type="checkbox" className="mr-5" /> {cat.name}
                                    </li>
                                )
                            })}
                        </ul>}
                        <li className="flex flex-row w-full h-10 cursor-pointer justify-between items-center px-10">
                            Size <IoIosArrowForward />
                        </li>
                        <li className="flex flex-row w-full h-10 cursor-pointer justify-between items-center px-10">
                            Color <IoIosArrowForward />
                        </li>
                    </ul>
                </section>
                <ul className="flex flex-row w-3/4 h-screen justify-center items-start my-20 flex-wrap">
                    {actualProducts?.map((p: any) => {
                        return (
                            <li key={p.id} className="flex flex-col w-1/5 h-auto justify-center items-center mx-8 mb-10">
                                <Link href={"/store/product/" + p.id} className="w-full h-auto flex flex-col justify-center items-center ">
                                    {p.front_image ? <img src={p.front_image} alt={p.name} className="flex w-full h-96 justify-center items-center" /> :
                                        <section className="flex w-full h-96 justify-center items-center bg-gray-300">
                                            <IoIosWarning className="h-5 w-5 md:h-8 md:w-8" />
                                        </section>}
                                    <p className="flex flex-row w-full justify-start items-center text-sm mt-2">Collection: {p.tbl_collection.name}</p>
                                    <section className="flex justify-between items-center w-full h-auto mt-2 text-lg">
                                        <p className="w-auto flex justify-center items-center">{p.name}</p>
                                        <p className="w-auto text-gray-600">{p.price}$</p>
                                    </section>
                                </Link>
                            </li>
                        );
                    })}
                    {actualProducts && <Pagination actualPage={actualPage} setActualPage={setActualPage} productsLength={productsLenght} />}
                </ul>
            </div>
        </div>
    );
};


export default Store;