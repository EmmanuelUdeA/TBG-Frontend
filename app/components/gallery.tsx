import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";

import React from 'react'
import { useState } from 'react'


const Gallery = () => {
    const imgPath = ["/CollectionInside/InsideCollectionGallery1.webp", "/CollectionInside/InsideCollectionGallery2.webp", "/CollectionInside/InsideCollectionGallery3.webp", "/CollectionInside/InsideCollectionGallery4.webp", "/CollectionInside/InsideCollectionGallery5.webp", "/CollectionInside/InsideCollectionGallery6.webp", "/CollectionInside/InsideCollectionGallery7.webp"]
    const [initialImg, setInitialImg] = useState(0)
    const handleForward = () => {
        if (initialImg === imgPath.length - 1) {
            setInitialImg(0)
        } else {
            setInitialImg(initialImg + 1)
        }
    }
    const handleBackward = () => {
        if (initialImg === 0) {
            setInitialImg(imgPath.length - 1)
        } else {
            setInitialImg(initialImg - 1)
        }
    }
    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center my-20 px-10">
            <h1 className="flex flex-row justify-center items-center font-bold text-6xl mb-20 h-10 w-full"> GALLERY. </h1>
            <ul className="flex flex-row w-full h-auto justify-center items-center">
                {imgPath.map((img, index) => {
                    if (initialImg < imgPath.length - 3) {
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
                {initialImg > imgPath.length - 3 && imgPath.map((img2, index2) => {
                    if (index2 < 3 - (imgPath.length - initialImg)) {
                        return (
                            <li key={index2} className="scale-80">
                                <img src={img2} alt="" className="w-full h-full" />
                            </li>
                        )
                    }
                })}
                <li className="flex flex-col h-full w-screen justify-center items-end absolute pr-12">
                    <BsFillArrowLeftSquareFill size={50} onClick={handleBackward} className="mb-1 cursor-pointer hover:scale-105 hover:bg-white hover:rounded-2xl" />
                    <BsFillArrowRightSquareFill size={50} onClick={handleForward} className="cursor-pointer hover:scale-105 hover:bg-white hover:rounded-2xl" />
                </li>
            </ul>
        </div>


    )
}

export default Gallery