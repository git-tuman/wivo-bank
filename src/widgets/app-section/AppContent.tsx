import { APP_HEADING, APP_PARAGRAPH } from "../../shared/constants";
import splitToLines from "../../shared/utils/splitToLines";

const AppContent = () => {
  const { firstLine, lastLine } = splitToLines(APP_HEADING);

  return (
    <div className="app-content">
      <h2>
        {firstLine} <span className="accent">{lastLine}</span>
      </h2>

      <p>{APP_PARAGRAPH}</p>
    </div>
  );
};

export default AppContent;
