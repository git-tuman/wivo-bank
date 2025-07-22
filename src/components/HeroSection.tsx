import {
  COLOR,
  FIND_OUT_MORE,
  GET_STARTED,
  HERO,
  HERO_PARAGRAPH,
  HERO_PARAGRAPH_MOB,
  MAIN_HEADING,
  MOB,
  SIZE,
} from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { Btn, BtnPrimary } from "../types";
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
    <section id={HERO} className={`hero-section ${isMobile && MOB}`}>
      <Header callback={handleClick} menuOpen={menuOpen} />

      {isMobile && <BurgerMenu callback={handleClick} menuOpen={menuOpen} />}

      <HeroBg />

      <HeroContent />
    </section>
  );
};

export default HeroSection;
