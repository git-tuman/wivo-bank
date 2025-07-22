import { listNav, MOB } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";
import NavLink from "./NavLink";

const Navigation = ({ callback }: { callback?: () => void }) => {
  const isMobile = useIsMobile();

  return (
    <div className={`navigation ${isMobile && MOB}`}>
      {listNav.map((nav) => (
        <NavLink callback={callback} key={nav.value} {...nav} />
      ))}
    </div>
  );
};

export default Navigation;
