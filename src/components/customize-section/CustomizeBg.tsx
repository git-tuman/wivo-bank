import useIsMobile from "../../hooks/useIsMobile";
import Cards from "../../assets/cards.png";
import CardsMob from "../../assets/cards-mob.png";
import GlassCards from "../../assets/glass-cards.png";
import GlassCardsMob from "../../assets/glass-cards-mob.png";

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

export default CustomizeBg;
