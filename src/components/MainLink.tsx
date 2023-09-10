import Link from "next/link";
import MainLinkIcon from "./MainLinkIcon";

const MainLink = (props: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={props.href}
      className="group p-2 lg:p-4 col-span-1 flex flex-col justify-center items-center bg-gray-950 rounded-lg text-gray-400 hover:text-gray-100 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-400 text-2xl lg:text-4xl hover:shadow-2xl hover:shadow-[#0000FF]"
    >
      <MainLinkIcon>{props.children}</MainLinkIcon>
    </Link>
  );
};

export default MainLink;