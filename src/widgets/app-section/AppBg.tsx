import useIsMobile from "../../shared/hooks/useIsMobile";
import PhoneScreen from "../../shared/assets/phone-screen.png";
import PhoneScreenMob from "../../shared/assets/phone-screen-mob.png";
import {
  APP_TOOLTIP_BALANCE_PARAGRAPH,
  APP_TOOLTIP_BALANCE_SPAN,
  APP_TOOLTIP_BUTTON_PARAGRAPH,
  APP_TOOLTIP_BUTTON_SPAN,
} from "../../shared/constants";

const AppBg = () => {
  const isMobile = useIsMobile();

  return (
    <div className="app-bg">
      <div className="container-phone-screen">
        <img
          src={isMobile ? PhoneScreenMob : PhoneScreen}
          alt="phone screen"
          loading="lazy"
        />

        <div className="tooltip balance">
          <p>{APP_TOOLTIP_BALANCE_PARAGRAPH}</p>

          <span>{APP_TOOLTIP_BALANCE_SPAN}</span>
        </div>

        <div className="tooltip button">
          <p>{APP_TOOLTIP_BUTTON_PARAGRAPH}</p>

          <span>{APP_TOOLTIP_BUTTON_SPAN}</span>
        </div>
      </div>
    </div>
  );
};

export default AppBg;
