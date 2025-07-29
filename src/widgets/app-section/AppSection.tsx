import { APP } from "../../shared/constants";
import AppContent from "./AppContent";
import AppBg from "./AppBg";

const AppSection = () => {
  return (
    <section id={APP} className="app-section">
      <div className="app-container">
        <AppContent />

        <AppBg />
      </div>
    </section>
  );
};

export default AppSection;
