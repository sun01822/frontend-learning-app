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
      <div
        className={
          route.pathname.includes("Whiteboard")
            ? ""
            : "max-w-[1100px] mx-auto px-4"
        }
      >
        <main>{children}</main>
      </div>

      {route.pathname.includes("login") ||
      route.pathname.includes("registration") ||
      route.pathname.includes("conversation") ||
      route.pathname.includes("Whiteboard") ? (
        ""
      ) : (
        <div className="w-full bg-white mt-10">
          <Footer />
        </div>
      )}
    </div>
  );
}
