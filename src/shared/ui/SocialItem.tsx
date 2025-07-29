import { SIZE } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { Logos } from "../types";

type TypeSocialItem = {
  item: Logos;
};

const SocialItem = ({ item }: TypeSocialItem) => {
  const isMobile = useIsMobile();

  return (
    <a
      href={item.link}
      className={`social-item ${isMobile ? SIZE.S : SIZE.M}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={item.logo} alt={item.name} />
    </a>
  );
};

export default SocialItem;
