import {
  FOLLOW_US,
  LIST_SOCIAL,
  LIST_SOCIAL_MOB,
} from "../../shared/constants";
import useIsMobile from "../../shared/hooks/useIsMobile";
import SocialItem from "../../shared/ui/SocialItem";

const Social = () => {
  const isMobile = useIsMobile();

  return (
    <div className="social-wrapper">
      <p>{FOLLOW_US}</p>

      <div className="social-container">
        {(isMobile ? LIST_SOCIAL_MOB : LIST_SOCIAL).map((item, index) => (
          <SocialItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Social;
