import useIsMobile from "../../hooks/useIsMobile";
import logoHeader from "../../assets/logo-header.svg";
import logoHeaderMob from "../../assets/logo-header-mob.svg";
import { useCallback } from "react";
import { HERO } from "../../constants";

const LogoHeader = () => {
  const isMobile = useIsMobile();

  const handleClick = useCallback(() => {
    document.getElementById(HERO)?.scrollIntoView();
  }, []);

  return (
    <img
      src={isMobile ? logoHeaderMob : logoHeader}
      alt="logo WIVO Bank"
      className="logo-header"
      onClick={handleClick}
    />
  );
};

export default LogoHeader;
