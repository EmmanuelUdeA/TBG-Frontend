'use client'
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import SubFooter from "@/app/components/subFooter";
import Footer from "@/app/components/footer";
import SliderCollections from "@/app/components/sliderCollections";
import CollectionDescription from "@/app/components/collectionDescription";
import Image from "next/image";
const Page = () => {
    const insideImgNames = ["/CollectionInside/InsideSlider1.webp", "/CollectionInside/InsideSlider2.webp", "/CollectionInside/InsideSlider3.webp", "/CollectionInside/InsideSlider4.webp", "/CollectionInside/InsideSlider5.webp"];
    const insideProducts = [
        {
            name: "Black Hoodie",
            price: "140000$",
            imgPath: "/CollectionInside/InsideHoodieBlackColor.webp",
        },
        {
            name: "Arena Hoodie",
            price: "140000$",
            imgPath: "/CollectionInside/InsideHoodieArenaColor.webp",
        }
    ]
    const [viewMenu, setViewMenu] = useState(false);
    const [actualCollection, setActualCollection] = useState(0);
    const handleBack = () => {
        if (actualCollection !== 0) {
            setActualCollection(actualCollection - 1)
        }
    }
    const handleForward = () => {
        if (actualCollection !== insideImgNames.length - 1) {
            setActualCollection(actualCollection + 1)
        }
    }
    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            <SliderCollections />
            <CollectionDescription />
            <ul className="flex flex-row flex-wrap w-full h-auto justify-center items-start my-10 ">
                {insideProducts.map((product, index) => {
                    return (
                        <li className="flex flex-col w-1/5 h-96 justify-center items-center m-10 bg-cover bg-no-repea" key={index}>
                            <img src={product.imgPath} alt={product.name} className="w-full h-96" />
                            <h1>{product.name}</h1>
                            <h3>{product.price}</h3>
                            <button>View Item</button>
                        </li>
                    )
                })}
            </ul>
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page;