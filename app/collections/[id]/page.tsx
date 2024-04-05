'use client';
import SliderCollections from "@/app/components/sliderCollections";
import CollectionDescription from "@/app/components/collectionDescription";
import CollectionProductList from "@/app/components/collectionProductList";
import Gallery from "@/app/components/gallery";
import { usePathname } from "next/navigation";

const Page = () => {
    const path = usePathname();
    const collName = path.split("/")[2];
    const products = {
        inside: [
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
        ],
        lumen: [
            {
                name: "White Tshirt",
                price: "70.000$",
                imgPath: "/CollectionLumen/LumenTshirtWhiteColor.webp",
                imgPathBackground: "/CollectionLumen/LumenTshirtWhiteColorBackground.webp",
            },
            {
                name: "Black Tshirt",
                price: "70.000$",
                imgPath: "/CollectionLumen/LumenTshirtBlackColor.webp",
                imgPathBackground: "/CollectionLumen/LumenTshirtBlackColorBackground.webp",
            },
            {
                name: "Cream Hoodie",
                price: "140.000$",
                imgPath: "/CollectionLumen/LumenHoodieCreamColor.webp",
                imgPathBackground: "/CollectionLumen/LumenHoodieCreamColorBackground.webp",
            }
        ],
    }
    return (
        <div className="flex flex-col w-screen h-auto justify-start items-center">
            <SliderCollections collName={collName} />
            <CollectionDescription collName={collName} />
            <CollectionProductList products={products} collName={collName} />
            <Gallery collName={collName} />
        </div>
    )
}

export default Page;