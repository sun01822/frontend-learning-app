import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import NextNProgress from "nextjs-progressbar";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <Layout>
        <NextNProgress color="#14bf09" />
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
