import { CARD_HEADING, CARD_PARAGRAPH } from "../../shared/constants";
import splitToLines from "../../shared/utils/splitToLines";

const CardContent = () => {
  const { firstLine, lastLine } = splitToLines(CARD_HEADING);

  return (
    <div className="card-content">
      <h2>
        {firstLine} <span className="accent">{lastLine}</span>
      </h2>

      <p>{CARD_PARAGRAPH}</p>
    </div>
  );
};

export default CardContent;
