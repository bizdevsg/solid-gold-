// src/pages/api/twakto-webhook.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const apiUrl = "https://endpoapi-production-3202.up.railway.app/api/quotes";

interface PriceData {
    symbol: string;
    last: number;
    percentChange: number;
}

async function getPriceData(symbol: string): Promise<string> {
    try {
        const response = await axios.get(apiUrl);
        const data: PriceData[] = response.data?.data ?? [];

        const priceData = data.find(
            (item) => item.symbol.toLowerCase() === symbol.toLowerCase()
        );

        if (priceData) {
            return `${priceData.symbol}: $${priceData.last} (Change: ${priceData.percentChange}%)`;
        } else {
            return `Sorry, I couldn't find the price for ${symbol}.`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return "There was an error while fetching the data.";
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { message } = req.body as { message?: string };

        if (!message) {
            return res.status(400).json({ message: "Message is required." });
        }

        const symbol = message.toLowerCase();

        if (["gold", "silver", "hangseng", "oil"].includes(symbol)) {
            const priceResponse = await getPriceData(symbol);
            await sendToTwakTo(priceResponse);
            res.status(200).json({ message: "Response sent to Twak.to" });
        } else {
            const errorMessage = "Sorry, I don't recognize that symbol.";
            await sendToTwakTo(errorMessage);
            res.status(200).json({ message: "Response sent to Twak.to" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}

async function sendToTwakTo(response: string): Promise<void> {
    // ⚠️ Pastikan ini benar-benar URL Webhook Twak.to, bukan embed script
    const twakUrl =
        "https://embed.tawk.to/689ee66f35c68d1927d54cb8/1j2mb89if";

    try {
        await axios.post(twakUrl, { message: response });
    } catch (error) {
        console.error("Error sending data to Twak.to:", error);
    }
}
