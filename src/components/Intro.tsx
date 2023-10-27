'use client'

import Image from "next/image";
import Music from "./Music";

const Intro = () => {
  return (
    <div className="p-4 lg:p-8 flex flex-col space-y-8 col-span-2 row-span-1 bg-white text-gray-800 rounded-2xl">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-start">
        <Image
          width={128}
          height={128}
          src="/vidit-smile.png"
          alt="Memoji version of Vidit Khandelwal"
          className="rounded-full p-2 bg-gray-200"
        />
        <div className="flex flex-col space-y-2">
          <div className="text-xl lg:text-2xl">Vidit Khandelwal</div>
          <div className="text-gray-500">
            A passionate software engineer with an equally strong focus on the
            frontend.
          </div>
        </div>
      </div>
     <Music/>
    </div>
  );
};

export default Intro;

