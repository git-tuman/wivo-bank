import ButtonPrimary from "../shared/ButtonPrimary";
import useIsMobile from "../../hooks/useIsMobile";
import { COLOR, FAQS, GET_STARTED, SIZE } from "../../constants";
import Accordion from "./Accordion";
import Info from "./Info";

const FAQsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id={FAQS} className="faqs-section">
      <div className="faqs-content">
        <Info />

        <div className="faqs-content-accordion">
          <Accordion />

          <div>
            <ButtonPrimary
              size={isMobile ? SIZE.S : SIZE.M}
              color={COLOR.WHITE}
              value={GET_STARTED}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
