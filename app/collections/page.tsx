'use client';
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useFetchCollections } from "@/hooks/useProducts";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Page = () => {
    const [actualCollection, setActualCollection] = useState(0);
    const [collectionsLength, setCollectionsLength] = useState(0);
    const updateCollections = useStore(state => state.updateCollections);
    let collections = useStore(store => store.collections);
    const fetchCollections = useFetchCollections();
    useEffect(() => {
        if (!collections) {
            fetchCollections.mutate();
        }
    }, []);
    useEffect(() => {
        if (fetchCollections.isSuccess) {
            const data = fetchCollections.data;
            updateCollections(data);
            setCollectionsLength(data.length-1);
        }
    }, [fetchCollections.isSuccess]);
    const handleBack = () => {
        if (actualCollection > 0) {
            setActualCollection(actualCollection - 1);
        }
    }
    const handleForward = () => {
        if (actualCollection < collectionsLength) {
            setActualCollection(actualCollection + 1);
        }
    }
    return (
        <div className="w-screen flex flex-row h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            {collections && <Link href={"/collections/" + collections[actualCollection].id} className="flex w-full h-full justify-center items-center cursor-pointer flex-col flex-wrap">
                <img className="w-1/2 h-full flex flex-col justify-center items-center" alt="collection" src={collections[actualCollection].main_img} />
                <img className="w-1/2 h-1/2 flex flex-col justify-center items-center" alt="collection" src={collections[actualCollection].cover_img_1} />
                <img className="w-1/2 h-1/2 flex flex-col justify-center items-center" alt="collection" src={collections[actualCollection].cover_img_2} />
            </Link>}
            <section className="flex flex-row h-20 w-screen justify-between items-center absolute px-10 text-black">
                <IoIosArrowBack onClick={handleBack} className={actualCollection === 0 ? "opacity-40" : "cursor-pointer"} size={30} />
                {collections && <p className="cursor-pointer text-3xl font-extrabold h-full w-auto flex flex-row justify-center items-center">{collections[actualCollection].name}</p>}
                <IoIosArrowForward onClick={handleForward} className={actualCollection === collectionsLength ? "opacity-40 mr-5" : "cursor-pointer mr-5"} size={30} />
            </section>
        </div>
    )
}


export default Page