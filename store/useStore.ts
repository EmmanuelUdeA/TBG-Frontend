import { create } from "zustand";
import { Product, Collection, Category, Color } from "@/types/product.type";
import { User } from "@/types/auth.type";
import { LandingImg } from "@/types/landing.type";
import { toast } from "sonner";

type State = {
    collections: Collection[];
    products: Product[];
    filteredProducts: Product[];
    categories: Category[];
    colors: Color[];
    user: User,
    landingImg: LandingImg,
    filters: {
        categories: number[],
        collections: number[],
        colors: number[]
    },
    cart: Product[]
};

type Actions = {
    updateCollections: (collections: Collection[]) => void;
    updateProducts: (products: Product[]) => void;
    updateColors: (colors: Color[]) => void;
    updateCategories: (categories: Category[]) => void;
    updateUser: (user: User) => void;
    removeUser: () => void;
    updateLandingImg: (newImg: LandingImg) => void;
    updateCart: (product: Product) => void;
    removeFromCart: (productId: number, productSize: string) => void;
    addProductQuantity: (productId: number, productSize: string) => void;
    removeProductQuantity: (productId: number, productSize: string) => void;
    getCollection: (id: number) => Collection;
    getProduct: (id: number) => Product;
    updateFilters: (type: string, id: number) => void;
};

const filterProducts = (products: Product[], filters: State['filters']) => {
    let filteredProducts = products;

    if (filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(p => filters.categories.includes(p.category));
    }

    if (filters.collections.length > 0) {
        filteredProducts = filteredProducts.filter(p => filters.collections.includes(p.collection));
    }

    if (filters.colors.length > 0) {
        filteredProducts = filteredProducts.filter(p => filters.colors.includes(p.color));
    }

    return filteredProducts;
};


export const useStore = create<State & Actions>((set, get) => ({
    collections: null,
    products: null,
    filteredProducts: null,
    colors: null,
    categories: null,
    user: null,
    landingImg: null,
    cart: null,
    filters: {
        categories: [],
        collections: [],
        colors: []
    },
    updateCollections: (collections: Collection[]) =>
        set(() => ({
            collections: collections
        })),
    updateProducts: (products: Product[]) =>
        set(() => ({
            products: products,
            filteredProducts: products
        })),
    updateColors: (colors: Color[]) =>
        set(() => ({
            colors: colors
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
        set((state) => {
            const cart = state.cart || [];
            const existingProductIndex = cart.findIndex(
                (item) => item.id === product.id && item.size === product.size
            );

            if (existingProductIndex > -1) {
                const updatedCart = cart.map((item, index) => {
                    if (index === existingProductIndex) {
                        const newQuantity = item.quantity + product.quantity;
                        if (newQuantity > 5) {
                            toast.error("Cannot add more than 5 units of this product.");
                            return item;
                        }
                        toast.success("The product has been added to your cart.");
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                return { cart: updatedCart };
            } else {
                if (product.quantity > 5) {
                    return { cart };
                }
                toast.success("The product has been added to your cart.");
                return { cart: [...cart, product] };
            }
        }),
    addProductQuantity: (productId: number, productSize: string) =>
        set((state) => {
            const updatedCart = state.cart.map(product => {
                if (product.id === productId && product.size === productSize) {
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
    removeProductQuantity: (productId: number, productSize: string) =>
        set((state) => {
            const updatedCart = state.cart
                .map(product => {
                    if (product.id === productId && product.size === productSize) {
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
    removeFromCart: (productId: number, productSize: string) =>
        set((state) => ({
            cart: state.cart ? state.cart.filter(product => product.id !== productId || product.size !== productSize) : null
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
    },
    updateFilters: (type: string, id: number) =>
        set((state) => {
            const newFilters = { ...state.filters };
            if (newFilters[type].includes(id)) {
                newFilters[type] = newFilters[type].filter((item) => item !== id);
            } else {
                newFilters[type].push(id);
            }
            const filteredProducts = filterProducts(state.products, newFilters);
            return { filters: newFilters, filteredProducts: filteredProducts };
        }),
}))

