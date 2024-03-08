import {
  PiShootingStarDuotone,
  PiRobotDuotone,
  PiBrowserDuotone,
  PiPaintBrushDuotone,
  PiPenDuotone,
} from "react-icons/pi";
import { RxShadowNone } from "react-icons/rx";
import ListLink from "./ListLink";

const ListLinks = () => {
  return (
    <>
    <ListLink
        tabIndex={0}
        href="https://v-k.pw/7pvHzhtOHy"
        icon={<PiPenDuotone />}
      >
        Engineering Blog
      </ListLink>
      <ListLink
        tabIndex={0}
        href="https://v-k.pw/1cTmyEzt76"
        icon={<PiPenDuotone />}
      >
        Essential UI libraries for React
      </ListLink>
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
        href="https://lume.csvid.it"
        icon={<RxShadowNone />}
      >
        Lume Wallpapers
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
        href="https://studio.viditkhandelwal.com"
        icon={<PiPaintBrushDuotone />}
      >
        Vidit Khandelwal Studio
      </ListLink>
    </>
  );
};

export default ListLinks;
