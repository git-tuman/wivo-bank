import { memo } from "react";
import { ACTIVE, COPYRIGHT } from "../../constants";
import Navigation from "./Navigation";

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

        <footer className="disclaimer">
          <small>{COPYRIGHT}</small>
        </footer>
      </div>
    </>
  );
});

export default BurgerMenu;
