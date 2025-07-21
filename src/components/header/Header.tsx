import { useCallback, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import LogoHeader from "./LogoHeader";
import { GET_STARTED } from "../../constants";
import MenuButton from "./MenuButton";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";
import Button from "./Button";

const Header = () => {
  const isMobile = useIsMobile();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = useCallback(() => setMenuOpen((s) => !s), []);

  return (
    <div className="header">
      <LogoHeader />

      {isMobile && (
        <>
          <MenuButton callback={handleClick} open={menuOpen} />

          <BurgerMenu callback={handleClick} menuOpen={menuOpen} />
        </>
      )}

      <div className="container-nav-and-btn">
        {!isMobile && <Navigation />}

        <Button value={GET_STARTED} />
      </div>
    </div>
  );
};

export default Header;
