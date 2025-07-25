import HeroSection from "../components/hero-section/HeroSection";
import "./App.scss";
import MarqueeSection from "../components/marquee-section/MarqueeSection";
import CardSection from "../components/card-section/CardSection";
import AppSection from "../components/app-section/AppSection";

function App() {
  return (
    <div className="App">
      <HeroSection />

      <MarqueeSection />

      <CardSection />

      <AppSection />
    </div>
  );
}

export default App;
