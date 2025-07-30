import useIsMobile from "../../shared/hooks/useIsMobile";
import { useEffect, useRef } from "react";
import DropdownArrowDown from "../../shared/assets/dropdown-arrow-down.svg";
import DropdownArrowDownMob from "../../shared/assets/dropdown-arrow-down-mob.svg";
import DropdownArrowTop from "../../shared/assets/dropdown-arrow-top.svg";
import DropdownArrowTopMob from "../../shared/assets/dropdown-arrow-top-mob.svg";
import { ItemAccordion } from "../../shared/types";

type TypeAccordionItem = {
  item: ItemAccordion;
  active: boolean;
  callback: () => void;
};

const AccordionItem = ({ item, active, callback }: TypeAccordionItem) => {
  const isMobile = useIsMobile();
  const icon = isMobile
    ? active
      ? DropdownArrowTopMob
      : DropdownArrowDownMob
    : active
    ? DropdownArrowTop
    : DropdownArrowDown;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = active
        ? `${ref.current.scrollHeight}px`
        : "0px";
    }
  }, [active]);

  return (
    <div className="accordion-item-container" onClick={callback}>
      <div className={`accordion-item ${active ? "active" : ""}`}>
        <h3>{item.head}</h3>

        <p ref={ref} className="accordion-content">
          {item.info}
        </p>
      </div>

      <div>
        <button className="accordion-item-button">
          <img src={icon} alt="dropdown arrow" loading="lazy" />
        </button>
      </div>
    </div>
  );
};

export default AccordionItem;
