"use client";
import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";

const CollectionSlider = ({ collSlider }) => {
    const [actualCollection, setActualCollection] = useState(0);
    const [imgClass] = useState(`bg-[url('/Lumen/Slider/Slider${actualCollection + 1}-blur.jpg')] bg-cover bg-center w-full h-screen blur-load`);
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleCollections()
        }, 3000);
        return () => clearInterval(intervalId);
    }, [actualCollection]);
    const handleCollections = () => {
        if (actualCollection === collSlider.length - 1) {
            setActualCollection(0)
        } else {
            setActualCollection(actualCollection + 1)
        }
    }
    return (
        <div className="flex flex-row w-screen h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center cursor-pointer transition duration-300 ease-in-out">
            <div onClick={handleCollections} className="bg-cover bg-center w-full h-screen blur-load" style={{ backgroundImage: `url('/Lumen/Slider/Slider${actualCollection + 1}-blur.jpg')` }}>
                {collSlider.length>0 && <img src={collSlider[actualCollection].pathname} alt="" loading="lazy" className="w-full h-full" />}
            </div>
        </div>
    )
}

export default CollectionSlider