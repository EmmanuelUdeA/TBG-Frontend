'use client';
import CollectionSlider from "@/app/components/collectionSlider";
import CollectionDescription from "@/app/components/collectionDescription";
import CollectionProductList from "@/app/components/collectionProductList";
import CollectionGallery from "@/app/components/collectionGallery";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useFetchCollections } from "@/hooks/useProducts";

const Page = () => {
    const path = usePathname();
    const collections = useStore(store => store.collections);
    const getCollection = useStore(store => store.getCollection);
    const updateCollections = useStore(state => state.updateCollections);
    const fetchCollections = useFetchCollections();
    const [collection, setCollection] = useState(null);
    useEffect(() => {
        if (!collections) {
            fetchCollections.mutate();
        } else {
            const id = parseInt(path.split("/")[2]);
            const result = getCollection(id);
            console.log(result)
            setCollection(result);
        }
    }, []);
    useEffect(() => {
        if (fetchCollections.isSuccess) {
            const data = fetchCollections.data;
            updateCollections(data);
            const id = parseInt(path.split("/")[2]);
            const result = getCollection(id);
            setCollection(result);
        }
    }, [fetchCollections.isSuccess]);
    return (
        <div className="flex flex-col w-screen h-auto justify-center items-center">
            {collection && <CollectionSlider collSlider={collection.tbl_collection_slider} />}
            {collection && <CollectionDescription collName={collection.name} collDescription={collection.description} />}
            {collection && <CollectionProductList products={collection.tbl_product} />}
            {collection && <CollectionGallery gallery={collection.tbl_gallery} />}
        </div>
    )
}

export default Page;