import { memo } from "react";
import { COPYRIGHT } from "../../constants";
import Navigation from "./Navigation";

interface BurgMenu {
  callback: () => void;
  menuOpen: boolean;
}

const BurgerMenu = memo(({ callback, menuOpen }: BurgMenu) => {
  return (
    <>
      <div className={`menu-overlay ${menuOpen && "active"}`} />

      <div className={`menu-mob ${menuOpen && "active"}`}>
        {<Navigation callback={callback} />}

        <footer className="disclaimer">
          <small>{COPYRIGHT}</small>
        </footer>
      </div>
    </>
  );
});

export default BurgerMenu;
