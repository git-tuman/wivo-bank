import useIsMobile from "../../../hooks/useIsMobile";
import HandWithCard from "../../../assets/hand-with-card.png";
import HandWithCardMob from "../../../assets/hand-with-card-mob.png";

const CardBg = () => {
  const isMobile = useIsMobile();

  return (
    <div className="card-bg">
      <img
        className="hand-with-card"
        src={isMobile ? HandWithCardMob : HandWithCard}
        alt="debit card"
      />
    </div>
  );
};

export default CardBg;
