"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import LanguageToggle from "@/components/atoms/LanguageToggle";
import { useI18n } from "@/i18n/useI18n";

type MenuLink = { label: string; href: string };
type MenuGroup = { category: string; children: MenuLink[] };
type MenuItem =
    | { label: string; key?: string; href: string }
    | { label: string; key: string; dropdown: (MenuLink | MenuGroup)[] };

export default function Navbar() {
    const router = useRouter();
    const pathname = router.pathname ?? "";
    const { t } = useI18n();

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    const menuItems: MenuItem[] = [
        { label: t("nav.home"), href: "/" },
        {
            label: t("nav.about"),
            key: "about",
            dropdown: [
                { label: t("nav.about.profile"), href: "/tentang-kami/profil" },
                { label: t("nav.about.legal"), href: "/tentang-kami/legalitas-bisnis" },
                { label: t("nav.about.broker"), href: "/tentang-kami/wakil-pialang" },
                { label: t("nav.about.services"), href: "/tentang-kami/fasilitas-layanan" },
                { label: t("nav.about.achievements"), href: "/tentang-kami/video-galeri" },
                { label: t("nav.about.general"), href: "/tentang-kami/market-update" },
                { label: t("nav.about.reason"), href: "/tentang-kami/alasan" },
            ],
        },
        {
            label: t("nav.products"),
            key: "produk",
            dropdown: [
                { label: t("nav.products.multilateral"), href: "/produk/multilateral" },
                { label: t("nav.products.bilateral"), href: "/produk/bilateral" },
                { label: t("nav.products.characteristics"), href: "/produk/karakteristik-produk" },
                { label: t("nav.products.illustration"), href: "/produk/ilustrasi-transaksi" },
            ],
        },
        {
            label: t("nav.procedures"),
            key: "prosedur",
            dropdown: [
                { label: t("nav.procedures.guide"), href: "/prosedur/petunjuk-transaksi" },
                { label: t("nav.procedures.withdrawal"), href: "/prosedur/prosedur-penarikan" },
                { label: t("nav.procedures.regol"), href: "/prosedur/prosedur-regol" },
            ],
         },
        {
            label: t("nav.news"),
            key: "news",
            dropdown: [
                {
                    category: t("nav.news.market"),
                    children: [
                        { label: t("nav.news.index"), href: "/indexNews" },
                        { label: t("nav.news.commodity"), href: "/commodityNews" },
                        { label: t("nav.news.currencies"), href: "/currenciesNews" },
                    ],
                },
                {
                    category: t("nav.news.economy"),
                    children: [
                        { label: t("nav.news.global"), href: "/economicNews" },
                        { label: t("nav.news.fiscal"), href: "/fiscalMoneter" },
                    ],
                },
            ],
        },
        {
            label: t("nav.analysis"),
            key: "analysis",
            dropdown: [
                { label: t("nav.analysis.market"), href: "/analisisMarket" },
                { label: t("nav.analysis.calendar"), href: "/analisis/kalender-ekonomi" },
                { label: t("nav.analysis.pivot"), href: "/analisis/pivot-fibonacci" },
            ],
        },
        { label: t("nav.contact"), href: "/kontak" },
    ];

    /** Utils Active */
    const isActiveHref = (href?: string): boolean => {
        if (!href) return false;
        return pathname === href || pathname.startsWith(href + "/");
    };

    const getDropdownLinks = (dropdown: (MenuLink | MenuGroup)[]): MenuLink[] => {
        if (!dropdown?.length) return [];
        return isGroupArray(dropdown)
            ? (dropdown as MenuGroup[]).flatMap((g) => g.children)
            : (dropdown as MenuLink[]);
    };

    const isDropdownActive = (dropdown: (MenuLink | MenuGroup)[]) =>
        getDropdownLinks(dropdown).some((l) => isActiveHref(l.href));

    // Scroll state
    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 150);
                    ticking = false;
                });
                ticking = true;
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll saat mobile menu terbuka
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    // Tutup saat klik di luar & tombol Esc
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target as Node)) {
                setActiveDropdown(null);
                setMobileDropdown(null);
                setIsOpen(false);
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveDropdown(null);
                setMobileDropdown(null);
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    // ✅ Tutup menu saat route berubah
    useEffect(() => {
        if (timeoutId.current) {
            clearTimeout(timeoutId.current);
            timeoutId.current = null;
        }
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileDropdown(null);
    }, [pathname]);

    // Hover handlers (desktop)
    const handleMouseEnter = (key: string) => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        setActiveDropdown(key);
    };
    const handleMouseLeave = () => {
        timeoutId.current = setTimeout(() => setActiveDropdown(null), 120);
    };

    const closeAllMenus = () => {
        setIsOpen(false);
        setActiveDropdown(null);
        setMobileDropdown(null);
    };

    const linkBase = "text-base hover:text-yellow-500 transition-colors";

    return (
        <nav
            className={`w-full top-0 left-0 z-30 transition-all duration-300 ${isScrolled ? "fixed py-1" : "absolute py-4"
                }`}
            aria-label="Primary"
        >
            <div className="max-w-7xl mx-auto px-2 md:px-0">
                <div
                    ref={navRef}
                    className={`backdrop-blur-3xl px-4 md:px-6 w-full rounded-md ${isScrolled || isOpen ? "py-2 bg-neutral-700/40" : "lg:py-2"
                        } min-h-[60px] flex items-center`}
                >
                    <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center gap-y-4 lg:gap-y-0">
                        {/* Brand + Mobile Toggle */}
                        <div className="w-full flex flex-row justify-between items-center lg:w-auto">
                            <Link href="/" aria-label="Beranda" onClick={closeAllMenus}>
                                <Image
                                    src="/assets/sglogo.png"
                                    alt="Solid Gold"
                                    width={160}
                                    height={40}
                                    className="h-8   md:h-10 w-auto"
                                    priority
                                />
                            </Link>
                            <button
                                className="lg:hidden text-white text-2xl p-2"
                                onClick={() => setIsOpen((v) => !v)}
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                                aria-controls="primary-navigation"
                            >
                                {isOpen ? <FiX /> : <FiMenu />}
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div
                            id="primary-navigation"
                            className={`flex flex-col lg:flex-row items-start lg:items-center gap-y-2 lg:gap-x-6 transition-all duration-300 ${isOpen ? "block" : "hidden"
                                } lg:flex`}
                        >
                            {menuItems.map((item, idx) => {
                                const hasDropdown = (item as any).dropdown;
                                const key = "key" in item ? item.key ?? item.label : item.label;

                                if (hasDropdown) {
                                    const dropdown = (item as Extract<MenuItem, { dropdown: any }>).dropdown;
                                    const desktopOpen = activeDropdown === key;
                                    const parentActive = isDropdownActive(dropdown);

                                    return (
                                        <div
                                            key={idx}
                                            className="relative w-full lg:w-auto"
                                            onMouseEnter={() => handleMouseEnter(key)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <button
                                                type="button"
                                                className={`${linkBase} flex justify-between items-center gap-2 w-full lg:w-auto cursor-pointer ${parentActive ? "text-yellow-400" : "text-white"
                                                    }`}
                                                aria-haspopup="menu"
                                                aria-expanded={(desktopOpen || mobileDropdown === key) || undefined}
                                                onClick={() =>
                                                    setMobileDropdown(mobileDropdown === key ? null : key)
                                                }
                                                onFocus={() => handleMouseEnter(key)}
                                            >
                                                {item.label}
                                                <FiChevronDown />
                                            </button>

                                            {/* Desktop Dropdown */}
                                            <div
                                                role="menu"
                                                aria-label={item.label}
                                                className={`absolute left-0 mt-2 bg-neutral-800 text-white rounded-md shadow-lg ring-1 ring-white/10 w-[15rem] ${desktopOpen ? "hidden lg:block" : "hidden"
                                                    }`}
                                            >
                                                {isGroupArray(dropdown) ? (
                                                    <div className="py-2">
                                                        {dropdown.map((group, gIdx) => (
                                                            <div key={gIdx} className="px-4 py-3">
                                                                <span className="block font-semibold text-lg text-gray-300 mb-2">
                                                                    {group.category}
                                                                </span>
                                                                <ul className="space-y-1 ms-2">
                                                                    {group.children.map((child, cIdx) => {
                                                                        const childActive = isActiveHref(child.href);
                                                                        return (
                                                                            <li key={cIdx}>
                                                                                <Link
                                                                                    href={child.href}
                                                                                    className={`block py-1 ${childActive
                                                                                        ? "text-yellow-400"
                                                                                        : "text-gray-300 hover:text-yellow-500"
                                                                                        }`}
                                                                                    aria-current={childActive ? "page" : undefined}
                                                                                    onClick={closeAllMenus}
                                                                                >
                                                                                    {child.label}
                                                                                </Link>
                                                                            </li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <ul className="py-2">
                                                        {(dropdown as MenuLink[]).map((link, lIdx) => {
                                                            const childActive = isActiveHref(link.href);
                                                            return (
                                                                <li key={lIdx}>
                                                                    <Link
                                                                        href={link.href}
                                                                        className={`block py-2 px-4 ${childActive
                                                                            ? "text-yellow-400"
                                                                            : "text-gray-300 hover:text-yellow-500"
                                                                            }`}
                                                                        aria-current={childActive ? "page" : undefined}
                                                                        onClick={closeAllMenus}
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                )}
                                            </div>

                                            {/* Mobile Dropdown */}
                                            {mobileDropdown === key && (
                                                <div className="lg:hidden pl-3 pt-1" role="menu">
                                                    {isGroupArray(dropdown) ? (
                                                        <div className="space-y-2">
                                                            {dropdown.map((group, gIdx) => (
                                                                <div key={gIdx}>
                                                                    <span className="block font-semibold text-gray-300 mb-1">
                                                                        {group.category}
                                                                    </span>
                                                                    <ul>
                                                                        {group.children.map((child, cIdx) => {
                                                                            const childActive = isActiveHref(child.href);
                                                                            return (
                                                                                <li key={cIdx}>
                                                                                    <Link
                                                                                        href={child.href}
                                                                                        className={`block py-1 pl-1 ${childActive
                                                                                            ? "text-yellow-400"
                                                                                            : "text-gray-300 hover:text-yellow-500"
                                                                                            }`}
                                                                                        aria-current={childActive ? "page" : undefined}
                                                                                        onClick={closeAllMenus}
                                                                                    >
                                                                                        {child.label}
                                                                                    </Link>
                                                                                </li>
                                                                            );
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <ul>
                                                            {(dropdown as MenuLink[]).map((link, lIdx) => {
                                                                const childActive = isActiveHref(link.href);
                                                                return (
                                                                    <li key={lIdx}>
                                                                        <Link
                                                                            href={link.href}
                                                                            className={`block py-2 pl-2 ${childActive
                                                                                ? "text-yellow-400"
                                                                                : "text-gray-300 hover:text-yellow-500"
                                                                                }`}
                                                                            aria-current={childActive ? "page" : undefined}
                                                                            onClick={closeAllMenus}
                                                                        >
                                                                            {link.label}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                // Simple link
                                const simple = item as Extract<MenuItem, { href: string }>;
                                const simpleActive = isActiveHref(simple.href);
                                return (
                                    <Link
                                        key={idx}
                                        href={simple.href}
                                        className={`${linkBase} ${simpleActive ? "text-yellow-400" : "text-white"
                                            }`}
                                        aria-current={simpleActive ? "page" : undefined}
                                        onClick={closeAllMenus}
                                    >
                                        {simple.label}
                                    </Link>
                                );
                            })}

                            {/* Language */}
                            <div className="lg:block w-full lg:w-auto mt-1 lg:mt-0 flex items-center gap-3">
                                <LanguageToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

/** Helper */
function isGroupArray(arr: (MenuLink | MenuGroup)[]): arr is MenuGroup[] {
    return typeof (arr?.[0] as any)?.category === "string";
}
