"use client"
import { useSearchParams } from 'next/navigation';

const Landing1 = () => {
    /*const searchParams = useSearchParams();
    const uid = searchParams.get('uid');
    console.log(uid);*/
    return (
        <div className="flex flex-col w-full h-auto bg-cover bg-no-repeat overflow-hidden">
            <img src="landingBackground.webp" className="w-full h-full" />
        </div>
    )
}

export default Landing1