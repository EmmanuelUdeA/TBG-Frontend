'use client';
import SliderCollections from "@/app/components/sliderCollections";
import CollectionDescription from "@/app/components/collectionDescription";
import CollectionProductList from "@/app/components/collectionProductList";
import Gallery from "@/app/components/gallery";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

interface Product {
    id?: number;
    name: string;
    price: number;
    imgPath?: string;
    imgPathBackground?: string;
    imgPathFront?: string;
    imgPathBack?: string;
}

interface Gallery {
    id: number;
    imgPath: string;
}

interface Collection {
    id: number;
    name: string;
    description: string;
    collectionImgMain: string;
    products: Product[];
    gallery: Gallery[];
}

const Page = () => {
    const store = useStore();
    const path = usePathname();
    const collName = path.split("/")[2];
    const [collection, setCollection] = useState(store.collections.find((coll: Collection) => coll.name === collName));
    return (
        <div className="flex flex-col w-screen h-auto justify-start items-center">
            <SliderCollections collSlider={collection?.sliderMain} />
            <CollectionDescription collName={collection.name} collDescription={collection.description} />
            <CollectionProductList products={collection.products} />
            <Gallery gallery={collection.gallery} />
        </div>
    )
}

export default Page;