import { MAIN_HEADING, MOB } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";

const HeroHeading = () => {
  const isMobile = useIsMobile();

  return <h1 className={`hero-heading ${isMobile && MOB}`}>{MAIN_HEADING}</h1>;
};

export default HeroHeading;
