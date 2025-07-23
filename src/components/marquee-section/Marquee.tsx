import CompanyItems from "./CompanyItems";

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="company-container">
        <CompanyItems />

        <CompanyItems />
      </div>
    </div>
  );
};

export default Marquee;
