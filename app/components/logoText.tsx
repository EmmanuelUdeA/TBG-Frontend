"use client"
import Image from "next/image";

export default function LogoText() {
    return (
        <Image
            src="/TBG.svg"
            alt="TBG Logo"
            width={200}
            height={50}
            priority
        />)
}