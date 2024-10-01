import About from "./components/About";
import Brands from "./components/Brands";
import CtaSection from "./components/CtaSection";
import HeroVideoSection from "./components/Hero";
import Products from "./components/Products";

const App = () => {
  return (
    <div>
      <HeroVideoSection />
      <CtaSection />
      <Products />
      <About />
      <Brands />
    </div>
  );
};

export default App;
