'use client';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const Ads = () => {
    const [index, setIndex] = useState(0);
    const handleForward = () => {
        if (index === ads.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }
    const handleBackward = () => {
        if (index === 0) {
            setIndex(ads.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleForward()
        }, 5000);
        return () => clearInterval(intervalId);
    }, [index]);

    const ads = ["Free shipping from $100,000",
        "Visit our latest collection",
        "Up to 50% off on selected items",
        "Subscribe to our newsletter for exclusive offers",
        "Buy now and pay later with our financing options",
        "New products added to our store every week"
    ];

    return (
        <div className="flex flex-row h-10 w-screen justify-center items-center bg-black text-white">
            <HiArrowSmLeft className="cursor-pointer h-6 w-6" onClick={handleBackward} />

            <label className="flex flex-row h-full w-1/3 justify-center items-center font-light">{ads[index]}</label>

            <HiArrowSmRight className="cursor-pointer h-6 w-6" onClick={handleForward} />
        </div>
    );
};

export default Ads