import { useState } from "react";
import { LIST_ACCORDION_ITEMS } from "../../constants";
import FAQsAccordionItem from "./AccordionItem";

const Accordion = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  const handleClick = (index: number) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(-1);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <div className="faqs-accordion-container">
      {LIST_ACCORDION_ITEMS.map((item, index) => (
        <FAQsAccordionItem
          key={index}
          item={item}
          active={activeItemIndex === index}
          callback={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
