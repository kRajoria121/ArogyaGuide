import HeroSection from "./Components/HeroSection";
import FeatureSection from "./Components/FeatureSection";

import { Helmet } from "react-helmet";
import Features from "./Components/Features";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto md:pt-5 px-6">
      <Helmet>
        <title>ArogyaGuide.ai</title>
      </Helmet>
      <HeroSection />
      <FeatureSection />
      <Features />
      <br />
      
    </div>
  );
};

export default Home;
