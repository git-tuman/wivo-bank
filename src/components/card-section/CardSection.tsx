import { CARD } from "../../constants";
import CardBg from "./CardBg";
import CardContent from "./CardContent";

const CardSection = () => {
  return (
    <section id={CARD} className="card-section">
      <CardBg />

      <CardContent />
    </section>
  );
};

export default CardSection;
