import { CUSTOMIZE } from "../../constants";
import CustomizeBg from "./CustomizeBg";
import CustomizeContent from "./CustomizeContent";

const CustomizeSection = () => {
  return (
    <section id={CUSTOMIZE} className="customize-section">
      <CustomizeContent />

      <CustomizeBg />
    </section>
  );
};

export default CustomizeSection;
