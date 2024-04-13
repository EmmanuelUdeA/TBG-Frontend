
import Image from "next/image";
import { useEffect, useState } from "react";

const SliderCollections = ({ collSlider }) => {
    const [actualCollection, setActualCollection] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Coloca aquí la función que deseas ejecutar cada 3 segundos
            handleCollections()
        }, 3000); // 3000 milisegundos = 3 segundos

        // Devolvemos una función de limpieza para detener el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, [actualCollection]); // Asegúrate de pasar un arreglo vacío como segundo argumento para que el efecto se ejecute solo una vez

    const handleCollections = () => {
        if (actualCollection === collSlider.length - 1) {
            setActualCollection(0)
        } else {
            setActualCollection(actualCollection + 1)
        }
    }
    console.log(collSlider)
    return (
        <div className="flex flex-row w-screen h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            <div className="flex w-full h-full justify-center items-center cursor-pointer transition duration-300 ease-in-out transform">
                <Image onClick={handleCollections} className="w-screen h-full" alt="collection" src={collSlider[actualCollection].imgPath} fill={true} />
            </div>
        </div>
    )
}

export default SliderCollections