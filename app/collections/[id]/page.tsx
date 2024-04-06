'use client';
import SliderCollections from "@/app/components/sliderCollections";
import CollectionDescription from "@/app/components/collectionDescription";
import CollectionProductList from "@/app/components/collectionProductList";
import Gallery from "@/app/components/gallery";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useStore";

const Page = () => {
    const path = usePathname();
    const collName = path.split("/")[2];
    const products = useStore((state) => state.products);
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