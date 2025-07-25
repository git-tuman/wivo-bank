import { MARQUEE } from "../../constants";
import Marquee from "./Marquee";
import MarqueeCaption from "./MarqueeCaption";

const MarqueeSection = () => {
  return (
    <section id={MARQUEE} className="marquee-section">
      <MarqueeCaption />

      <Marquee />
    </section>
  );
};

export default MarqueeSection;
