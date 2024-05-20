"use client";
import Store from "../components/store";

const Page = () => {
    const products = [
        {
            nombre: "Camisa de algodón",
            tipo: "Camisa",
            precio: 25.99,
            imagen: "/product0.webp"
        },
        {
            nombre: "Chaqueta de cuero",
            tipo: "Chaqueta",
            precio: 79.99,
            imagen: "/product6.webp"
        },
        {
            nombre: "Blusa estampada",
            tipo: "Blusa",
            precio: 29.99,
            imagen: "/product7.webp"
        },
        {
            nombre: "Pantalones cortos",
            tipo: "Pantalones",
            precio: 19.99,
            imagen: "/product8.webp"
        },
        {
            nombre: "Abrigo de invierno",
            tipo: "Abrigo",
            precio: 89.99,
            imagen: "/product9.webp"
        },
        {
            nombre: "Sudadera con capucha",
            tipo: "Sudadera",
            precio: 34.99,
            imagen: "/product11.webp"
        },
        {
            nombre: "Vestido de noche",
            tipo: "Vestido",
            precio: 59.99,
            imagen: "/product12.webp"
        },
        {
            nombre: "Chaquetón de lana",
            tipo: "Chaquetón",
            precio: 69.99,
            imagen: "/product13.webp"
        },
        {
            nombre: "Top deportivo",
            tipo: "Top",
            precio: 22.99,
            imagen: "/product14.webp"
        }
    ];
    return (
        <Store products={products} />
    )
}

export default Page;