import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const Slider = ({ nameImg, handleBack, handleForward, actualItem, itemsLength }) => {
    return (
        <div className="flex flex-row w-screen h-auto bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            <IoIosArrowBack onClick={handleBack} className={actualItem === 0 ? "opacity-40" : "cursor-pointer"} size={30} />
            <img src={nameImg} width={680} />
            <IoIosArrowForward onClick={handleForward} className={actualItem === itemsLength ? "opacity-40" : "cursor-pointer"} size={30} />
        </div>
    )
}

export default Slider