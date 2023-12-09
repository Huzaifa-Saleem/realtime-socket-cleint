import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-[45px] font-bold">WELCOME!</h1>
      <p className="text-[30px]">LETS SHARE YOUR NOTES IN REALTIME</p>

      <Link
        href={`/${Math.random().toString(36).substr(2, 9)}`}
        className="bg-white mt-10 px-10 py-3 font-semibold hover:bg-slate-100   text-black"
      >
        get started
      </Link>
    </main>
  );
}
