import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
import React from 'react'
import { useState } from 'react';


const Gallery = ({ gallery }) => {
    const [initialImg, setInitialImg] = useState(0)
    const handleForward = () => {
        if (initialImg === gallery.length - 1) {
            setInitialImg(0)
        } else {
            setInitialImg(initialImg + 1)
        }
    }
    const handleBackward = () => {
        if (initialImg === 0) {
            setInitialImg(gallery.length - 1)
        } else {
            setInitialImg(initialImg - 1)
        }
    }

    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center my-20 px-10">
            <h1 className="flex flex-row justify-center items-center font-bold text-5xl mb-20 h-10 w-full"> GALLERY. </h1>
            <ul className="flex flex-row w-full h-auto justify-center items-center">
                {gallery.map((img, index) => {
                    if (initialImg < gallery.length - 3) {
                        if (index >= initialImg && index < initialImg + 3) {
                            return (
                                <li key={index} className="scale-80">
                                    <img src={img.imgPath} alt="" className="w-full h-full" />
                                </li>
                            )
                        }
                    } else {
                        if (index >= initialImg) {
                            return (
                                <li key={index} className="scale-80">
                                    <img src={img.imgPath} alt="" className="w-full h-full" />
                                </li>
                            )
                        }
                    }
                })}
                {initialImg > gallery.length - 3 && gallery.map((img2, index2) => {
                    if (index2 < 3 - (gallery.length - initialImg)) {
                        return (
                            <li key={index2} className="scale-80">
                                <img src={img2.imgPath} alt="" className="w-full h-full" />
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