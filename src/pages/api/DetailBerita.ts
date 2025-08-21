// /pages/api/berita/[slug].ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query;

    if (!slug || typeof slug !== "string") {
        return res.status(400).json({ error: "Slug tidak valid" });
    }

    try {
        const response = await fetch(`https://portalnews.newsmaker.id/api/berita/${encodeURIComponent(slug)}`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch external API" });
        }

        const result = await response.json();

        // API ini formatnya result.data berupa object tunggal, bukan array
        if (!result.data || typeof result.data !== "object") {
            return res.status(500).json({ error: "Invalid data format from API" });
        }

        // Kirim object berita langsung
        res.status(200).json(result);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
