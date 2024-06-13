'use client';
import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import { useFetchLandingImg } from "@/hooks/useLanding";
import { useRouter } from 'next/navigation';

const Landing = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
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