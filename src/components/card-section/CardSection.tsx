import { CARD } from "../../constants";
import CardBg from "./backgrounds/CardBg";

const CardSection = () => {
  return (
    <section id={CARD} className="card-section">
      <CardBg />

      <div className="card-content">
        <h2>
          Spend anywhere with a{" "}
          <span className="accent">physical debit card</span>
        </h2>

        <p>
          Experience the ease of using WIVO, a digital bank that offers a
          physical debit card tailored for effortless daily transactions. This
          card comes equipped with an integrated RFID transponder to enable
          fast, contactless payments.
        </p>
      </div>
    </section>
  );
};

export default CardSection;
