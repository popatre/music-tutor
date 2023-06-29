import "@/styles/globals.css";
import IsMobileProvider from "@/wrappers/isMobileWrapper";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <IsMobileProvider>
            <Component {...pageProps} />
        </IsMobileProvider>
    );
}
