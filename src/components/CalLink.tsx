import Link from "next/link";
import { PiVideoCameraDuotone } from "react-icons/pi";

const CalLink = () => {
  return (
    <Link
      href="https://cal.com/viditkhandelwal"
      className="group p-2 lg:p-4 col-span-3 lg:col-span-2 flex flex-row space-x-2 justify-around items-center bg-white rounded-lg transition-all duration-200 ease-in-out outline-offset-[#0000FF] hover:ring hover:ring-gray-300 hover:shadow-lg hover:shadow-accent text-2xl lg:text-4xl"
    >
      <PiVideoCameraDuotone />
      <div className="flex flex-col">
        <div className="text-gray-800 text-base font-semibold extended">
          Let&apos;s schedule a meeting!
        </div>
        <div className="text-gray-500 text-xs">via Cal</div>
      </div>
    </Link>
  );
};

export default CalLink;
