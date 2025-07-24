import HeroSection from "../components/hero-section/HeroSection";
import "./App.scss";
import MarqueeSection from "../components/marquee-section/MarqueeSection";
import CardSection from "../components/card-section/CardSection";

function App() {
  return (
    <div className="App">
      <HeroSection />

      <MarqueeSection />

      <CardSection />
    </div>
  );
}

export default App;
