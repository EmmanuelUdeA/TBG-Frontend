'use client'
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import SubFooter from "@/app/components/subFooter";
import Footer from "@/app/components/footer";
import SliderCollections from "@/app/components/sliderCollections";
import CollectionDescription from "@/app/components/collectionDescription";
import Image from "next/image";
import Gallery from "@/app/components/gallery";
import Menu from "../../components/menu";

const Page = () => {
    const insideProducts = [
        {
            name: "Black Hoodie",
            price: "140.000$",
            imgPath: "/CollectionInside/InsideHoodieBlackColor.webp",
            imgPathBackground: "/CollectionInside/InsideHoodieBlackColorBackground.webp",
        },
        {
            name: "Arena Hoodie",
            price: "140.000$",
            imgPath: "/CollectionInside/InsideHoodieArenaColor.webp",
            imgPathBackground: "/CollectionInside/InsideHoodieArenaColorBackground.webp",
        }
    ]
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <div className="flex flex-col w-screen h-auto justify-start items-center">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
            <SliderCollections />
            <CollectionDescription />
            <ul className="flex flex-row flex-wrap w-full h-auto justify-center items-start my-10 ">
                {insideProducts.map((product, index) => {
                    return (
                        <li style={{ "--image-url": `url(${product.imgPathBackground})` }}
                            className="flex flex-col w-1/5 h-96 justify-center items-center m-10 bg-cover bg-no-repeat drop-shadow-xl bg-[image:var(--image-url)] cursor-pointer" key={index}>
                            <img src={product.imgPath} alt={product.name} className="w-full h-96 hover:opacity-0 hover:transition-all duration-200" />
                            <h1 className="flex flex-row justify-center items-center w-full py-1 bg-black text-white text-sm font-bold">{product.name}</h1>
                            <h3 className="flex flex-row justify-center items-center w-full py-1 bg-black text-white text-sm">{product.price}</h3>
                        </li>
                    )
                })}
            </ul>
            <Gallery />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page;