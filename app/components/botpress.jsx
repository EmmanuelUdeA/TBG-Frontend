"use client";
import Script from "next/script";
export const Botpress = () => {
    const initBotpress = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with TBG Bot",
            "botConversationDescription": "Trip Boys Gang Bot Assistance",
            "botId": process.env.BOT_ID,
            "hostUrl": process.env.HOST_URL,
            "messagingUrl": process.env.MESSAGING_URL,
            "clientId": process.env.CLIENT_ID,
            "webhookId": process.env.WEBHOOK_ID,
            "lazySocket": true,
            "themeName": "prism",
            "botName": "TBG Bot",
            "frontendVersion": "v1",
            "useSessionStorage": true,
            "showPoweredBy": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    }
    return (
        <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" onLoad={() => { initBotpress(); }} />
    )
}