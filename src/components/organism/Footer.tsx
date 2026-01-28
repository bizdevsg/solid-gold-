import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import FooterMiniCardContainer from "@/components/moleculs/FooterMiniCardContainer";

type LinkItem = {
    label: string;
    href: string;
};

type CategoryItem = {
    category: string;
    children: LinkItem[];
};

type DropdownItem = LinkItem | CategoryItem;

type MenuItem = {
    label: string;
    key: string;
    dropdown?: DropdownItem[];
};

export default function Footer() {
    const menuItems: MenuItem[] = [
        {
            label: "Produk",
            key: "produk",
            dropdown: [
                { label: "Multilateral (JFX)", href: "/produk/multilateral" },
                { label: "Bilateral (SPA)", href: "/produk/bilateral" },
                { label: "Karakteristik Produk", href: "/produk/karakteristik-produk" },
                { label: "Ilustrasi Transaksi", href: "/produk/ilustrasi-transaksi" },
            ],
        },
        {
            label: "Berita",
            key: "news",
            dropdown: [
                {
                    category: "Market",
                    children: [
                        { label: "Index", href: "/indexNews" },
                        { label: "Commodity", href: "/commodityNews" },
                        { label: "Currencies", href: "/currenciesNews" },
                    ],
                },
                {
                    category: "Ekonomi",
                    children: [
                        { label: "Global & Ekonomi", href: "/economicNews" },
                        { label: "Fiscal & Moneter", href: "/fiscalMoneter" },
                    ],
                },
            ],
        },
        {
            label: "Tentang Kami",
            key: "tentang-kami",
            dropdown: [
                {
                    category: "Perusahaan",
                    children: [
                        { label: "Profil", href: "/tentang-kami/profil" },
                        { label: "Legalitas Bisnis", href: "/tentang-kami/legalitas-bisnis" },
                        { label: "Fasilitas Layanan", href: "/tentang-kami/fasilitas-layanan" },
                        { label: "Alasan Memilih Kami", href: "/tentang-kami/alasan" },
                        { label: "Wakil Pialang", href: "/tentang-kami/wakil-pialang" },
                    ],
                },
            ],
        },
        {
            label: "Prosedur",
            key: "prosedur",
            dropdown: [
                {
                    category: "Panduan",
                    children: [
                        { label: "Petunjuk Transaksi", href: "/prosedur/petunjuk-transaksi" },
                        { label: "Prosedur Penarikan", href: "/prosedur/prosedur-penarikan" },
                        { label: "Prosedur Regol", href: "/prosedur/prosedur-regol" },
                    ],
                },
            ],
        },
 
    ];

    return (
        <footer className="w-full bg-black text-gray-300 border-t border-zinc-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                    <div className="space-y-3">
                        <div>
                            <img src="/assets/sglogo.png" alt="Logo" className="h-12 mb-4" />
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Broker resmi yang diawasi oleh Bappebti dan Bursa Berjangka.
                            </p>
                        </div>
                        <FooterMiniCardContainer />
                    </div>

                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <h5 className="font-semibold mb-4 text-white uppercase tracking-wide">
                                {menu.label}
                            </h5>

                            {Array.isArray(menu.dropdown) && menu.dropdown.length > 0 && (
                                <ul
                                    className={
                                        menu.key === "news" ? "space-y-3" : "space-y-2"
                                    }
                                >
                                    {menu.dropdown.map((item, idx) => {
                                        if ("category" in item) {
                                            return (
                                                <li key={idx}>
                                                    <span className="block text-yellow-500 font-medium mb-1">
                                                        {item.category}
                                                    </span>
                                                    <ul className="space-y-1 ml-2">
                                                        {item.children.map((child, childIdx) => (
                                                            <li key={childIdx}>
                                                                <a
                                                                    href={child.href}
                                                                    className="hover:text-yellow-500 transition-colors duration-200 text-sm"
                                                                >
                                                                    {child.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={idx}>
                                                <a
                                                    href={item.href}
                                                    className="hover:text-yellow-500 transition-colors duration-200 text-sm"
                                                >
                                                    {item.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex gap-5 py-5 flex-col md:flex-row justify-between items-center">
                    <div className="text-left text-sm text-gray-300">
                        © {new Date().getFullYear()} Solid Gold Berjangka. All rights reserved.
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.instagram.com/solidgoldjakarta.official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 bg-neutral-500 p-1 rounded-full text-2xl"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.youtube.com/@Ptsolidgoldberjangka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-500 bg-neutral-500 p-1 rounded-full text-2xl"
                            aria-label="YouTube"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
