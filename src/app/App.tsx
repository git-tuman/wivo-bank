import HeroSection from "../widgets/hero-section/HeroSection";
import "./App.scss";
import MarqueeSection from "../widgets/marquee-section/MarqueeSection";
import CardSection from "../widgets/card-section/CardSection";
import AppSection from "../widgets/app-section/AppSection";
import CustomizeSection from "../widgets/customize-section/CustomizeSection";
import FAQsSection from "../widgets/FAQs-section/FAQsSection";
import FooterSection from "../widgets/footer-section/FooterSection";

function App() {
  return (
    <div className="App">
      <HeroSection />

      <MarqueeSection />

      <CardSection />

      <AppSection />

      <CustomizeSection />

      <FAQsSection />

      <FooterSection />
    </div>
  );
}

export default App;
