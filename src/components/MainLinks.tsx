import Link from "next/link";
import {
  PiEnvelopeDuotone,
  PiLinkedinLogoDuotone,
  PiReadCvLogoDuotone,
  PiVideoCameraDuotone,
} from "react-icons/pi";
import MainLink from "./MainLink";
import CalLink from "./CalLink";

const MainLinks = () => {
  return (
    <div className="col-span-4 w-full row-span-1 grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
      <MainLink tabIndex={1} alt="Send me an email" href="mailto:vidit@viditkhandelwal.com">
        <PiEnvelopeDuotone />
      </MainLink>
      <MainLink tabIndex={2} alt="Link to my LinkedIn profile" href="https://linkedin.com/in/viditkhandelwal">
        <PiLinkedinLogoDuotone />
      </MainLink>
      <MainLink tabIndex={3} alt="Link to my Read.cv profile" href="https://read.cv/viditkhandelwal">
        <PiReadCvLogoDuotone />
      </MainLink>
      <CalLink />
    </div>
  );
};

export default MainLinks;