import { AppProps } from "next/app";
import Head from 'next/head';

export default function CatVApplication({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CatV - Cookie & Rajk</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset200802.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta property="og:site_name" content="CatV" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CatV" />
        <meta property="og:description" content="A melhor opção de IPTV para você!" />
        <meta property="og:url" content="http://191.238.223.103:3000/" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/698506357086748772/722231466666360912/logo2.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
