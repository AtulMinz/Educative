"use client";

import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import Navbar from "@/app/components/navbar";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gradient-to-b from-[#0F2167] via-blue-900 to-blue-700 min-h-full">
      <Navbar />
      <main className="flex justify-center p-32">
        <div className="flex flex-col pt-20 items-center">
          <h1 className="bg-clip-text text-4xl font-semibold text-[#8696FE]">
            Welcome to Educative. Get hands-on with in-demand tech skills.
          </h1>
          <div className="flex justify-center">
            <h2 className="bg-clip-text text-2xl text-slate-300 pt-2 font-thin">
              AI-powered learning personalised to your needs
            </h2>
          </div>
          <br></br>
          <div className="w-1/2">
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex justify-center items-center border-2 border-gray-500 w-full h-14 hover:bg-blue-950 rounded-lg"
            >
              <button className="mr-5 pr-3">
                <IoSearch className="fill-white" />
              </button>
              <input
                className="mt-1 bg-inherit w-4/5 h-1/2 mb-2 focus:outline-none text-white"
                type="text"
                placeholder="Search for courses."
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
