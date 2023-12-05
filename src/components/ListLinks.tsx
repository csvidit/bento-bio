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
        href="https://snippetopia.xyz"
        icon={<PiBrowserDuotone />}
      >
        Snippetopia
      </ListLink>
      <ListLink
        tabIndex={0}
        href="https://xzayvian.xyz"
        icon={<PiRobotDuotone />}
      >
        Xzayvian GPT
      </ListLink>
    </>
  );
};

export default ListLinks;
