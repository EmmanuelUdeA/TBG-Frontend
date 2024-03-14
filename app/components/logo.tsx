"use client"
import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="TBG Logo"
            width={40}
            height={40}
            priority
        />)
}