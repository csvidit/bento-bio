import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";


const Spotlight = () => {
    return (<div className="p-4 lg:p-8 flex flex-col justify-between space-y-8 lg:space-y-0 col-start-1 lg:col-start-auto col-span-2 bg-[#0000FF] text-gray-100 rounded-2xl">
    <div className="flex flex-col space-y-2">
      <div className="text-xl lg:text-2xl">Check this out!</div>
      <div className="text-gray-100 text-opacity-80">
        Go to my new comprehensive portfolio, with my coding projects, papers,
        and poems, all in one pretty Next.js web app.
      </div>
    </div>

    <Link
      className="text-xs group flex flex-row items-center p-2 w-fit rounded-full border border-gray-100 border-opacity-80 transition-all duration-200 ease-in-out hover:ring hover:ring-gray-100 hover:ring-opacity-60 hover:border-opacity-100 text-gray-100 text-opacity-80 group-hover:text-opacity-100"
      href="https://viditkhandelwal.com"
      rel="noreferrer noopener"
      target="_blank"
    >
      {/* <div>Check it out</div> */}
      <PiArrowUpRight className="text-base" />
    </Link>
  </div>
  )
}

export default Spotlight;