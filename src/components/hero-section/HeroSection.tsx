import { HERO } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";
import Header from "./header/Header";
import HeroBg from "./backgrounds/HeroBg";
import BurgerMenu from "./header/BurgerMenu";
import { useCallback, useState } from "react";
import HeroContent from "./hero-content/HeroContent";

const HeroSection = () => {
  const isMobile = useIsMobile();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = useCallback(() => setMenuOpen((s) => !s), []);

  return (
    <section id={HERO} className="hero-section">
      <Header callback={handleClick} menuOpen={menuOpen} />

      {isMobile && <BurgerMenu callback={handleClick} menuOpen={menuOpen} />}

      <HeroContent />

      <HeroBg />
    </section>
  );
};

export default HeroSection;
