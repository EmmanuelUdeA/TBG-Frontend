'use client';
import Slider from "../components/slider";
import { useState } from "react";

const Page = () => {
    const collectionsNames = ["lumen", "inside", "society-madness", "fotosintesis"];
    const imgNames = ["/CollectionLumen.webp", "/CollectionInside1.webp", "/CollectionSocMad.webp", "/CollectionFotosintesis1.webp"];
    const [actualCollection, setActualCollection] = useState(0);
    const handleBack = () => {
        if (actualCollection !== 0) {
            setActualCollection(actualCollection - 1)
        }
    }
    const handleForward = () => {
        if (actualCollection !== imgNames.length - 1) {
            setActualCollection(actualCollection + 1)
        }
    }
    return (
        <Slider imgContClass="bg-blue-500" nameImg={imgNames[actualCollection]} handleBack={handleBack} handleForward={handleForward} actualItem={collectionsNames[actualCollection]} itemsLength={imgNames.length - 1} actualComponent="collections" imgWidth={680} imgHeight={600} />
    )
}

export default Page