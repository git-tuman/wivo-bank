import { FOOTER, LIST_APP_STORES } from "../../shared/constants";
import useIsMobile from "../../shared/hooks/useIsMobile";
import FooterHeader from "./FooterHeader";
import Subscribe from "./Subscribe";
import Social from "./Social";
import Legal from "./Legal";
import AppStoreItem from "./AppStoreItem";
import FooterBg from "./FooterBg";

const FooterSection = () => {
  const isMobile = useIsMobile();

  return (
    <section id={FOOTER} className="footer-section">
      <div className="footer-container">
        <div className="footer-header-wrapper">
          <FooterHeader />

          {isMobile && <FooterBg />}
        </div>

        {!isMobile && <FooterBg />}

        <div className="footer-content">
          <div className="contacts-container">
            <Subscribe />

            <Social />
          </div>

          <div className="legal-and-app-store">
            <Legal />

            <div className="app-store-container">
              {LIST_APP_STORES.map((item, index) => (
                <AppStoreItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
