"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://realtime-notes-api.onrender.com")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

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
