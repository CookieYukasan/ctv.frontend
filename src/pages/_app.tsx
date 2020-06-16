import { AppProps } from "next/app";

export default function CatVApplication({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
