import { LIST_NAV } from "../constants";
import useActiveSection from "../hooks/useActiveSection";
import NavLink from "./NavLink";

const Navigation = ({ callback }: { callback?: () => void }) => {
  const activeSection = useActiveSection();

  return (
    <div className="navigation">
      {LIST_NAV.map((nav) => (
        <NavLink
          callback={callback}
          key={nav.value}
          {...nav}
          activeSection={activeSection}
        />
      ))}
    </div>
  );
};

export default Navigation;
