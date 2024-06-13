"use client";
import Script from "next/script";

export const Botpress = async () => {
    const initBotpress = async () => {
        const serverProps = await fetch('/api/server_props').then((res) => res.json());
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with TBG Bot",
            "botConversationDescription": "Trip Boys Gang Bot Assistance",
            "botId": serverProps.botId,
            "hostUrl":serverProps.hostUrl,
            "messagingUrl": serverProps.messagingUrl,
            "clientId": serverProps.clientId,
            "webhookId": serverProps.webhookId,
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