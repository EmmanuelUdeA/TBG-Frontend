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
    useEffect(() => {
        if (fetchLandingImg.isSuccess) {
            const data = fetchLandingImg.data;
            updateLandingImg(data);
        }
    }, [fetchLandingImg.isSuccess])
    return (
        <div className="justify-start overflow-x-hidden flex flex-row items-center w-screen h-auto flex-wrap">
            <div className="bg-[url('/Landing/Landing1-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing1} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing2-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing2} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing3-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing3} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing4-blur.jpg')] bg-cover bg-center w-1/2 h-screen blur-load">{landingImg && <img src={landingImg.landing4} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing5-blur.jpg')] bg-cover bg-center w-1/2 h-screen blur-load">{landingImg && <img src={landingImg.landing5} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing6-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing6} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing7-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing7} alt="" loading="lazy" className="w-full h-full block" />}</div>
            <div className="bg-[url('/Landing/Landing8-blur.jpg')] bg-cover bg-center w-full h-screen blur-load">{landingImg && <img src={landingImg.landing8} alt="" loading="lazy" className="w-full h-full block" />}</div>
        </div>
    )
}

export default Landing;