import Layout from "./layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {

    return (
    <>
        <Head>
            <title>Next.js Project</title>
            <meta name="icon" content="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />            
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
    )
   
  }