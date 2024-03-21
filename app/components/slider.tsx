import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";


const Slider = ({ nameImg, handleBack, handleForward, actualItem, itemsLength, actualComponent }) => {
    return (
        <div className="flex flex-row w-screen h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            <IoIosArrowBack onClick={handleBack} className={actualItem === 0 ? "opacity-40" : "cursor-pointer"} size={30} />
            <Link href={
                "/" + actualComponent + "/" + actualItem
            } className="flex w-2/5 h-full justify-center items-center cursor-pointer drop-shadow-xl transition duration-300 ease-in-out transform hover:scale-95  ">
                <div className="bg-purple-600">
                    <Image className="hover:opacity-80  " alt="collection" src={nameImg} width={680} height={600} />
                </div>
            </Link>
            <IoIosArrowForward onClick={handleForward} className={actualItem === itemsLength ? "opacity-40" : "cursor-pointer"} size={30} />
        </div>
    )
}

export default Slider