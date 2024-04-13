'use client';
import Slider from "../components/slider";
import { useState } from "react";
import { useStore } from "../../store/useStore";

interface Product {
    id?: number;
    name: string;
    price: number;
    imgPath?: string;
    imgPathBackground?: string;
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
    const [actualCollection, setActualCollection] = useState(0);
    const [collections, setCollections] = useState(store.collections);
    const handleBack = () => {
        if (actualCollection !== 0) {
            setActualCollection(actualCollection - 1);
        }
    }
    const handleForward = () => {
        if (actualCollection !== collections.length - 1) {
            setActualCollection(actualCollection + 1);
        }
    }
    return (
        <Slider nameColl={collections[actualCollection]?.name} imgContClass="bg-blue-500" nameImg={collections[actualCollection]?.collectionImgMain} handleBack={handleBack} handleForward={handleForward} actualItem={actualCollection} itemsLength={collections.length} actualComponent="collections" imgWidth={680} imgHeight={600} />
    )
}


export default Page