import React from "react";
import Link from "next/link";
import { Onest } from "next/font/google";

const onset = Onest({ subsets: ["latin"] });

export default function Landing() {
  return (
    <>
      <div className="bg-white h-screen flex flex-col justify-center items-start relative overflow-hidden">
        <h1 className="text-black font-bold text-[32px] md:text-[80px] -mt-60 tracking-wide">
          the
          <span className="bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
            pass
          </span>
          framework
        </h1>
        <div className="absolute bottom-4 w-full md:flex justify-between pb-24 space-y-20 md:space-y-0 text-black">
          <div className="md:w-1/2 flex flex-row gap-5 items-center">
            <h1 className="bg-black text-white text-xs md:text-lg rounded-full w-9 md:w-[72px] h-9 md:h-[72px] flex items-center justify-center">
              X%
            </h1>
            <h1 className="text-lg md:text-2xl">Accuracy</h1>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row justify-start md:justify-end md:items-center">
            <h1 className="md:w-2/3 text-lg md:text-2xl mb-4 md:mb-0">
              a metaheuristic framework for enhancing security and privacy in
              IoT networks.
            </h1>
            <Link href="/test">
              <button className="text-white text-lg md:text-2xl bg-gradient-to-r from-purple-600 to-teal-400 p-4 rounded-full">
                Try it out now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
