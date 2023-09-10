import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import {
  PiBrowserDuotone,
  PiRobotDuotone,
  PiShootingStarDuotone,
} from "react-icons/pi";
import Intro from "@/components/Intro";
import Spotlight from "@/components/Spotlight";
import MainLinks from "@/components/MainLinks";
import ListLink from "@/components/ListLink";
import Footer from "@/components/Footer";
import ListLinks from "@/components/ListLinks";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <MainContainer>
      <MainContent>
        <Intro />
        <Spotlight />
        <MainLinks />
        <Divider />
        <ListLinks />
        <Footer />
      </MainContent>
    </MainContainer>
  );
}
