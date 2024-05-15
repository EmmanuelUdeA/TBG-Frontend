'use client';
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useFetchLandingImg } from "@/hooks/useLanding";


const Landing = () => {
    const updateLandingImg = useStore(state => state.updateLandingImg);
    const fetchLandingImg = useFetchLandingImg();
    let landingImg = useStore(state => state.landingImg);
    useEffect(() => {
        if (!landingImg) {
            fetchLandingImg.mutate();
        }
    }, []);
    if (fetchLandingImg.isSuccess) {
        const data = fetchLandingImg.data;
        updateLandingImg(data);
    }
    return (
        <div className="justify-start overflow-x-hidden flex flex-row items-center w-screen h-auto flex-wrap">
            <div className="bg-[url('/LandingImages/landing1blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[0].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing7blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[1].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing2blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[2].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing4blur.jpg')] bg-cover bg-center w-1/2 h-screen blur-load">{landingImg && <img src={landingImg[4].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing5blur.jpg')] bg-cover bg-center w-1/2 h-screen blur-load">{landingImg && <img src={landingImg[3].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing3blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[5].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing6blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[6].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/LandingImages/landing8blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg[7].imgUrl} alt="" loading="lazy" className="w-full h-full block" />}</div>
        </div>
    )
}

export default Landing