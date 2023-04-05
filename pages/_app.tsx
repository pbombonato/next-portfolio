import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Arsenal } from "next/font/google";

const arsenal = Arsenal({ weight: ["400", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={arsenal.className + 'w-screen overflow-hidden'}>
      <Component {...pageProps} />
    </main>
  );
}
