"use client";

import { motion, MotionConfig } from "framer-motion";
import { PiArrowUpRight } from "react-icons/pi";

const Music = () => {
  return (
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
            animate={{ height: ["4px", "16px"] }}
          ></motion.div>

          <motion.div
            layout
            className="w-1 h-1 bg-[#0000FF] rounded-md"
            animate={{ height: ["6px", "18px", "12px"] }}
          ></motion.div>
          <motion.div
            layout
            className="w-1 h-1 bg-[#0000FF] rounded-md"
            animate={{ height: ["20px", "8px"] }}
          ></motion.div>
        </MotionConfig>
      </motion.div>
      <div className="flex flex-col">
        <div className="text-gray-500 text-xs">Currently listening to</div>
        <span className="text-gray-800">
          Style (Taylor&apos;s Version){" "}
          <span className="text-gray-500">&#8212; Taylor Swift</span>
        </span>
      </div>
    </div>
  );
};

export default Music;
