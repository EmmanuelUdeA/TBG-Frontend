import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";


const Slider = ({ nameImg, handleBack, handleForward, actualItem, itemsLength, actualComponent, imgContClass, imgWidth, imgHeight }) => {
    return (
        <div className="w-screen flex flex-row h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            <IoIosArrowBack onClick={handleBack} className={actualItem === 0 ? "opacity-40" : "cursor-pointer"} size={30} />
            <Link href={
                "/" + actualComponent + "/" + actualItem
            } className="flex max-w-full max-h-screen justify-center items-center cursor-pointer drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95  ">
                <div className={imgContClass}/**/>
                    <Image className="hover:opacity-80 " alt="collection" src={nameImg} width={imgWidth} height={imgHeight} />
                </div>
            </Link>
            <IoIosArrowForward onClick={handleForward} className={actualItem === itemsLength ? "opacity-40" : "cursor-pointer"} size={30} />
        </div>
    )
}

export default Slider