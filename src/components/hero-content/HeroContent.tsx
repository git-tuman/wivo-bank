import { COLOR, FIND_OUT_MORE, GET_STARTED, SIZE } from "../../constants";
import useIsMobile from "../../hooks/useIsMobile";
import ButtonPrimary from "../shared/ButtonPrimary";
import ButtonSecondary from "../shared/ButtonSecondary";
import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";

const HeroContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="hero-content">
      <HeroHeading />

      <div className="hero-info">
        <HeroParagraph />

        <div className="container-hero-btns">
          <ButtonPrimary
            size={isMobile ? SIZE.S : SIZE.M}
            color={COLOR.BLACK}
            value={GET_STARTED}
          />

          <ButtonSecondary
            size={isMobile ? SIZE.S : SIZE.M}
            value={FIND_OUT_MORE}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
