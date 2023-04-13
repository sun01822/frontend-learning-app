import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#14bf09" />
      <Component {...pageProps} />
    </Layout>
  );
}
