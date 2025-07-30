import useIsMobile from "../../../shared/hooks/useIsMobile";
import GlassPromo from "../../../shared/assets/glass-promo.png";
import GlassPromoMob from "../../../shared/assets/glass-promo-mob.png";
import HandPromo from "../../../shared/assets/hand-promo.png";
import HandPromoMob from "../../../shared/assets/hand-promo-mob.png";

const HeroBg = () => {
  const isMobile = useIsMobile();

  return (
    <div className="hero-bg">
      <img
        className="glass-promo"
        src={isMobile ? GlassPromoMob : GlassPromo}
        alt="glass promo"
        loading="lazy"
      />

      <img
        className="hand-promo"
        src={isMobile ? HandPromoMob : HandPromo}
        alt="hand promo"
        loading="lazy"
      />
    </div>
  );
};

export default HeroBg;
