import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import CharacterGrid from '../components/landing/CharacterGrid';
import EventGrid from '../components/landing/EventGrid';
import RulesSection from '../components/landing/RulesSection';
import TheatreSection from '../components/landing/TheatreSection';
import FlashcardSection from '../components/landing/FlashcardSection';
import EpilogueSection from '../components/landing/EpilogueSection';
import Footer from '../components/landing/Footer';

const IMAGES = {
  hero: 'https://media.base44.com/images/public/69e8edc94c04138d00325c50/370038dfc_generated_0d67c35f.png',
  mask: 'https://media.base44.com/images/public/69e8edc94c04138d00325c50/9cfe74c1b_generated_07fda2cc.png',
  drum: 'https://media.base44.com/images/public/69e8edc94c04138d00325c50/a74ecb8e5_generated_2f1310fe.png',
  theatre: 'https://media.base44.com/images/public/69e8edc94c04138d00325c50/9197d3bb9_generated_8bfd7161.png',
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      <HeroSection heroImage={IMAGES.hero} />
      <CharacterGrid maskImage={IMAGES.mask} />
      <EventGrid maskImage={IMAGES.mask} />
      <RulesSection drumImage={IMAGES.drum} />
      <TheatreSection bgImage={IMAGES.theatre} />
      <FlashcardSection />
      <EpilogueSection drumImage={IMAGES.drum} />
      <Footer />
    </div>
  );
}