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
        tabIndex={0}
        href="https://turbobiz.xyz"
        icon={<PiShootingStarDuotone />}
      >
        Turbobiz
      </ListLink>
      <ListLink
        tabIndex={0}
        href="https://xzayvian.xyz"
        icon={<PiRobotDuotone />}
      >
        Xzayvian GPT
      </ListLink>
      <ListLink
        tabIndex={0}
        href="https://bento-portfolio.demos.vidit.page"
        icon={<PiBrowserDuotone />}
      >
        Bento Portfolio Concept
      </ListLink>
    </>
  );
};

export default ListLinks;
