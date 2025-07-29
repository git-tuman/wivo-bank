import { LIST_LEGAL_LINKS } from "../../shared/constants";
import LegalItem from "./LegalItem";

const Legal = () => {
  return (
    <div className="legal-container">
      {LIST_LEGAL_LINKS.map((item, index) => (
        <LegalItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Legal;
