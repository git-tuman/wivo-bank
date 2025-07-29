import useIsMobile from "../../shared/hooks/useIsMobile";
import { Nav } from "../../shared/types";

type TypeLegalItem = {
  item: Nav;
  index: number;
};

const LegalItem = ({ item, index }: TypeLegalItem) => {
  const isMobile = useIsMobile();

  return (
    <a
      className={
        isMobile ? `link S ${index === 0 ? "accent" : ""}` : "link S accent"
      }
      href={item.href}
    >
      {item.value}
    </a>
  );
};

export default LegalItem;
