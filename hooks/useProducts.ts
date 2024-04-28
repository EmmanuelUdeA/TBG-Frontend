import { useQuery } from "@tanstack/react-query";
import server from "../server/tbg-server";

interface Product {
    id: number;
    name: string;
    description?: string;
    start_date?: string;
    finish_date?: string;
}

async function fetchProducts() {
    const { data } = await server.get<Product[]>('/product/collection');
    return data;
}

export function useFetchProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })
}