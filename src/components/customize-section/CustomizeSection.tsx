import {
  CUSTOMIZE,
  CUSTOMIZE_HEADING,
  CUSTOMIZE_PARAGRAPH,
} from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";
import splitToLines from "../shared/splitToLines";
import Cards from "../../assets/cards.png";
import CardsMob from "../../assets/cards-mob.png";
import GlassCards from "../../assets/glass-cards.png";
import GlassCardsMob from "../../assets/glass-cards-mob.png";

const CustomizeContent = () => {
  const { firstLine, lastLine } = splitToLines(CUSTOMIZE_HEADING);

  return (
    <div className="customize-content">
      <h1>
        {firstLine} <span className="accent">{lastLine}</span>
      </h1>

      <p>{CUSTOMIZE_PARAGRAPH}</p>
    </div>
  );
};

const CustomizeBg = () => {
  const isMobile = useIsMobile();

  return (
    <div className="customize-bg">
      <img
        className="customize-cards"
        src={isMobile ? CardsMob : Cards}
        alt="cards"
      />

      <img
        className="customize-glass-cards"
        src={isMobile ? GlassCardsMob : GlassCards}
        alt="glass cards"
      />
    </div>
  );
};

const CustomizeSection = () => {
  return (
    <section id={CUSTOMIZE} className="customize-section">
      <CustomizeContent />

      <CustomizeBg />
    </section>
  );
};

export default CustomizeSection;
