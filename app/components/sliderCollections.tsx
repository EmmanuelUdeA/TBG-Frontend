
import Image from "next/image";
import { useEffect, useState } from "react";


const SliderCollections = ({ }) => {
    const imgNames = ["/CollectionInside/InsideSlider1.webp", "/CollectionInside/InsideSlider2.webp", "/CollectionInside/InsideSlider3.webp", "/CollectionInside/InsideSlider4.webp", "/CollectionInside/InsideSlider5.webp"];
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
        if (actualCollection === imgNames.length - 1) {
            setActualCollection(0)
        } else {
            setActualCollection(actualCollection + 1)
        }
    }
    return (
        <div className="flex flex-row w-screen h-screen bg-cover bg-no-repeat overflow-hidden justify-center items-center">
            <div className="flex w-full h-full justify-center items-center cursor-pointer transition duration-300 ease-in-out transform">
                <Image onClick={handleCollections} className="hover:opacity-80 " alt="collection" src={imgNames[actualCollection]} fill={true} />
            </div>
        </div>
    )
}

export default SliderCollections