import Link from "next/link";
import { PiShootingStarDuotone, PiArrowUpRightDuotone } from "react-icons/pi";

const ListLink = (props: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={props.href}
      className="group p-2 lg:p-4 col-span-4 flex flex-row justify-between items-center bg-white rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-2xl hover:shadow-[#0000FF]"
    >
      <div className="flex flex-row space-x-2 items-center">
        <div className="text-2xl lg:text-4xl">{props.icon}</div>
        <div className="text-base">{props.children}</div>
      </div>
      <div>
        <div className="text-2xl lg:text-4xl group-hover:rotate-45 transition-all duration-200 ease in out">
          <PiArrowUpRightDuotone />
        </div>
      </div>
    </Link>
  );
};

export default ListLink;
