'use client';
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useFetchCollections } from "@/hooks/useProducts";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/navigation';
//import { useSearchParams } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    let collections = useStore(store => store.collections);
    const [actualCollection, setActualCollection] = useState(0);
    const [collectionsLength, setCollectionsLength] = useState(collections ? collections.length-1 : 0);
    const updateCollections = useStore(state => state.updateCollections);
    const fetchCollections = useFetchCollections();
    const updateUser = useStore(state => state.updateUser);
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
        <div className="w-screen flex flex-row h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center mt-28">
            {collections && <Link href={"/collections/" + collections[actualCollection].id /*+ (uid ? '?uid=' + uid : '')*/} className="flex w-full h-full justify-center items-center cursor-pointer flex-col flex-wrap">
                <div className="w-1/2 h-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/Lumen/Main/Main1-blur.jpg')` }}>
                    {<img className="w-full h-full flex flex-col justify-center items-center" alt="collection" src={collections[actualCollection].main_img} />}
                </div>
                <div className="w-1/2 h-1/2 flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/Lumen/Main/Main2-blur.jpg')` }}>
                    {<img className="w-full h-full" alt="collection" src={collections[actualCollection].cover_img_1} />}
                </div>
                <div className="w-1/2 h-1/2 flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/Lumen/Main/Main3-blur.jpg')` }}>
                    {<img className="w-full h-full" alt="collection" src={collections[actualCollection].cover_img_2} />}
                </div>
            </Link>}
            <section className="flex flex-row h-20 w-screen justify-between items-center absolute px-10 text-white bg-black">
                <IoIosArrowBack onClick={handleBack} className={actualCollection === 0 ? "opacity-40" : "cursor-pointer"} size={30} />
                {collections && <Link href={"/collections/" + collections[actualCollection].id /*+ (uid ? '?uid=' + uid : '')*/} className="cursor-pointer text-3xl font-extrabold h-full w-auto flex flex-row justify-center items-center">{collections[actualCollection].name}</Link>}
                <IoIosArrowForward onClick={handleForward} className={actualCollection === collectionsLength ? "opacity-40 mr-5" : "cursor-pointer mr-5"} size={30} />
            </section>
        </div>
    )
}


export default Page