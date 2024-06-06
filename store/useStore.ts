import { create } from "zustand";
import { Product, Collection, Category } from "@/types/product.type";
import { User } from "@/types/auth.type";
import { LandingImg } from "@/types/landing.type";

type State = {
    collections: Collection[];
    products: Product[];
    categories: Category[];
    user: User,
    landingImg: LandingImg,
    cart: Product[]
};

type Actions = {
    updateCollections: (collections: Collection[]) => void;
    updateProducts: (products: Product[]) => void;
    updateCategories: (categories: Category[]) => void;
    updateUser: (user: User) => void;
    removeUser: () => void;
    updateLandingImg: (newImg: LandingImg) => void;
    updateCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    addProductQuantity: (productId: number) => void;
    removeProductQuantity: (productId: number) => void;
    getCollection: (id: number) => Collection;
    getProduct: (id: number) => Product;
};


export const useStore = create<State & Actions>((set, get) => ({
    collections: null,
    products: null,
    categories: null,
    user: null,
    landingImg: null,
    cart: null,
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
    updateCart: (product: Product) =>
        set((state) => ({
            cart: state.cart ? [...state.cart, product] : [product]
        })),
    addProductQuantity: (productId: number) =>
        set((state) => {
            const updatedCart = state.cart.map(product => {
                if (product.id === productId) {
                    if (product.quantity >= 5) return product;
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    };
                }
                return product;
            });
            return ({
                cart: updatedCart
            })
        }),
    removeProductQuantity: (productId: number) =>
        set((state) => {
            const updatedCart = state.cart
                .map(product => {
                    if (product.id === productId) {
                        if (product.quantity > 1) {
                            return {
                                ...product,
                                quantity: product.quantity - 1
                            };
                        } else {
                            return null;
                        }
                    }
                    return product;
                })
                .filter(product => product !== null); 
            return { cart: updatedCart.length === 0 ? null : updatedCart };
        }),
    removeFromCart: (productId: number) =>
        set((state) => ({
            cart: state.cart ? state.cart.filter(product => product.id !== productId) : null
        })),
    getCollection: (id: number) => {
        const state = get();
        if (state.collections && Array.isArray(state.collections)) {
            return state.collections.find((collection) => collection.id === id);
        }
        return null;
    },
    getProduct: (id: number) => {
        const state = get();
        if (state.products && Array.isArray(state.products)) {
            return state.products.find((product) => product.id === id);
        }
        return null;
    }
}))

