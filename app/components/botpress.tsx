"use client";
import Script from "next/script";
export const Botpress = () => {
    const initBotpress = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "Chat with TBG Bot",
            "botConversationDescription": "Trip Boys Gang Bot Assistance",
            "botId": "c4ae1822-7c04-4e58-b36d-c92e3742e49b",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "c4ae1822-7c04-4e58-b36d-c92e3742e49b",
            "webhookId": "48d967fe-682b-42e7-9e78-1a277e23f835",
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