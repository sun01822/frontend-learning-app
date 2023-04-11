import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl mt-10 font-bold">
        Welcome to <span className="text-success">Learning APP</span>
      </h1>
      <p className="text-center">Hi, Sun and Alamin!</p>

      <div className="w-[400px] text-center mx-auto mt-10">
        <Link href="/feed">
          <button className="btn">Start Now</button>
        </Link>
      </div>
    </>
  );
}
