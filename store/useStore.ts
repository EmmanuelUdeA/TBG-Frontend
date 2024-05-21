import { create } from "zustand";
import { Product, Collection, Category } from "@/types/product.type";
import { User } from "@/types/auth.type";
import { LandingImg } from "@/types/landing.type";

type State = {
    collections: Collection[];
    products: Product[];
    categories: Category[];
    user: User,
    landingImg: LandingImg
};

type Actions = {
    updateCollections: (collections: Collection[]) => void;
    updateProducts: (products: Product[]) => void;
    updateCategories: (categories: Category[]) => void;
    updateUser: (user: User) => void;
    removeUser: () => void;
    updateLandingImg: (newImg: LandingImg) => void;
    getCollection: (id: number) => Collection;
};


export const useStore = create<State & Actions>((set, get) => ({
    collections: null,
    products: null,
    categories: null,
    user: null,
    landingImg: null,
    updateCollections: (collections: Collection[]) =>
        set(() => ({
            collections: collections
        })),
    updateProducts: (products: Product[]) =>
        set(() => ({
            products: products
        })),
    updateCategories: (categories: Category[]) =>
        set(() => ({
            categories: categories
        })),
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
        })),
    getCollection: (id: number) => {
        const state = get();
        if (state.collections && Array.isArray(state.collections)) {
            return state.collections.find((collection) => collection.id === id);
        }
        return null;
    }
}))

