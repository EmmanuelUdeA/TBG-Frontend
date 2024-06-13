"use client";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";

const Conditions = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    const updateUser = useStore(state => state.updateUser);
    useEffect(() => {
        if (user) {
            router.push(`?uid=${user.uid}`);
        } else if (localStorage.getItem("uid") !== null) {
            router.push(`?uid=${localStorage.getItem("uid")}`);
            let user = JSON.parse(localStorage.getItem("user"));
            let token = localStorage.getItem("accessToken");
            user["token"] = token;
            updateUser(user);
        }
    }, [user]);
    return (
        <div className="justify-start w-screen flex-col items-center h-auto text-center mt-40 mb-16">
            <h2 className="text-4xl font-bold mb-5 text-black w-full p-5">Terms And Conditions</h2>
            <div className="flex flex-col justify-center items-center w-full h-auto">
                <h3 className="font-semibold text-2xl mb-4 mt-10 h-10 w-full"> Restrictions On Use </h3>
                <p className="text-center w-1/2 h-auto my-3 ">The contents of the www.tripboysgang.com site are the exclusive property of tripboysgang SAS, holder of the tripboysgang® trademark, including reproductions of articles, graphic design, logos, images, texts, illustrations, photographic advertising, or procedures analogous to photography, audiovisual production, trademarks and other distinctive signs, in any of the programming languages used or usable, as well as all the operating and development software of the web site.
                    TripBoysGang is a registered trademark in Colombia, owned by and/or licensed to tripboysgang SAS.
                    The reproduction, distribution, communication to the public, making available to the public, transformation, transfer and any other act or form of exploitation, in any digital or physical format that has not been expressly authorized by tripboysgang®, are expressly prohibited, under penalty of any legal action that may be applicable.
                    In the case of data or content shared and/or provided by the user to the website, the user grants tripboysgang® the non-exclusive right, free of copyright and/or intellectual property, perpetually, irrevocably and fully transferable to third parties, to use, reproduce, modify, adapt, publish, translate, create derivative services, distribute and display such reviews and comments worldwide and in any media.
                    The buyer is responsible for the truthfulness and accuracy of the data entered and/or supplied in the site during the making of purchases in general; as well as, in the delivery conditions of the products, consequently any error or inaccuracy therein, especially in the address data or nomenclature for the shipment of the products purchased, shall be his sole responsibility, exonerating tripboysgang® from any claim for this circumstance, or for products delivered to wrong addresses due to the buyer's fault. tripboysgang® states that is outside the process of transactions made by financial institutions and / or banks, as well as the validation of the same, therefore, and not being a financial institution and / or bank, is not responsible for the rejection of transactions made by buyers, because the process of the transaction as such, is specific to each financial institution. All purchases made on this Web site shall be subject to a data verification and validation process by the tripboysgang® team; for this reason, the transaction that does not comply with the successful data validation parameters shall be rejected for the buyer.
                </p>
                <h3 className="font-semibold text-2xl mb-4 mt-10 h-10 w-full">Acceptance Of Terms And Conditions. </h3>
                <p className="text-center w-1/2 h-auto my-3 ">By accessing and using the www.tripboysgang.com site you agree that purchases are subject to the Terms and Conditions published on the site, and all applicable laws shall govern and be interpreted in accordance with Colombian law.
                    You can only place an order on our Website if you are an end consumer, not a distributor. Under the terms of Article 52 of Law 1480 of 2011, by making a purchase on our site, you expressly state that you are of legal age. Otherwise tripboysgang® may refrain from making the purchase, or may request authorization from your parents.
                    The orders you place through the Web Site for the products offered by our brand on said Web Site are only an offer to enter into a sales contract. The sales contract will only be effectively concluded when tripboysgang® confirms the order to you by e-mail.
                    With your order you guarantee that the information you provide in the request or order is accurate and complete. Our company is not obliged to accept an order and, in any case, we shall be entitled at any time to verify an order in advance or to reject it without the need to present you with reasons for doing so.
                    The product will be delivered to any person of legal age who is located at the address provided on the form or at the door of the residential unit or building provided.
                    It is important to clarify that the shipping costs of the merchandise actually purchased may vary without prior notice, according to the commercial conditions of our logistics operators and/or courier companies, increases or variations beyond the control of tripboysgang®.
                </p>
                <h3 className="font-semibold text-2xl mb-4 mt-10 h-10 w-full">Privacy Policy</h3>
                <p className="text-center w-1/2 h-auto my-3 ">The privacy of the information provided by the user is very important to tripboysgang®. For this reason, we have developed a Privacy Policy that describes how we collect, use, disclose, transfer and store your information. Please review our Privacy Policy, which is part of these Terms and Conditions, to understand our practices.   </p>
            </div>
        </div>
    )
}

export default Conditions;