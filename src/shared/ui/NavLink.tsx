import { ACTIVE, SIZE } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { Nav } from "../types";

type TypeNavLink = Nav & {
  callback?: () => void;
  activeSection: string | null;
};

const NavLink = ({ callback, value, href, activeSection }: TypeNavLink) => {
  const isMobile = useIsMobile();

  return (
    <a
      className={
        isMobile
          ? `nav-link ${activeSection === value ? ACTIVE : ""}`
          : `link ${SIZE.M} ${activeSection === value ? ACTIVE : ""}`
      }
      href={href}
      onClick={callback}
    >
      {value}
    </a>
  );
};

export default NavLink;
