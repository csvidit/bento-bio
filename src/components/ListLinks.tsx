import { PiShootingStarDuotone, PiRobotDuotone, PiBrowserDuotone } from "react-icons/pi";
import ListLink from "./ListLink";

const ListLinks = () => {
  return (
    <>
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
    </>
  );
};

export default ListLinks
