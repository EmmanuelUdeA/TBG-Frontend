import { create } from "zustand";
import Collections from "../collections.json";

console.log(Collections)

interface Product {
    id?: number;
    name: string;
    price: number;
    imgPath?: string;
    imgPathBackground?: string;
}

interface Gallery {
    id: number;
    imgPath: string;
}

interface Slider {
    id: number;
    imgPath: string;
}

interface Collection {
    id: number;
    name: string;
    description: string;
    collectionImgMain: string;
    sliderMain: Slider[];
    products: Product[];
    gallery: Gallery[];
}

type State = {
    collections: Collection[];
};

type Actions = {
};


export const useStore = create<State & Actions>((set) => ({
    collections: Collections,
}))

