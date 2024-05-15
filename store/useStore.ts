import { create } from "zustand";
import Collections from "../collections.json";

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

interface User {
    customer_group?: number;
    document?: string;
    email: number;
    id: 2;
    lastname?: string;
    name?: string;
    uid: string;
    token: string;
}

type State = {
    collections: Collection[];
    user: User,
    landingImg: LandingImg
};

type Actions = {
    updateUser: (user: User) => void;
    removeUser: () => void;
    updateLandingImg: (newImg: LandingImg) => void;
};

type img = {
    id: number;
    imgUrl: string
}

type LandingImg = img[]


export const useStore = create<State & Actions>((set) => ({
    collections: Collections,
    user: null,
    landingImg: null,
    updateUser: (user) =>
        set(() => ({
            user: user
        })),
    removeUser: () =>
        set(() => ({
            user: null
        })),
    updateLandingImg: (newImg: LandingImg) =>
        set(() => ({
            landingImg: newImg
        }))
}))

