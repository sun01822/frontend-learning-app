import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const route = useRouter();
  // console.log(route.pathname);
  return (
    <div>
      <Navbar />
      <div className="max-w-[1100px] min-h-screen mx-auto px-4">
        <main>{children}</main>
      </div>
      <div className="w-full bg-white mt-10">
        <Footer />
      </div>
    </div>
  );
}
