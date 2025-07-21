import useIsMobile from "../../hooks/useIsMobile";
import logoHeader from "../../assets/logo-header.svg";
import logoHeaderMob from "../../assets/logo-header-mob.svg";

const LogoHeader = () => {
  const isMobile = useIsMobile();

  return (
    <img
      src={isMobile ? logoHeaderMob : logoHeader}
      alt="logo WIVO Bank"
      className={isMobile ? "logo-header-mob" : "logo-header"}
    />
  );
};

export default LogoHeader;
