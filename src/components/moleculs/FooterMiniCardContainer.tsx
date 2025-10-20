export default function FooterMiniCardContainer() {
    return (
        <div className="flex items-center gap-3">
            <a href="https://www.komdigi.go.id/">
                <div className="bg-gradient-to-br from-white via-zinc-100 to-zinc-200 p-3 rounded-2xl shadow-xl border border-zinc-300 w-fit hover:scale-105 hover:shadow-2xl transition transform duration-300 ease-in-out">
                    <img
                        src="/assets/logo-komdigi.png"
                        alt="Logo Komdigi"
                        className="h-10 drop-shadow-lg"
                    />
                </div>
            </a>
            <a>
                <div className="bg-gradient-to-br from-white via-zinc-100 to-zinc-200 p-3 rounded-2xl shadow-xl border border-zinc-300 w-fit hover:scale-105 hover:shadow-2xl transition transform duration-300 ease-in-out">
                    <img
                        src="/assets/logo TSI.png"
                        alt="Logo ISO"
                        className="h-10 drop-shadow-lg"
                    />
                </div>
            </a>
        </div>
    );
} 