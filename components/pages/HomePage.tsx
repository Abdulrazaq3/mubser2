
import React from 'react';
import Hero from '../Hero';
import WhyMubsir from '../WhyMubsir';
import Vision2030 from '../Vision2030';
import HowToUse from '../HowToUse';
import Team from '../Team';
import CallToAction from '../CallToAction';
import Pricing from '../Pricing';
import ChatTeaser from '../ChatTeaser';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onStartClick={() => onNavigate('sign-to-text')} />
      <ChatTeaser />
      <Vision2030 />
      <WhyMubsir />
      <HowToUse />
      <Pricing />
      <Team />
      <CallToAction onNavigate={onNavigate} />
    </>
  );
};

export default HomePage;
