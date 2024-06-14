"use client"
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";

const Ads = () => {
    const [index, setIndex] = useState(0);
    const handleForward = () => {
        setIndex((index + 1) % ads.length);
    };
    const handleBackward = () => {
        setIndex((index - 1 + ads.length) % ads.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleForward();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [index]);

    const ads = [
        "Free shipping from $160,000",
        "Visit our latest collection",
        "Be TBG #tripboysgang",
        "Login to get 10% off on your first purchase",
        "Buy now via our website easy to pay",
        "#TBGFAMILY #TBG"
    ];
    const showAds = useScrollDirection();
    return (
        <div className={`flex flex-row h-10 w-screen justify-center items-center bg-black text-white fixed z-30 transition-transform duration-300 ${showAds ? 'transform translate-y-0' : 'transform -translate-y-10'}`}>
            <HiArrowSmLeft className="cursor-pointer h-6 w-6 md:h-8 md:w-8" onClick={handleBackward} />
            <label className="flex flex-row h-full w-6/12 justify-center items-center font-light text-xs md:text-sm lg:text-base">{ads[index]}</label>
            <HiArrowSmRight className="cursor-pointer h-6 w-6 md:h-8 md:w-8" onClick={handleForward} />
        </div>
    );
};

export default Ads;