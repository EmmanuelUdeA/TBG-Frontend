import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import React from 'react'
import { useState } from 'react'
import useScreenSize from "@/hooks/useScreenSize";


const Gallery = ({ collName }) => {
    const imgPath = {
        inside: ["/CollectionInside/InsideCollectionGallery1.webp", "/CollectionInside/InsideCollectionGallery2.webp", "/CollectionInside/InsideCollectionGallery3.webp", "/CollectionInside/InsideCollectionGallery4.webp", "/CollectionInside/InsideCollectionGallery5.webp", "/CollectionInside/InsideCollectionGallery6.webp", "/CollectionInside/InsideCollectionGallery7.webp"],
        lumen: ["/CollectionLumen/LumenCollectionGallery1.webp", "/CollectionLumen/LumenCollectionGallery2.webp", "/CollectionLumen/LumenCollectionGallery3.webp", "/CollectionLumen/LumenCollectionGallery4.webp", "/CollectionLumen/LumenCollectionGallery5.webp", "/CollectionLumen/LumenCollectionGallery6.webp", "/CollectionLumen/LumenCollectionGallery7.webp"],

    }
    const [initialImg, setInitialImg] = useState(0)
    const handleForward = () => {
        if (initialImg === imgPath[collName].length - 1) {
            setInitialImg(0)
        } else {
            setInitialImg(initialImg + 1)
        }
    }
    const handleBackward = () => {
        if (initialImg === 0) {
            setInitialImg(imgPath[collName].length - 1)
        } else {
            setInitialImg(initialImg - 1)
        }
    }

    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center my-20 px-10">
            <h1 className="flex flex-row justify-center items-center font-bold text-5xl mb-20 h-10 w-full"> GALLERY. </h1>
            <ul className="flex flex-row w-full h-auto justify-center items-center">
                {imgPath[collName].map((img, index) => {
                    if (initialImg < imgPath[collName].length - 3) {
                        if (index >= initialImg && index < initialImg + 3) {
                            return (
                                <li key={index} className="scale-80">
                                    <img src={img} alt="" className="w-full h-full" />
                                </li>
                            )
                        }
                    } else {
                        if (index >= initialImg) {
                            return (
                                <li key={index} className="scale-80">
                                    <img src={img} alt="" className="w-full h-full" />
                                </li>
                            )
                        }
                    }
                })}
                {initialImg > imgPath[collName].length - 3 && imgPath[collName].map((img2, index2) => {
                    if (index2 < 3 - (imgPath[collName].length - initialImg)) {
                        return (
                            <li key={index2} className="scale-80">
                                <img src={img2} alt="" className="w-full h-full" />
                            </li>
                        )
                    }
                })}
                <li className="flex flex-col h-full w-screen justify-center items-end absolute pr-12">
                    <BsFillArrowLeftSquareFill size={50} onClick={handleBackward} className="mb-1 cursor-pointer hover:scale-105 hover:bg-white hover:rounded-lg" />
                    <BsFillArrowRightSquareFill size={50} onClick={handleForward} className="cursor-pointer hover:scale-105 hover:bg-white hover:rounded-lg" />
                </li>
            </ul>
        </div>


    )
}

export default Gallery