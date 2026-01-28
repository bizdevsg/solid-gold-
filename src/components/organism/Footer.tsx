import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import FooterMiniCardContainer from "@/components/moleculs/FooterMiniCardContainer";
import { useI18n } from "@/i18n/useI18n";

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
    const { t } = useI18n();
    const menuItems: MenuItem[] = [
        {
            label: t("footer.products"),
            key: "produk",
            dropdown: [
                { label: t("nav.products.multilateral"), href: "/produk/multilateral" },
                { label: t("nav.products.bilateral"), href: "/produk/bilateral" },
                { label: t("nav.products.characteristics"), href: "/produk/karakteristik-produk" },
                { label: t("nav.products.illustration"), href: "/produk/ilustrasi-transaksi" },
            ],
        },
        {
            label: t("footer.news"),
            key: "news",
            dropdown: [
                {
                    category: t("footer.market"),
                    children: [
                        { label: t("nav.news.index"), href: "/indexNews" },
                        { label: t("nav.news.commodity"), href: "/commodityNews" },
                        { label: t("nav.news.currencies"), href: "/currenciesNews" },
                    ],
                },
                {
                    category: t("footer.economy"),
                    children: [
                        { label: t("nav.news.global"), href: "/economicNews" },
                        { label: t("nav.news.fiscal"), href: "/fiscalMoneter" },
                    ],
                },
            ],
        },
        {
            label: t("footer.about"),
            key: "tentang-kami",
            dropdown: [
                {
                    category: t("footer.company"),
                    children: [
                        { label: t("nav.about.profile"), href: "/tentang-kami/profil" },
                        { label: t("nav.about.legal"), href: "/tentang-kami/legalitas-bisnis" },
                        { label: t("nav.about.services"), href: "/tentang-kami/fasilitas-layanan" },
                        { label: t("nav.about.reason"), href: "/tentang-kami/alasan" },
                        { label: t("nav.about.broker"), href: "/tentang-kami/wakil-pialang" },
                    ],
                },
            ],
        },
        {
            label: t("footer.procedures"),
            key: "prosedur",
            dropdown: [
                {
                    category: t("footer.guides"),
                    children: [
                        { label: t("nav.procedures.guide"), href: "/prosedur/petunjuk-transaksi" },
                        { label: t("nav.procedures.withdrawal"), href: "/prosedur/prosedur-penarikan" },
                        { label: t("nav.procedures.regol"), href: "/prosedur/prosedur-regol" },
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
                                {t("footer.brokerNote")}
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
                        {t("footer.rights", { year: new Date().getFullYear() })}
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
