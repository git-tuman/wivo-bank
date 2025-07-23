import { ACTIVE } from "../../../constants";
import useActiveHash from "../../../hooks/useActiveHash";
import useIsMobile from "../../../hooks/useIsMobile";
import { Nav } from "../../../types";

const NavLink = ({ callback, value, href }: Nav) => {
  const isMobile = useIsMobile();

  const activeHash = useActiveHash();

  return (
    <span>
      <a
        className={`nav-link ${
          isMobile ? `${activeHash === href && ACTIVE}` : ""
        }`}
        href={href}
        onClick={callback}
      >
        {value}
      </a>
    </span>
  );
};

export default NavLink;
