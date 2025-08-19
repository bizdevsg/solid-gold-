import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

interface Quote {
    symbol: string;
    last: number;
    valueChange: number;
    percentChange: number;
}

interface Props {
    quote: Quote;
}

export default function MarketUpdateCard({ quote }: Props) {
    const isUp = quote.valueChange >= 0;

    return (
        <div
            className="bg-cover bg-center rounded-lg overflow-hidden min-w-[220px] mx-2"
            style={{ backgroundImage: "url('/assets/bg_welcome.png')" }}
        >
            <div className="flex h-full items-center justify-between gap-3 text-white bg-black/50 p-4">
                {/* Harga dan persentase */}
                <div className="text-left">
                    <h5 className="text-xl font-bold">{quote.symbol}</h5>
                    <p>{quote.last.toLocaleString()}</p>
                    <p className={isUp ? "text-green-400 font-medium text-sm" : "text-red-400 font-medium text-sm"}>
                        {isUp ? "+" : ""}{quote.valueChange.toFixed(2)} ({quote.percentChange.toFixed(2)}%)
                    </p>
                </div>

                {/* Ikon arah naik/turun */}
                <div className={`flex items-center justify-center ${isUp ? "bg-green-500" : "bg-red-500"} rounded p-2`}>
                    {isUp ? <FaChevronUp className="text-white text-2xl" /> : <FaChevronDown className="text-white text-2xl" />}
                </div>
            </div>
        </div>
    );
}
