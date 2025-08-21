// /pages/api/settings.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch("https://vellorist.biz.id/api/v1/setting", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch external API" });
        }

        const result = await response.json();

        // Pastikan ada field data dan merupakan array
        if (!result.data || !Array.isArray(result.data)) {
            return res.status(500).json({ error: "Invalid data format from API" });
        }

        // Kirim hanya array berita
        res.status(200).json(result.data);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
