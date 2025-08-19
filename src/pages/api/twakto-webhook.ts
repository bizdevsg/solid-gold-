// pages/api/twakto-webhook.js (atau .ts jika TypeScript)

import axios from 'axios';

const apiUrl = 'https://endpoapi-production-3202.up.railway.app/api/quotes';

async function getPriceData(symbol) {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.data;
        const priceData = data.find(item => item.symbol.toLowerCase() === symbol.toLowerCase());

        if (priceData) {
            return `${priceData.symbol}: $${priceData.last} (Change: ${priceData.percentChange}%)`;
        } else {
            return `Sorry, I couldn't find the price for ${symbol}.`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'There was an error while fetching the data.';
    }
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        // Cek apakah pertanyaan mengandung nama simbol (misal "Gold", "Silver")
        const symbol = message.toLowerCase();

        // Validasi simbol yang dikenali
        if (['gold', 'silver', 'hangseng', 'oil'].includes(symbol)) {
            const priceResponse = await getPriceData(symbol);
            // Kirim balasan ke Twak.to
            await sendToTwakTo(priceResponse);
            res.status(200).json({ message: 'Response sent to Twak.to' });
        } else {
            const errorMessage = "Sorry, I don't recognize that symbol.";
            await sendToTwakTo(errorMessage);
            res.status(200).json({ message: 'Response sent to Twak.to' });
        }
    } else {
        // Pastikan hanya POST request yang diterima
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function sendToTwakTo(response) {
    const twakUrl = 'https://embed.tawk.to/689ee66f35c68d1927d54cb8/1j2mb89if';  // Ganti dengan URL Webhook Twak.to
    try {
        await axios.post(twakUrl, { message: response });
    } catch (error) {
        console.error('Error sending data to Twak.to:', error);
    }
}
