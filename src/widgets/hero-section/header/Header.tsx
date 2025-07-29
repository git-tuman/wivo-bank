import useIsMobile from "../../../shared/hooks/useIsMobile";
import LogoHeader from "./LogoHeader";
import { GET_STARTED, SIZE } from "../../../shared/constants";
import MenuButton from "./MenuButton";
import Navigation from "../../../shared/ui/Navigation";
import ButtonTertiary from "../../../shared/ui/ButtonTertiary";

const Header = ({
  callback,
  menuOpen,
}: {
  callback: () => void;
  menuOpen: boolean;
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="header">
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
