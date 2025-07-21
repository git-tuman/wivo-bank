import useIsMobile from "../hooks/useIsMobile";
import Header from "./header/Header";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className={isMobile ? "hero-section-mob" : "hero-section"}>
      <Header />
    </section>
  );
};

export default HeroSection;
