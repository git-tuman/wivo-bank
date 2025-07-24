import useIsMobile from "../../../hooks/useIsMobile";
import HandWithCard from "../../../assets/hand-with-card.png";
import HandWithCardMob from "../../../assets/hand-with-card-mob.png";
import { useEffect, useRef, useState } from "react";

const CardBg = () => {
  const isMobile = useIsMobile();

  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="card-bg" ref={ref}>
      <img
        className={`hand-with-card ${inView ? "animate" : ""}`}
        src={isMobile ? HandWithCardMob : HandWithCard}
        alt="debit card"
      />
    </div>
  );
};

export default CardBg;
