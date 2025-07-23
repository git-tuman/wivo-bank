import { LINK_BONO } from "../../constants";
import BonoLogo from "../../assets/bono_logo.svg";

const Marquee = () => {
  const logos = Array.from({ length: 10 });

  return (
    <div className="marquee">
      {logos.map((_, index) => (
        <a
          key={index}
          href={LINK_BONO}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BonoLogo} alt="logo" />
        </a>
      ))}
    </div>
  );
};

export default Marquee;
