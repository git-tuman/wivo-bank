import useIsMobile from "../../hooks/useIsMobile";
import GlassPromo from "../../assets/glass-promo.png";
import GlassPromoMob from "../../assets/glass-promo-mob.png";
import HandPromo from "../../assets/hand-promo.png";
import HandPromoMob from "../../assets/hand-promo-mob.png";
import { MOB } from "../../constants";

const HeroBg = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`hero-bg ${isMobile && MOB}`}>
      <img
        className={`glass-promo ${isMobile && MOB}`}
        src={isMobile ? GlassPromoMob : GlassPromo}
        alt="glass promo"
      />

      <img
        className={`hand-promo ${isMobile && MOB}`}
        src={isMobile ? HandPromoMob : HandPromo}
        alt="hand promo"
      />
    </div>
  );
};

export default HeroBg;
