import "@/styles/globals.css";
import Layout from "@/components/common/Layout";
import NextNProgress from "nextjs-progressbar";
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import StoreProvider from "@/redux/storeProvidor";
import AuthProvidor from "./utility/AuthProvidor";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StoreProvider>
      <ClerkProvider>
        <AuthProvidor>
          {router.pathname.includes("whiteboard") ? (
            <>
              <NextNProgress color="#14bf09" />
              <Component {...pageProps} />
            </>
          ) : (
            <Layout>
              <NextNProgress color="#14bf09" />
              <Component {...pageProps} />
            </Layout>
          )}
        </AuthProvidor>
      </ClerkProvider>
    </StoreProvider>
  );
}
