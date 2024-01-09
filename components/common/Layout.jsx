import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const route = useRouter();
  return (
    <div>
      {route.pathname.includes("login") ||
      route.pathname.includes("registration") ? (
        ""
      ) : (
        <Navbar />
      )}
      <div className="max-w-[1100px] min-h-screen mx-auto px-4">
        <main>{children}</main>
      </div>

      {route.pathname.includes("login") ||
      route.pathname.includes("registration") ? (
        ""
      ) : (
        <div className="w-full bg-white mt-10">
          <Footer />
        </div>
      )}
    </div>
  );
}
