import Link from "next/link";

type LogoItem = {
    src: string;
    alt: string;
    href?: string;
};

export default function Watcher() {
    const logos: LogoItem[] = [
        { src: "/assets/logo JFX.png", alt: "Logo JFX", href: "https://www.jfx.co.id/MarketMaker/market_maker/Pialang" },
        { src: "/assets/logo KBI.png", alt: "Logo KBI", href: "http://ptkbi.com/our-partner/perdagangan-berjangka-komoditi" },
        { src: "/assets/logo-Bappebti.png", alt: "Logo Bappebti", href: "https://bappebti.go.id/pialang_berjangka/detail/049" },
        { src: "/assets/logo TSI.png", alt: "Logo TSI", href: "" },          // tidak klik
    ];

    const isValidHref = (h?: string) => !!h && h.trim() !== "" && h.trim() !== "-";
    const isExternal = (h: string) => /^https?:\/\//i.test(h);

    const Card = ({ src, alt }: { src: string; alt: string }) => (
        <div className="flex items-center h-full justify-center p-4 bg-neutral-900 rounded hover:shadow hover:shadow-yellow-500 transition duration-300">
            <img src={src} alt={alt} className="max-h-15 w-auto object-contain" />
        </div>
    );

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 border-y p-4 border-gray-500 gap-5" data-aos="fade-left">
            {logos.map((logo, index) => {
                const href = logo.href?.trim();

                // Tidak ada href → div biasa
                if (!isValidHref(href)) {
                    return (
                        <div key={index}>
                            <Card src={logo.src} alt={logo.alt} />
                        </div>
                    );
                }

                // Eksternal → <a> (buka tab baru)
                if (isExternal(href!)) {
                    return (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={logo.alt}
                        >
                            <Card src={logo.src} alt={logo.alt} />
                        </a>
                    );
                }

                // Internal → <Link>
                return (
                    <Link key={index} href={href!} aria-label={logo.alt}>
                        <Card src={logo.src} alt={logo.alt} />
                    </Link>
                );
            })}
        </div>
    );
}
