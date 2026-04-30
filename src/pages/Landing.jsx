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
  hero: '/landing/hero.png',
  mask: '/landing/mask.png',
  drum: '/landing/drum.png',
  theatre: '/landing/theatre.png',
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