'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubFooter from "../components/subFooter";
import Menu from "../components/menu";
import { useState } from "react";
import Slider from "../components/slider";




const Page = () => {
    const imgNames = ["/CollectionInside1.webp", "/CollectionFotosintesis1.webp", "/CollectionSocMad.webp"];
    const [viewMenu, setViewMenu] = useState(false);
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
        <div className="flex flex-col justify-start items-center w-screen h-auto">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
            <Slider nameImg={imgNames[actualCollection]} handleBack={handleBack} handleForward={handleForward} actualItem={actualCollection} itemsLength={imgNames.length - 1} actualComponent="collections"
            />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page