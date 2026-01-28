// src/pages/404.tsx
export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-center px-6">
            <h1 className="text-7xl font-bold text-yellow-500 mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Halaman tidak ditemukan
            </h2>
            <p className="text-neutral-400 mb-6 max-w-md">
                Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
            </p>
            <a
                href="/"
                className="btn-primary px-6 py-3 rounded-lg"
            >
                Kembali ke Beranda
            </a>
        </div>
    );
}
