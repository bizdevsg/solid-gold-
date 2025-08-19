// pages/_app.tsx
import "../styles/globals.css";
import "aos/dist/aos.css"; // import CSS AOS
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,   // <- biar bisa animasi lagi saat scroll balik
      mirror: true,  // <- animasi “keluar” saat elemen meninggalkan viewport (scroll up)
    });
  }, []);

  return <Component {...pageProps} />;
}
