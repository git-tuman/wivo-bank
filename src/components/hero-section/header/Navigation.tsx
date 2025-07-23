import { listNav } from "../../../constants";
import NavLink from "./NavLink";

const Navigation = ({ callback }: { callback?: () => void }) => {
  return (
    <div className="navigation">
      {listNav.map((nav) => (
        <NavLink callback={callback} key={nav.value} {...nav} />
      ))}
    </div>
  );
};

export default Navigation;
