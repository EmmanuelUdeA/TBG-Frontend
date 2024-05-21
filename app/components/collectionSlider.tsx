"use client";
import { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";

const CollectionSlider = ({ collSlider }) => {
    const [actualCollection, setActualCollection] = useState(0);
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
    console.log(collSlider)
    return (
        <div className="flex flex-row w-screen h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center cursor-pointer transition duration-300 ease-in-out">
            {collSlider.length > 0 ? <img onClick={handleCollections} className="w-full h-full" alt="collection" src={collSlider[actualCollection].pathname} /> :
                <section className="flex w-full h-full justify-center items-center bg-gray-300">
                    <IoIosWarning className="h-10 w-10 md:h-8 md:w-8" />
                </section>
            }
        </div>
    )
}

export default CollectionSlider