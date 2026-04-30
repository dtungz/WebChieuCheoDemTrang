import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import SectionDivider from './SectionDivider';

const DECK_LINES = [
  { front: "/flashcard1/0.png", back: "/flashcard1/0.1.png" },
  { front: "/flashcard1/1.png", back: "/flashcard1/1.1.png" },
  { front: "/flashcard1/2.png", back: "/flashcard1/2.1.png" },
  { front: "/flashcard1/3.png", back: "/flashcard1/3.1.png" },
  { front: "/flashcard1/4.png", back: "/flashcard1/4.1.png" },
  { front: "/flashcard1/5.png", back: "/flashcard1/5.1.png" },
  { front: "/flashcard1/6.png", back: "/flashcard1/6.1.png" },
  { front: "/flashcard1/7.png", back: "/flashcard1/7.1.png" },
  { front: "/flashcard1/8.png", back: "/flashcard1/8.1.png" },
  { front: "/flashcard1/9.png", back: "/flashcard1/9.1.png" },
  { front: "/flashcard1/10.png", back: "/flashcard1/10.1.png" },
  { front: "/flashcard1/11.png", back: "/flashcard1/11.1.png" },
  { front: "/flashcard1/12.png", back: "/flashcard1/12.2.png" },
  { front: "/flashcard1/13.png", back: "/flashcard1/13.1.png" },
  { front: "/flashcard1/14.png", back: "/flashcard1/14.1.png" },
  { front: "/flashcard1/15.png", back: "/flashcard1/15.1.png" },
  { front: "/flashcard1/16.png", back: "/flashcard1/16.1.png" },
  { front: "/flashcard1/17.png", back: "/flashcard1/17.1.png" },
  { front: "/flashcard1/18.png", back: "/flashcard1/18.1.png" },
  { front: "/flashcard1/19.png", back: "/flashcard1/19.1.png" },
  { front: "/flashcard1/20.png", back: "/flashcard1/20.1.png" },
  { front: "/flashcard1/21.png", back: "/flashcard1/21.1.png" },
  { front: "/flashcard1/22.png", back: "/flashcard1/22.1.png" },
  { front: "/flashcard1/23.png", back: "/flashcard1/23.1.png" },
  { front: "/flashcard1/24.png", back: "/flashcard1/24.1.png" },
  { front: "/flashcard1/25.png", back: "/flashcard1/25.1.png" },
  { front: "/flashcard1/26.png", back: "/flashcard1/26.1.png" },
  { front: "/flashcard1/27.png", back: "/flashcard1/27.1.png" },
];

const DECK_MELODIES = [
  { front: "/flashcard2/0.png", back: "/flashcard2/0.1.png" },
  { front: "/flashcard2/1.png", back: "/flashcard2/1.1.png" },
  { front: "/flashcard2/2.png", back: "/flashcard2/2.1.png" },
  { front: "/flashcard2/3.png", back: "/flashcard2/3.1.png" },
  { front: "/flashcard2/4.png", back: "/flashcard2/4.1.png" },
  { front: "/flashcard2/5.png", back: "/flashcard2/5.1.png" },
  { front: "/flashcard2/6.png", back: "/flashcard2/6.1.png" },
  { front: "/flashcard2/7.png", back: "/flashcard2/7.1.png" },
  { front: "/flashcard2/8.png", back: "/flashcard2/8.1.png" },
  { front: "/flashcard2/9.png", back: "/flashcard2/9.1.png" },
  { front: "/flashcard2/10.png", back: "/flashcard2/10.1.png" },
  { front: "/flashcard2/11.png", back: "/flashcard2/11.1.png" },
  { front: "/flashcard2/12.png", back: "/flashcard2/12.1.png" },
  { front: "/flashcard2/13.png", back: "/flashcard2/13.1.png" },
  { front: "/flashcard2/14.png", back: "/flashcard2/14.1.png" },
  { front: "/flashcard2/15.png", back: "/flashcard2/15.1.png" },
  { front: "/flashcard2/16.png", back: "/flashcard2/16.1.png" },
  { front: "/flashcard2/17.png", back: "/flashcard2/17.1.png" },
  { front: "/flashcard2/18.png", back: "/flashcard2/18.1.png" },
  { front: "/flashcard2/19.png", back: "/flashcard2/19.1.png" },
];
const isImage = (str) => typeof str === 'string' && (str.startsWith('http') || str.match(/\.(jpeg|jpg|gif|png|svg|webp)/i));

function FlashcardDeck({ title, subtitle, cards, deckColor }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [frontRatio, setFrontRatio] = useState('4/3');
  const [backRatio, setBackRatio] = useState('4/3');

  useEffect(() => {
    if (!isImage(cards[index].front)) setFrontRatio('4/3');
    if (!isImage(cards[index].back)) setBackRatio('4/3');
  }, [index, cards]);

  const currentRatio = flipped ? backRatio : frontRatio;
  const next = () => { setFlipped(false); setTimeout(() => setIndex((i) => (i + 1) % cards.length), 150); };
  const prev = () => { setFlipped(false); setTimeout(() => setIndex((i) => (i - 1 + cards.length) % cards.length), 150); };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-1">{title}</h3>
      <p className="font-montserrat text-xs text-primary/60 mb-6">{subtitle}</p>

      {/* Card */}
      <div
        className="w-full max-w-xl cursor-pointer mb-4"
        style={{ perspective: '1200px', aspectRatio: currentRatio }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-lg border ${deckColor} ${isImage(cards[index].front) ? 'p-0 overflow-hidden' : 'p-6'} flex items-center justify-center`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            {isImage(cards[index].front) ? (
              <img
                src={cards[index].front}
                alt="Front"
                className="w-full h-full object-cover"
                onLoad={(e) => setFrontRatio(`${e.currentTarget.naturalWidth}/${e.currentTarget.naturalHeight}`)}
              />
            ) : (
              <p className="font-playfair text-sm md:text-base text-primary italic text-center leading-relaxed">
                {cards[index].front}
              </p>
            )}
          </div>
          {/* Back */}
          <div
            className={`absolute inset-0 rounded-lg border border-primary/40 bg-card ${isImage(cards[index].back) ? 'p-0 overflow-hidden' : 'p-6'} flex items-center justify-center`}
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            {isImage(cards[index].back) ? (
              <img
                src={cards[index].back}
                alt="Back"
                className="w-full h-full object-cover"
                onLoad={(e) => setBackRatio(`${e.currentTarget.naturalWidth}/${e.currentTarget.naturalHeight}`)}
              />
            ) : (
              <p className="font-montserrat text-sm text-foreground/80 text-center leading-relaxed">
                {cards[index].back}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button onClick={prev} className="p-2 border border-border rounded-full hover:border-primary/50 text-foreground/60 hover:text-primary transition-colors">
          <ChevronLeft size={18} />
        </button>
        <span className="font-montserrat text-xs text-muted-foreground">{index + 1} / {cards.length}</span>
        <button onClick={next} className="p-2 border border-border rounded-full hover:border-primary/50 text-foreground/60 hover:text-primary transition-colors">
          <ChevronRight size={18} />
        </button>
        <button onClick={() => setFlipped(!flipped)} className="p-2 border border-border rounded-full hover:border-primary/50 text-foreground/60 hover:text-primary transition-colors">
          <RotateCcw size={18} />
        </button>
      </div>
    </div>
  );
}

export default function FlashcardSection() {
  return (
    <section id="flashcards" className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">Flashcard Chamber</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Flashcards</h2>
          <SectionDivider />
          <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            Nhấn vào thẻ để lật. Hai bộ thẻ giúp bạn khám phá lời thoại và làn điệu chèo cổ.
          </p>
          <a
            href="/docs/Flashcards.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-montserrat text-xs text-primary/70 hover:text-primary underline"
          >
            Tải bộ Flashcard đầy đủ (PDF) →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FlashcardDeck
            title="Lời Thoại Chèo Cổ"
            subtitle="Deck 1 · 10 thẻ"
            cards={DECK_LINES}
            deckColor="border-secondary bg-gradient-to-br from-secondary/30 via-card to-card"
          />
          <FlashcardDeck
            title="Làn Điệu & Câu Thoại"
            subtitle="Deck 2 · 10 thẻ"
            cards={DECK_MELODIES}
            deckColor="border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card"
          />
        </div>
      </div>
    </section>
  );
}