import useIsMobile from "../../hooks/useIsMobile";
import LogoHeader from "./LogoHeader";
import { GET_STARTED, MOB, SIZE } from "../../constants";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";
import ButtonTertiary from "../shared/ButtonTertiary";

const Header = ({
  callback,
  menuOpen,
}: {
  callback: () => void;
  menuOpen: boolean;
}) => {
  const isMobile = useIsMobile();

  return (
    <div className={`header ${isMobile && MOB}`}>
      <LogoHeader />

      {isMobile && <MenuButton callback={callback} open={menuOpen} />}

      <div className="container-nav-and-btn">
        {!isMobile && <Navigation />}

        <ButtonTertiary size={isMobile ? SIZE.S : SIZE.M} value={GET_STARTED} />
      </div>
    </div>
  );
};

export default Header;
