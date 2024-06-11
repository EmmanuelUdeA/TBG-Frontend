import { useMutation } from "@tanstack/react-query";
import server from "../server/tbg-server";
import { Mail } from "@/types/mailer.type";

async function fetchMailer(mail: Mail) {
    const res = await server.post(`/mail`, mail).then((res) => {
        const data = res.data;
        return data;
    }).catch((e) => {
        return e;
    });
    return res;
}

export function useFetchMailer() {
    return useMutation({
        mutationFn: (mail: Mail) => fetchMailer(mail),
    })
}