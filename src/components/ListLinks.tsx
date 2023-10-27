import {
  PiShootingStarDuotone,
  PiRobotDuotone,
  PiBrowserDuotone,
} from "react-icons/pi";
import ListLink from "./ListLink";

const ListLinks = () => {
  return (
    <>
      <ListLink
        tabIndex={4}
        href="https://turbobiz.xyz"
        icon={<PiShootingStarDuotone />}
      >
        Turbobiz
      </ListLink>
      <ListLink
        tabIndex={5}
        href="https://xzayvian.xyz"
        icon={<PiRobotDuotone />}
      >
        Xzayvian GPT
      </ListLink>
      <ListLink
        tabIndex={6}
        href="https://bento-portfolio.demos.vidit.page"
        icon={<PiBrowserDuotone />}
      >
        Bento Portfolio Concept
      </ListLink>
    </>
  );
};

export default ListLinks;
