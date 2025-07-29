import { MARQUEE } from "../../shared/constants";
import Marquee from "./Marquee";
import MarqueeParagraph from "./MarqueeParagraph";

const MarqueeSection = () => {
  return (
    <section id={MARQUEE} className="marquee-section">
      <MarqueeParagraph />

      <Marquee />
    </section>
  );
};

export default MarqueeSection;
