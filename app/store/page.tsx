"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SubFooter from "../components/subFooter";
import Menu from "../components/menu";
import { useState } from "react";
import Store from "../components/productList";

const Page = () => {
    const [viewMenu, setViewMenu] = useState(false);
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
        <div className="flex flex-col justify-start items-center w-screen h-auto">
            <Navbar setViewMenu={setViewMenu} viewMenu={viewMenu} />
            {viewMenu && <Menu setViewMenu={setViewMenu} viewMenu={viewMenu} />}
            <Store products={products} />
            <SubFooter />
            <Footer />
        </div>
    )
}

export default Page;