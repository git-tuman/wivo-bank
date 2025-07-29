import { memo } from "react";
import { ACTIVE, COPYRIGHT, LIST_LEGAL_LINKS } from "../../../shared/constants";
import Navigation from "../../../shared/ui/Navigation";

interface BurgMenu {
  callback: () => void;
  menuOpen: boolean;
}

const BurgerMenu = memo(({ callback, menuOpen }: BurgMenu) => {
  return (
    <>
      <div
        className={`menu-overlay ${menuOpen && ACTIVE}`}
        onClick={callback}
      />

      <div className={`menu ${menuOpen && ACTIVE}`}>
        {<Navigation callback={callback} />}

        <a className="link S" href={LIST_LEGAL_LINKS[0].href}>
          {COPYRIGHT}
        </a>
      </div>
    </>
  );
});

export default BurgerMenu;
