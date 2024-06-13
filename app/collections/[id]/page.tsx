'use client';
import CollectionSlider from "@/app/components/collectionSlider";
import CollectionDescription from "@/app/components/collectionDescription";
import CollectionProductList from "@/app/components/collectionProductList";
import CollectionGallery from "@/app/components/collectionGallery";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";
import { useFetchCollections } from "@/hooks/useProducts";
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    const path = usePathname();
    const collections = useStore(store => store.collections);
    const getCollection = useStore(store => store.getCollection);
    const updateCollections = useStore(state => state.updateCollections);
    const fetchCollections = useFetchCollections();
    const updateUser = useStore(state => state.updateUser);
    const [collection, setCollection] = useState(null);
    useEffect(() => {
        if (user) {
            router.push(`?uid=${user.uid}`);
        } else if (localStorage.getItem("uid") !== null) {
            router.push(`?uid=${localStorage.getItem("uid")}`);
            let user = JSON.parse(localStorage.getItem("user"));
            let token = localStorage.getItem("accessToken");
            user["token"] = token;
            updateUser(user);
        }
    }, [user]);
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
            {collection && <CollectionSlider collSlider={collection.tbl_collection_slider} name={collection.name}/>}
            {collection && <CollectionDescription collName={collection.name} collDescription={collection.description} />}
            {collection && <CollectionProductList products={collection.tbl_product} />}
            {collection && <CollectionGallery gallery={collection.tbl_gallery} name={collection.name} />}
        </div>
    )
}

export default Page;