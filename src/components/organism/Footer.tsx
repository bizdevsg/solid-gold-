export default function Footer() {
    const menuItems = [
        {
            label: "Produk",
            key: "produk",
            dropdown: [
                { label: "Multilateral (JFX)", href: "/produk/multilateral" },
                { label: "Bilateral (SPA)", href: "/produk/regular-account" },
            ],
        },
        {
            label: "News",
            key: "news",
            dropdown: [
                {
                    category: "Market",
                    children: [
                        { label: "Index", href: "/news/market/index" },
                        { label: "Commodity", href: "/news/market/commodity" },
                        { label: "Currencies", href: "/news/market/currencies" },
                    ],
                },
                {
                    category: "Economic",
                    children: [
                        { label: "Global & Economy", href: "/news/economic/global-economy" },
                    ],
                },
            ],
        },
        {
            label: "Analysis",
            key: "analysis",
            dropdown: [
                { label: "Market Analysis", href: "/analysis/technical" },
                { label: "Economic Calendar", href: "/analysis/fundamental" },
                { label: "Analysis & Opinion", href: "/analysis/fundamental" },
                { label: "Pivot & Fibonacci", href: "/analysis/fundamental" },
            ],
        },
    ];

    return (
        <footer className="w-full bg-black text-gray-300 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo & Deskripsi */}
                    <div>
                        <img
                            src="/assets/Logo SG-WEB.png"
                            alt="Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Broker resmi yang diawasi oleh Bappebti dan Bursa Berjangka.
                        </p>
                    </div>

                    {/* Menu Items */}
                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <h5 className="font-semibold mb-4 text-white uppercase tracking-wide">
                                {menu.label}
                            </h5>

                            {/* Dropdown */}
                            {Array.isArray(menu.dropdown) && menu.dropdown.length > 0 ? (
                                <ul className="space-y-2">
                                    {menu.dropdown.map((item, idx) => {
                                        if (item.category) {
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
                            ) : (
                                <ul>
                                    <li>
                                        <a
                                            href={(menu as any).href}
                                            className="hover:text-yellow-500 transition-colors duration-200 text-sm"
                                        >
                                            {menu.label}
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
                © {new Date().getFullYear()} Solid Gold Berjangka. All rights reserved.
            </div>
        </footer>
    );
}
