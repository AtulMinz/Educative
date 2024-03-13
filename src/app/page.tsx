import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <main className="flex justify-center p-24 bg-gradient-to-b from-[#0F2167] via-blue-900 to-blue-700 h-[100vh]">
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
        <div className="flex justify-center items-center border-2 border-gray-500 w-3/6 h-14 hover:bg-blue-950 rounded-lg">
          <button className="mr-5 bg-white">
            <IoSearch className="" />
          </button>
          <input
            className="mt-1 bg-inherit w-4/5 h-1/2 mb-2"
            type="text"
            placeholder="Search for courses."
          />
        </div>
      </div>
    </main>
  );
}
