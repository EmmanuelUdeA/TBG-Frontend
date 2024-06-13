import { NextResponse } from "next/server";

export async function GET() {
    try {
        const serverUrl = process.env.SERVER;
        const firebaseApiKey = process.env.API_KEY;
        const firebaseAuthDomain = process.env.AUTH_DOMAIN;
        const firebaseProjectId = process.env.PROJECT_ID;
        const firebaseStorageBucket = process.env.STORAGE_BUCKET;
        const firebaseMessangingSenderId = process.env.MESSAGING_SENDER_ID;
        const firebaseAppId = process.env.APP_ID;
        const botId = process.env.BOT_ID;
        const hostUrl = process.env.HOST_URL;
        const messagingUrl = process.env.MESSAGING_URL;
        const clientId = process.env.CLIENT_ID;
        const webhookId = process.env.WEBHOOK_ID;
        const res = {
            serverUrl,
            firebaseApiKey,
            firebaseAuthDomain,
            firebaseProjectId,
            firebaseStorageBucket,
            firebaseMessangingSenderId,
            firebaseAppId,
            botId,
            hostUrl,
            messagingUrl,
            clientId,
            webhookId
        }
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}