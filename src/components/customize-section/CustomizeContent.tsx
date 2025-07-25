import { CUSTOMIZE_HEADING, CUSTOMIZE_PARAGRAPH } from "../../constants";
import splitToLines from "../shared/splitToLines";

const CustomizeContent = () => {
  const { firstLine, lastLine } = splitToLines(CUSTOMIZE_HEADING);

  return (
    <div className="customize-content">
      <h1>
        {firstLine} <span className="accent">{lastLine}</span>
      </h1>

      <p>{CUSTOMIZE_PARAGRAPH}</p>
    </div>
  );
};

export default CustomizeContent;
