import { HERO_PARAGRAPH, HERO_PARAGRAPH_MOB, MOB } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";

const HeroParagraph = () => {
  const isMobile = useIsMobile();

  return (
    <p className={`hero-paragraph ${isMobile && MOB}`}>
      {isMobile ? HERO_PARAGRAPH_MOB : HERO_PARAGRAPH}
    </p>
  );
};

export default HeroParagraph;
