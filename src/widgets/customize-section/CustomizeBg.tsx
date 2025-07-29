import useIsMobile from "../../shared/hooks/useIsMobile";
import Cards from "../../shared/assets/cards.png";
import CardsMob from "../../shared/assets/cards-mob.png";
import GlassCards from "../../shared/assets/glass-cards.png";
import GlassCardsMob from "../../shared/assets/glass-cards-mob.png";

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
