import { useMutation } from "@tanstack/react-query";
import server from "../server/tbg-server";

type LandingImg = {
    id: number;
    imgUrl: string;
    status?: number;
}

type Response = LandingImg[]

async function fetchLandingImg() {
    const { data } = await server.get<Response>(`/landing`);
    return data;
}

export function useFetchLandingImg() {
    return useMutation({
        mutationFn: fetchLandingImg,
    })
}