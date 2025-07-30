import { Logos } from "../../shared/types";

type CompanyItemProps = {
  comp: Logos;
};

const CompanyItem = ({ comp }: CompanyItemProps) => {
  return (
    <a href={comp.link} target="_blank" rel="noopener noreferrer">
      <img src={comp.logo} alt={`logo ${comp.name}`} loading="lazy" />
    </a>
  );
};

export default CompanyItem;
