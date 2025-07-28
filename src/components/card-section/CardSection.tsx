import { CARD } from "../../constants";
import CardBg from "./CardBg";
import CardContent from "./CardContent";

const CardSection = () => {
  return (
    <section id={CARD} className="card-section">
      <div className="card-container">
        <CardBg />

        <CardContent />
      </div>
    </section>
  );
};

export default CardSection;
