import { LIST_COMPANIES } from "../../constants";
import CompanyItem from "./CompanyItem";

const CompanyItems = () => {
  return (
    <div className="company-items">
      {LIST_COMPANIES.map((comp, index) => (
        <CompanyItem key={index} comp={comp} />
      ))}
    </div>
  );
};

export default CompanyItems;
