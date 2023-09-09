"use client";

import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Link from "next/link";
import {
  PiArrowUpRight,
  PiArrowUpRightDuotone,
  PiBrowserDuotone,
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiReadCvLogoDuotone,
  PiRobotDuotone,
  PiShootingStarDuotone,
  PiTwitterLogoDuotone,
  PiVideoCameraDuotone,
} from "react-icons/pi";
import { motion, MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <div className="p-4 lg:p-8 flex flex-col space-y-8 col-span-2 row-span-1 bg-white text-gray-800 rounded-2xl">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-start">
            <Image
              width={128}
              height={128}
              src="/memoji.png"
              alt="Memoji"
              className="rounded-full p-2 bg-gray-200"
            />
            <div className="flex flex-col space-y-2">
              <div className=" text-xl lg:text-2xl">Vidit Khandelwal</div>
              <div className="text-gray-400">
                A passionate software engineer with an equally strong focus on
                the frontend.
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <motion.div className="flex flex-row space-x-1 items-center">
              <MotionConfig
                transition={{
                  type: "tween",
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: "mirror",
                }}
              >
                <motion.div
                  layout
                  className="w-1 h-1 bg-[#0000FF] rounded-md"
                  animate={{ height: ["4px", "12px"] }}
                ></motion.div>

                <motion.div
                  layout
                  className="w-1 h-1 bg-[#0000FF] rounded-md"
                  animate={{ height: ["6px", "20px"] }}
                ></motion.div>
                <motion.div
                  layout
                  className="w-1 h-1 bg-[#0000FF] rounded-md"
                  animate={{ height: ["20px", "8px"] }}
                ></motion.div>
              </MotionConfig>
            </motion.div>
            <div className="flex flex-col">
              <div className="text-gray-400 text-xs">
                Currently listening to
              </div>
              <span className="text-gray-800">
                Pink Starburst{" "}
                <span className="text-gray-400">&#8212; Nightly</span>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:p-8 flex flex-col justify-between space-y-8 lg:space-y-0 col-start-1 lg:col-start-auto col-span-2 bg-[#0000FF] text-gray-100 rounded-2xl">
          <div className="flex flex-col space-y-2">
            <div className="text-xl lg:text-2xl">Check this out!</div>
            <div className="text-gray-100 text-opacity-80">
              My new comprehensive portfolio, with my coding projects, papers,
              and poems, all in one pretty Next.js web app.
            </div>
          </div>

          <Link
            className="text-xs group flex flex-row items-center p-2 w-fit rounded-full border border-gray-100 border-opacity-80 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-100 hover:ring-opacity-60 hover:border-opacity-100 text-gray-100 text-opacity-80 group-hover:text-opacity-100"
            href="https://open.spotify.com/track/1fo2ctLqj3zBhRQKOXprol?si=616958a98ed2439e"
            rel="noreferrer noopener"
            target="_blank"
          >
            {/* <div>Check it out</div> */}
            <PiArrowUpRight className="text-base" />
          </Link>
        </div>
        <div className="col-span-4 w-full row-span-1 grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
          <Link
            href="mailto:vidit@viditkhandelwal.com"
            className="group p-2 lg:p-4 col-span-1 flex flex-col justify-center items-center bg-gray-950 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-400 text-2xl lg:text-4xl  hover:shadow-2xl hover:shadow-[#0000FF]"
          >
            <div className="group-hover:rotate-6 transition-all duration-200 ease-in-out">
              <PiEnvelopeDuotone />
            </div>
          </Link>
          <Link
            href="https://linkedin.com/in/viditkhandelwal"
            className="group p-2 lg:p-4 col-span-1 flex flex-col justify-center items-center bg-gray-950 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-400 text-2xl lg:text-4xl  hover:shadow-2xl hover:shadow-[#0000FF]"
          >
            <div className="group-hover:rotate-6 transition-all duration-200 ease-in-out">
              <PiLinkedinLogoDuotone />
            </div>
          </Link>
          <Link
            href="https://read.cv/viditkhandelwal"
            className="group p-2 lg:p-4 col-span-1 flex flex-col justify-center items-center bg-gray-950 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-400 text-2xl lg:text-4xl  hover:shadow-2xl hover:shadow-[#0000FF]"
          >
            <div className="group-hover:rotate-6 transition-all duration-200 ease-in-out">
              <PiReadCvLogoDuotone />
            </div>
          </Link>
          <Link
            href="https://read.cv/viditkhandelwal"
            className="group p-2 lg:p-4 col-span-3 lg:col-span-2 flex flex-row space-x-2 justify-around items-center bg-white rounded-lg transition-all duration-200 ease-in-out outline-offset-[#0000FF] hover:ring hover:ring-gray-300 hover:shadow-2xl hover:shadow-[#0000FF] text-2xl lg:text-4xl"
          >
            <PiVideoCameraDuotone />
            <div className="flex flex-col">
              <div className="text-gray-800 text-base">
                Let&apos;s schedule a meeting!
              </div>
              <div className="text-gray-400 text-xs">via Cal.com</div>
            </div>
          </Link>
        </div>
        <div className="col-span-4 flex flex-row space-x-4 items-center row-span-1 bg-transparent text-gray-800 rounded-2xl">
          <div className="w-fit">Everything else</div>
          <div className="grow border-b border-b-gray-600" />
        </div>
        <Link
          href="https://turbobiz.xyz"
          className="group p-2 lg:p-4 col-span-4 flex flex-row justify-between items-center bg-white rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-2xl hover:shadow-[#0000FF]"
        >
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl lg:text-4xl">
              <PiShootingStarDuotone />
            </div>
            <div className="text-base">Turbobiz</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl">
              <PiArrowUpRightDuotone />
            </div>
          </div>
        </Link>
        <Link
          href="https://xzayvian.xyz"
          className="group p-2 lg:p-4 col-span-4 flex flex-row justify-between items-center bg-white rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-2xl hover:shadow-[#0000FF]"
        >
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl lg:text-4xl">
              <PiRobotDuotone />
            </div>
            <div className="text-base">Xzayvian GPT</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl">
              <PiArrowUpRightDuotone />
            </div>
          </div>
        </Link>
        <Link
          href="https://bento-portfolio.demos.vidit.page"
          className="group p-2 lg:p-4 col-span-4 flex flex-row justify-between items-center bg-white rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-2xl hover:shadow-[#0000FF]"
        >
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl lg:text-4xl">
              <PiBrowserDuotone />
            </div>
            <div className="text-base">Bento Portfolio Concept</div>
          </div>
          <div>
            <div className="text-2xl lg:text-4xl">
              <PiArrowUpRightDuotone />
            </div>
          </div>
        </Link>
        <div className="col-span-4 flex flex-row space-x-4 items-center row-span-1 bg-transparent text-gray-800 rounded-2xl">
          <div className="w-fit">
            &copy; {new Date().getFullYear()} Vidit Khandelwal. All rights
            reserved. All wrongs reserved, too
          </div>
          <div className="grow border-b border-b-gray-600" />
        </div>
      </MainContent>
    </MainContainer>
  );
}
