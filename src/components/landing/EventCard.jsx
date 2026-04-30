import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EventCard({ event, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          aspectRatio: '67/96',
        }}
      >
        {/* FRONT — event image */}
        <div
          className="absolute inset-0 rounded-sm bg-black overflow-hidden shadow-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={event.frontImage}
            alt={event.name}
            className="h-full w-full object-cover"
            draggable={false}
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* BACK — alternative event image */}
        <div
          className="absolute inset-0 rounded-sm bg-black overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={event.backImage}
            alt={`${event.name} - Back`}
            className="h-full w-full object-cover"
            draggable={false}
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

      </div>
    </motion.div>
  );
}
