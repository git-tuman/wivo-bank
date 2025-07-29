import { BACK_TO_TOP, HERO } from "../../shared/constants";
import useIsMobile from "../../shared/hooks/useIsMobile";
import Navigation from "../../shared/ui/Navigation";

const FooterHeader = () => {
  const isMobile = useIsMobile();

  return (
    <div className="footer-header">
      {!isMobile && <Navigation />}

      <a href={`#${HERO}`} className="link M">
        {BACK_TO_TOP}
      </a>
    </div>
  );
};

export default FooterHeader;
