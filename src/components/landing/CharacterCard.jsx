import React, { useState } from 'react';
import { motion } from 'framer-motion';

const rankDescriptions = {
  S: 'Tối Thượng',
  A: 'Cân Bằng',
  B: 'Phổ Thông',
  C: 'Hỗ Trợ',
  D: 'Phụ Thuộc',
};

const rankGradient = {
  S: 'linear-gradient(135deg, #B8860B, #FFD700, #D4AF37, #FFD700, #B8860B)',
  A: 'linear-gradient(135deg, #6B0000, #CC2222, #FF4444, #CC2222, #6B0000)',
  B: 'linear-gradient(135deg, #3B0066, #7B2FBE, #A855F7, #7B2FBE, #3B0066)',
  C: 'linear-gradient(135deg, #0C2340, #1E4D80, #3B82F6, #1E4D80, #0C2340)',
  D: 'linear-gradient(135deg, #1A1A1A, #4A5568, #718096, #4A5568, #1A1A1A)',
};

// Faction-based card background color matching the real cards
const factionCardBg = {
  'Phe Thiện': '#0a1a0a',
  'Phe Phá Rối': '#2a0a00',
  'Trung Lập': '#0a0a20',
  'Quản trò': '#1a0a00',
};

// Map each character to their illustration from the character handbook
// These are approximate page-based references to the character art
const CHARACTER_DATA = {
  // BẠN CÓ THỂ THÊM frontImage VÀ backImage VÀO TỪNG NHÂN VẬT NHƯ VÍ DỤ BÊN DƯỚI
  'Tên Hề': { emoji: '🎭', color: '#8B4513', faction: 'Quản trò', frontImage: '/cards/TenHe-back.png' },
  'Quan Âm Thị Kính': { emoji: '🙏', color: '#1a3a1a', faction: 'Phe Thiện', frontImage: 'cards/ThiKinh-back.png' },
  'Quan Án Sát': { emoji: '⚖️', color: '#1a2a1a', faction: 'Phe Thiện', frontImage: 'cards/QuanAmSat-back.png' },
  'Thị Mầu': { emoji: '🌸', color: '#1a0a2a', faction: 'Trung Lập', frontImage: 'cards/ThiMau-back.png' },
  'Kim Nham': { emoji: '📖', color: '#1a2a1a', faction: 'Phe Thiện', frontImage: 'cards/KimNham-back.png' },
  'Lưu Bình': { emoji: '🪭', color: '#1a2a1a', faction: 'Phe Thiện', frontImage: 'cards/LuuBinh-back.png' },
  'Trương Viên': { emoji: '⚔️', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/TruongVien-back.png' },
  'Thị Phương': { emoji: '🎵', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/ThiPhuong-back.png' },
  'Quỷ Đực': { emoji: '👺', color: '#2a0a00', faction: 'Phe Phá Rối', frontImage: 'cards/QuyDuc-back.png' },
  'Quỷ Cái': { emoji: '👹', color: '#2a0a00', faction: 'Phe Phá Rối', frontImage: 'cards/QuyCai-back.png' },
  'Châu Long': { emoji: '🌹', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/ChauLong-back.png' },
  'Tuần Ty': { emoji: '🎪', color: '#2a0a00', faction: 'Phe Phá Rối', frontImage: 'cards/TuanTy-back.png' },
  'Kẻ Phá Rối': { emoji: '🔮', color: '#2a0a00', faction: 'Phe Phá Rối', frontImage: 'cards/KePhaRoi-back.png' },
  'Trần Phương': { emoji: '🗡️', color: '#2a0a00', faction: 'Phe Phá Rối', frontImage: 'cards/TrangPhuong-back.png' },
  'Chu Mãi Thần': { emoji: '📚', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/ChuMaThan-back.png' },
  'Thiệt Thê': { emoji: '🪭', color: '#0a0a20', faction: 'Trung Lập', frontImage: 'cards/ThietThe-back.png' },
  'Từ Thức': { emoji: '✨', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/TuThuc-back.png' },
  'Giáng Hương': { emoji: '🌙', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/GiangHuong-back.png' },
  'Thiện Sĩ': { emoji: '📜', color: '#0a0a20', faction: 'Trung Lập', frontImage: 'cards/ThienSi-back.png' },
  'Dương Lễ': { emoji: '🏛️', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/DuongLe-back.png' },
  'Trinh Nguyên': { emoji: '💜', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/TrinhNguyen-back.png' },
  'Dân Làng': { emoji: '🏡', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/DangLang-back.png' },
  'Súy Vân': { emoji: '🌿', color: '#0a0a20', faction: 'Trung Lập', frontImage: 'cards/SuyVan-back.png' },
  'Tôn Mạnh': { emoji: '🏺', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/TonMang-back.png' },
  'Tôn Trọng': { emoji: '🏺', color: '#0a1a0a', faction: 'Phe Thiện', frontImage: 'cards/TonTrong-back.png' },
};

function GoldCorners() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 3 }}>
        {/* Outer gold frame */}
        <div className="absolute inset-[3px] rounded-sm" style={{
          border: '1px solid rgba(212,175,55,0.7)',
          boxShadow: 'inset 0 0 8px rgba(212,175,55,0.15), 0 0 4px rgba(212,175,55,0.3)',
        }} />
        {/* Inner thin frame */}
        <div className="absolute inset-[6px] rounded-sm" style={{
          border: '1px solid rgba(212,175,55,0.25)',
        }} />
        {/* Corner ornaments */}
        {[['top-[3px] left-[3px]', 'border-t-2 border-l-2 rounded-tl-sm'],
        ['top-[3px] right-[3px]', 'border-t-2 border-r-2 rounded-tr-sm'],
        ['bottom-[3px] left-[3px]', 'border-b-2 border-l-2 rounded-bl-sm'],
        ['bottom-[3px] right-[3px]', 'border-b-2 border-r-2 rounded-br-sm'],
        ].map(([pos, borders], i) => (
          <div key={i} className={`absolute ${pos} w-4 h-4 ${borders}`} style={{ borderColor: '#D4AF37' }} />
        ))}
        {/* Top center diamond */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45" style={{ background: '#D4AF37', opacity: 0.8 }} />
        {/* Bottom center diamond */}
        <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45" style={{ background: '#D4AF37', opacity: 0.8 }} />
      </div>
    </>
  );
}

export default function CharacterCard({ character, index }) {
  const [flipped, setFlipped] = useState(false);
  const bg = factionCardBg[character.faction] || '#0a0a0a';
  const charData = CHARACTER_DATA[character.name] || { emoji: '🎭', color: '#1a1a1a' };

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
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-sm overflow-hidden bg-cover bg-center"
          style={{
            backfaceVisibility: 'hidden',
            background: charData.frontImage ? `url('${charData.frontImage}') center/cover no-repeat` : bg
          }}
        >
          {!charData.frontImage && (
            <>
              <GoldCorners />

              {/* Rank badge top-left */}
              <div
                className="absolute top-[10px] left-[10px] z-10 w-6 h-6 flex items-center justify-center rounded-sm font-playfair font-black"
                style={{
                  background: rankGradient[character.rank],
                  fontSize: '13px',
                  color: '#0A0A00',
                  textShadow: '0 1px 2px rgba(255,255,255,0.4)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                }}
              >
                {character.rank}
              </div>

              {/* Character name top-right in calligraphic style */}
              <div className="absolute top-[8px] right-[10px] z-10 text-right max-w-[45%]">
                <p
                  className="font-playfair italic leading-[1.1]"
                  style={{ fontSize: '9px', color: '#F5DEB3', textShadow: '0 1px 4px rgba(0,0,0,0.9)' }}
                >
                  {character.name.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </p>
              </div>

              {/* Main art area */}
              <div
                className="absolute flex flex-col items-center justify-center"
                style={{
                  top: '22%',
                  left: '8%',
                  right: '8%',
                  bottom: '22%',
                }}
              >
                {/* Glow behind character */}
                <div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    background: character.faction === 'Phe Thiện'
                      ? 'radial-gradient(circle, #D4AF37 0%, transparent 70%)'
                      : character.faction === 'Phe Phá Rối'
                        ? 'radial-gradient(circle, #FF4444 0%, transparent 70%)'
                        : 'radial-gradient(circle, #9F7AEA 0%, transparent 70%)',
                  }}
                />
                {/* Character symbol / icon — large */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full"
                  style={{
                    width: '55%',
                    aspectRatio: '1',
                    background: 'rgba(212,175,55,0.07)',
                    border: '1px solid rgba(212,175,55,0.3)',
                    fontSize: 'clamp(18px, 5vw, 32px)',
                  }}
                >
                  {charData.emoji}
                </div>
                <div className="mt-1 font-playfair text-center font-semibold" style={{ fontSize: '8px', color: '#E8C97A', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
                  {character.name}
                </div>
              </div>

              {/* Decorative divider above faction label */}
              <div className="absolute bottom-[18%] left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />

              {/* Faction label bottom */}
              <div className="absolute bottom-[8%] left-0 right-0 flex justify-center z-10">
                <span
                  className="font-montserrat uppercase tracking-widest"
                  style={{ fontSize: '6px', color: '#D4AF37', textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
                >
                  {character.faction}
                </span>
              </div>

              {/* Subtle vignette */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
              }} />
            </>
          )}
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-sm overflow-hidden bg-cover bg-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: charData.backImage
              ? `url('${charData.backImage}') center/cover no-repeat`
              : 'linear-gradient(160deg, #1A0A02 0%, #0A0502 50%, #140800 100%)',
          }}
        >
          {!charData.backImage && (
            <>
              <GoldCorners />

              <div className="absolute inset-[8px] flex flex-col items-center justify-center gap-1">
                {/* Big rank */}
                <div
                  className="font-playfair font-black leading-none"
                  style={{
                    fontSize: 'clamp(22px, 6vw, 40px)',
                    background: rankGradient[character.rank],
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
                  }}
                >
                  {character.rank}
                </div>
                <p className="font-montserrat uppercase tracking-widest text-center" style={{ fontSize: '6px', color: '#D4AF37' }}>
                  {rankDescriptions[character.rank]}
                </p>

                <div className="w-8 h-px my-1" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

                <p className="font-playfair text-center font-semibold" style={{ fontSize: '8px', color: '#F5DEB3' }}>
                  {character.name}
                </p>

                {/* Power bars */}
                <div className="w-full mt-1 space-y-1.5 px-1">
                  {[
                    { label: 'Quyền', val: character.power },
                    { label: 'Mưu', val: character.deception },
                    { label: 'Đức', val: character.virtue },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-1">
                      <span className="font-montserrat w-6 shrink-0 text-right" style={{ fontSize: '6px', color: '#A0845A' }}>{stat.label}</span>
                      <div className="flex-1 rounded-full overflow-hidden" style={{ height: '4px', background: 'rgba(212,175,55,0.12)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${stat.val * 10}%`,
                            background: 'linear-gradient(90deg, #B8860B, #D4AF37, #FFD700)',
                            boxShadow: '0 0 4px rgba(212,175,55,0.6)',
                          }}
                        />
                      </div>
                      <span className="font-montserrat" style={{ fontSize: '6px', color: '#D4AF37' }}>{stat.val}</span>
                    </div>
                  ))}
                </div>

                {/* Faction badge */}
                <div
                  className="mt-1.5 px-2 py-0.5 rounded-sm font-montserrat uppercase tracking-widest"
                  style={{
                    fontSize: '5.5px',
                    color: '#D4AF37',
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.35)',
                  }}
                >
                  {character.faction}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}