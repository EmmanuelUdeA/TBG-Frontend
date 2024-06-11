import { useMutation } from "@tanstack/react-query";
import server from "../server/tbg-server";
import { Product, Collection, Category } from "@/types/product.type";

async function fetchProducts() {
    const { data } = await server.get<Product[]>('/product/products');
    return data;
}

export function useFetchProducts() {
    return useMutation({
        mutationFn: fetchProducts,
    })
}

async function fetchCollections() {
    const { data } = await server.get<Collection[]>('/product/collections');
    return data;
}

export function useFetchCollections() {
    return useMutation({
        mutationFn: fetchCollections
    })
}

async function fetchCategories() {
    const { data } = await server.get<Category[]>('/product/categories');
    return data;
}

export function useFetchCategories() {
    return useMutation({
        mutationFn: fetchCategories
    })
}


