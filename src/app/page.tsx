import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import {
  PiBrowserDuotone, PiRobotDuotone,
  PiShootingStarDuotone
} from "react-icons/pi";
import Intro from "@/components/Intro";
import Spotlight from "@/components/Spotlight";
import MainLinks from "@/components/MainLinks";
import ListLink from "@/components/ListLink";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <Intro />
        <Spotlight />
        <MainLinks />
        <div className="col-span-4 flex flex-row space-x-4 items-center row-span-1 bg-transparent text-gray-800 rounded-2xl">
          <div className="w-fit">Everything else</div>
          <div className="grow border-b border-b-gray-600" />
        </div>
        <ListLink href="https://turbobiz.xyz" icon={<PiShootingStarDuotone />}>
          Turbobiz
        </ListLink>
        <ListLink href="https://xzayvian.xyz" icon={<PiRobotDuotone />}>
          Xzayvian GPT
        </ListLink>
        <ListLink
          href="https://bento-portfolio.demos.vidit.page"
          icon={<PiBrowserDuotone />}
        >
          Bento Portfolio Concept
        </ListLink>
        <Footer />
      </MainContent>
    </MainContainer>
  );
}
