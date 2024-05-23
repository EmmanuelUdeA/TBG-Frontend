import { useMutation } from "@tanstack/react-query";
import server from "../server/tbg-server";
import { LandingImg } from "@/types/landing.type";

async function fetchLandingImg() {
    const { data } = await server.get<LandingImg>(`/landing`);
    return data;
}

export function useFetchLandingImg() {
    return useMutation({
        mutationFn: fetchLandingImg,
    })
}