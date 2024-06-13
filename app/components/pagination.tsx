"use client";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";


export default function Pagination({ actualPage, setActualPage, productsLength, productsPerPage = 8 }) {
    const handleNextPage = () => {
        let pivot = actualPage + 1;
        if (productsPerPage * pivot < productsLength) {
            setActualPage(actualPage + 1)
        }
    }
    const handleBackPage = () => {
        if (actualPage > 0) {
            setActualPage(actualPage - 1)
        }
    }
    return (
        <section className="flex flex-row justify-center items-center w-full h-10 mt-12">
            <IoMdArrowDropleftCircle className={actualPage === 0 ? "w-8 h-8 hover:w-9 opacity-40" : "w-8 h-8 cursor-pointer hover:h-9 hover:w-9"} onClick={handleBackPage} />
            <label className="flex flex-col font-bold h-full w-auto mx-5 text-xl text-black justify-center items-center">{actualPage + 1}</label>
            <IoMdArrowDroprightCircle className={productsPerPage * (actualPage + 1) < productsLength ? "w-8 h-8 cursor-pointer hover:h-9 hover:w-9" : "w-8 h-8 hover:w-9 opacity-40"} onClick={handleNextPage} />
        </section>
    )
}