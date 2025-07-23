import { Company } from "../../types";

type CompanyItemProps = {
  comp: Company;
};

const CompanyItem = ({ comp }: CompanyItemProps) => {
  return (
    <a href={comp.link} target="_blank" rel="noopener noreferrer">
      <img src={comp.logo} alt={`logo ${comp.name}`} />
    </a>
  );
};

export default CompanyItem;
