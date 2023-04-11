import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl mt-10 font-bold">
        Welcome to <span className="text-success">Learning APP</span>
      </h1>

      <div className="mockup-code w-[400px] mx-auto mt-10">
        <pre data-prefix="$">
          <code>npm i</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>Loading learning APP...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Hi, Sun and Alamin!</code>
        </pre>
      </div>
    </>
  );
}
