import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CharacterCard from './CharacterCard';
import SectionDivider from './SectionDivider';

const CHARACTERS = [
  { name: 'Tên Hề', rank: 'S', faction: 'Quản trò', power: 10, deception: 5, virtue: 8 },
  { name: 'Quan Âm Thị Kính', rank: 'S', faction: 'Phe Thiện', power: 9, deception: 3, virtue: 10 },
  { name: 'Quan Án Sát', rank: 'S', faction: 'Phe Thiện', power: 10, deception: 4, virtue: 9 },
  { name: 'Thị Mầu', rank: 'A', faction: 'Trung Lập', power: 7, deception: 9, virtue: 4 },
  { name: 'Kim Nham', rank: 'A', faction: 'Phe Thiện', power: 8, deception: 5, virtue: 7 },
  { name: 'Lưu Bình', rank: 'A', faction: 'Phe Thiện', power: 6, deception: 4, virtue: 8 },
  { name: 'Trương Viên', rank: 'A', faction: 'Phe Thiện', power: 8, deception: 3, virtue: 9 },
  { name: 'Thị Phương', rank: 'A', faction: 'Phe Thiện', power: 7, deception: 2, virtue: 10 },
  { name: 'Quỷ Đực', rank: 'A', faction: 'Phe Phá Rối', power: 8, deception: 9, virtue: 1 },
  { name: 'Quỷ Cái', rank: 'A', faction: 'Phe Phá Rối', power: 7, deception: 9, virtue: 1 },
  { name: 'Châu Long', rank: 'B', faction: 'Phe Thiện', power: 5, deception: 3, virtue: 9 },
  { name: 'Tuần Ty', rank: 'B', faction: 'Phe Phá Rối', power: 6, deception: 7, virtue: 2 },
  { name: 'Kẻ Phá Rối', rank: 'B', faction: 'Phe Phá Rối', power: 7, deception: 8, virtue: 1 },
  { name: 'Trần Phương', rank: 'B', faction: 'Phe Phá Rối', power: 6, deception: 8, virtue: 2 },
  { name: 'Chu Mãi Thần', rank: 'B', faction: 'Phe Thiện', power: 5, deception: 4, virtue: 7 },
  { name: 'Thiệt Thê', rank: 'B', faction: 'Trung Lập', power: 4, deception: 6, virtue: 5 },
  { name: 'Từ Thức', rank: 'B', faction: 'Phe Thiện', power: 5, deception: 3, virtue: 8 },
  { name: 'Giáng Hương', rank: 'C', faction: 'Phe Thiện', power: 4, deception: 2, virtue: 7 },
  { name: 'Thiện Sĩ', rank: 'C', faction: 'Trung Lập', power: 4, deception: 5, virtue: 6 },
  { name: 'Dương Lễ', rank: 'C', faction: 'Phe Thiện', power: 5, deception: 3, virtue: 7 },
  { name: 'Trinh Nguyên', rank: 'C', faction: 'Phe Thiện', power: 3, deception: 2, virtue: 8 },
  { name: 'Dân Làng', rank: 'C', faction: 'Phe Thiện', power: 2, deception: 2, virtue: 6 },
  { name: 'Xúy Vân', rank: 'D', faction: 'Trung Lập', power: 3, deception: 6, virtue: 4 },
  { name: 'Tôn Mạnh', rank: 'D', faction: 'Phe Thiện', power: 3, deception: 2, virtue: 5 },
  { name: 'Tôn Trọng', rank: 'D', faction: 'Phe Thiện', power: 3, deception: 2, virtue: 5 },
];

const FACTIONS = ['Tất cả', 'Phe Thiện', 'Phe Phá Rối', 'Trung Lập', 'Quản trò'];

export default function CharacterGrid({ maskImage }) {
  const [filter, setFilter] = useState('Tất cả');
  const filtered = filter === 'Tất cả' ? CHARACTERS : CHARACTERS.filter(c => c.faction === filter);

  return (
    <section id="characters" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 opacity-5">
        <img src={maskImage} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">The Ensemble</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Hệ Thống Nhân Vật</h2>
          <SectionDivider />
          <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            25 vai diễn từ 7 vở chèo nổi tiếng. Nhấn vào lá bài để xem thứ hạng và chỉ số sức mạnh.
          </p>
        </motion.div>

        {/* Faction filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FACTIONS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 font-montserrat text-xs tracking-wider rounded-sm border transition-all ${filter === f
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {filtered.map((char, i) => (
            <CharacterCard key={char.name} character={char} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}