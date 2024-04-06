import { create } from "zustand";

type Product = {
    name: string;
    price: string;
    imgPath: string;
    imgPathBackground: string;
}

type Products = {
    inside: Product[];
    lumen: Product[];
}

type State = {
    products: Products;
}

/*type Actions = {
    getProducts: (products: Products) => void;
}*/

export const useStore = create<State /* Actions*/>((set) => ({
    products: {
        inside: [
            {
                name: "Black Hoodie",
                price: "140.000$",
                imgPath: "/CollectionInside/InsideHoodieBlackColor.webp",
                imgPathBackground: "/CollectionInside/InsideHoodieBlackColorBackground.webp",
            },
            {
                name: "Arena Hoodie",
                price: "140.000$",
                imgPath: "/CollectionInside/InsideHoodieArenaColor.webp",
                imgPathBackground: "/CollectionInside/InsideHoodieArenaColorBackground.webp",
            }
        ],
        lumen: [
            {
                name: "White Tshirt",
                price: "70.000$",
                imgPath: "/CollectionLumen/LumenTshirtWhiteColor.webp",
                imgPathBackground: "/CollectionLumen/LumenTshirtWhiteColorBackground.webp",
            },
            {
                name: "Black Tshirt",
                price: "70.000$",
                imgPath: "/CollectionLumen/LumenTshirtBlackColor.webp",
                imgPathBackground: "/CollectionLumen/LumenTshirtBlackColorBackground.webp",
            },
            {
                name: "Cream Hoodie",
                price: "140.000$",
                imgPath: "/CollectionLumen/LumenHoodieCreamColor.webp",
                imgPathBackground: "/CollectionLumen/LumenHoodieCreamColorBackground.webp",
            }
        ],
    }
}))

