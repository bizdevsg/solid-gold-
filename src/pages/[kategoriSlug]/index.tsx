// /pages/news/[kategoriSlug]/index.tsx
import type { GetServerSideProps } from "next";
import MiniHeader from "@/components/atoms/MiniHeader";
import ReadMore from "@/components/atoms/ReadMore";
import NewsContainer from "@/components/organism/NewsContainer";
import PageTemplates from "@/components/templates/PageTemplates";
import { useI18n } from "@/i18n/useI18n";

interface Props {
    kategoriSlug: string;
}

export default function NewsByCategory({ kategoriSlug }: Props) {
    const { locale } = useI18n();
    const pageTitle = toPageTitle(kategoriSlug, locale);

    return (
        <PageTemplates title={pageTitle}>
            <MiniHeader title={pageTitle} />
            <NewsContainer kategoriSlug={kategoriSlug} />
            <div className="text-center" data-aos="fade-up">
                <ReadMore kategoriSlug={kategoriSlug} />
            </div>
        </PageTemplates>
    );
}

// Ambil params dari server supaya refresh nggak 404
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const { kategoriSlug } = context.params || {};

    if (!kategoriSlug || typeof kategoriSlug !== "string") {
        return { notFound: true };
    }

    return {
        props: {
            kategoriSlug, // biarkan apa adanya; toPageTitle akan merapikan tampilan
        },
    };
};

/* --- Utils --- */
// Override judul untuk slug tertentu
const TITLE_OVERRIDES: Record<string, { id: string; en: string }> = {
    analisismarket: { id: "Analisis Market", en: "Market Analysis" },
    analisisopini: { id: "Analisis & Opini", en: "Analysis & Opinion" },
    economicnews: { id: "Global & Ekonomi", en: "Global & Economy" },
    fiscalmoneter: { id: "Fiscal & Moneter", en: "Fiscal & Monetary" },
    indexnews: { id: "Index", en: "Index" },
    commoditynews: { id: "Commodity", en: "Commodity" },
    currenciesnews: { id: "Currencies", en: "Currencies" },
};

// Humanize slug umum: pecah camelCase, kebab-case, snake_case → Title Case
function humanizeSlug(input: string): string {
    if (!input) return "";
    const spaced = input
        .replace(/[-_]+/g, " ") // kebab/snake → spasi
        .replace(/([a-z])([A-Z0-9])/g, "$1 $2") // camelCase → spasi
        .replace(/\s{2,}/g, " ")
        .trim();

    // Title Case sederhana
    return spaced
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}

// Wrapper dengan override
function toPageTitle(slug: string, locale?: string): string {
    const key = slug.toLowerCase().replace(/[\s\-_&/]+/g, "");
    const override = TITLE_OVERRIDES[key];
    if (override) return locale === "en" ? override.en : override.id;
    return humanizeSlug(slug);
}
