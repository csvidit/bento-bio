import Link from "next/link";
import {
  PiArrowUpRightDuotone,
  PiArrowUpRightFill,
} from "react-icons/pi";

const ListLink = (props: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  tabIndex: number;
}) => {

  return (
    <Link
      role="link"
      tabIndex={props.tabIndex}
      href={props.href}
      className="group p-2 lg:p-4 col-span-4 flex flex-row justify-between items-center bg-white rounded-lg transition-all duration-200 ease-in-out hover:ring hover:ring-gray-300 hover:shadow-lg hover:shadow-accent"
    >
      <div className="flex flex-row space-x-2 items-center">
        <div className="text-2xl lg:text-4xl">{props.icon}</div>
        <p className="text-base">{props.children}</p>
      </div>
      <div>
        <div className="text-2xl lg:text-4xl group-hover:rotate-45 transition-all duration-200 ease in out">
          <span className="group-hover:hidden flex">
            <PiArrowUpRightDuotone />
          </span>
          <span className="group-hover:flex hidden">
            <PiArrowUpRightFill />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ListLink;
