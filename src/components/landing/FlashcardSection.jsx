import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import SectionDivider from './SectionDivider';

const DECK_LINES = [
  { front: '"Chiềng làng chiềng chạ, Thượng hạ Tây Đông, Con gái phú ông, Tên là Mầu Thị..."', back: 'Lời của thằng Mõ khi loan tin Thị Mầu chửa hoang — Vở Quan Âm Thị Kính' },
  { front: '"Tôi Thị Mầu con gái phú ông, cha mẹ tôi tôn kính một lòng"', back: 'Lời thoại của Thị Mầu ở phân cảnh giới thiệu' },
  { front: '"Nam mô a di đà phật, tôi niệm nam mô a di đà phật"', back: 'Lời tụng kinh của Thị Kính' },
  { front: '"Đạo vợ chồng trăm năm kết tóc, Trước đẹp mặt chàng, sau đẹp mặt ta"', back: 'Thị Kính với chồng Thiện Sĩ — trích đoạn "Nỗi oan hại chồng"' },
  { front: '"Lấy chồng cho con là phải kén tông, Mà gả vợ cho con là phải kén giống"', back: 'Lời mạt sát của Sùng bà với Thị Kính' },
  { front: '"Trình lạy mẹ, biên cương có giặc, Con phải ra phụng mệnh quân vương..."', back: 'Lời Trương Viên từ biệt mẹ lên đường đánh giặc' },
  { front: '"Trương Viên chàng ơi, chàng đi muôn dặm ải văng nơi xa..."', back: 'Thị Phương trong phân cảnh chia ly chồng' },
  { front: '"Phần tôi đành chịu mù loà, Xin nguyện dâng mắt mình cứu mẹ"', back: 'Thị Phương hy sinh đôi mắt để cứu mẹ chồng' },
  { front: '"Mười tám năm ròng nằm gai nếm mật, Lòng nhớ thương ngùn ngụt lúc nào nguôi"', back: 'Trương Viên nhớ mẹ và vợ sau 18 năm binh lửa' },
  { front: '"Chị em ơi, tôi ra đây có phải xưng danh không nhỉ?"', back: 'Lời tự xưng danh nổi tiếng của Xúy Vân — "Xúy Vân giả dại"' },
];

const DECK_MELODIES = [
  { front: '"Nàng ở nhà tần tảo sớm khuya, Trực phòng không là phận nữ nhi..."', back: 'Kim Nham với Xúy Vân — ước nguyện thoả chí tang bồng' },
  { front: '"Chẳng phải thiếp muốn tranh giành ngôi thứ, Mà thiếp chỉ lo gìn giữ chút tình..."', back: 'Suý Vân trách chồng Kim Nham khi niềm tin bị phản bội' },
  { front: '"Tôi nay đã ngán sự đời, Chỉ mong gặp được một người tri âm..."', back: 'Trần Phương hứa hẹn giả tạo với Suý Vân' },
  { front: '"Thấy chữ đề là quán Nghinh Hương, Quán mát mẻ, tôi vào chơi tạm trú..."', back: 'Lưu Bình giãi tỏ tấm lòng khi gặp Châu Long' },
  { front: '"Hành lý này thiếp lĩnh, thiếp mang, Thiếp xin theo về cho đến gia trang..."', back: 'Châu Long xin Lưu Bình cho theo về sửa túi nâng khăn' },
  { front: '"Ai ơi chớ lấy học trò, Dài lưng tốn vải, ăn no lại nằm"', back: 'Thiệt Thê chê bai chồng Chu Mãi Thần' },
  { front: '"Em cứ sống như mây gặp gió, Đời bướm hoa chẳng nghĩ nông sâu..."', back: 'Thiệt Thê bộc lộ tâm hồn lãng mạn, vô ưu' },
  { front: '"Nhác thấy sơn thanh, thuỷ tú, Chợt nhìn xem nhân kiệt, địa linh..."', back: 'Từ Thức chèo thuyền qua cửa Thần phù' },
  { front: '"Dẫu có phải lặn lội thân mưa thân cò vất vả..."', back: 'Trinh Nguyên — tấm lòng cao thượng của người mẹ' },
  { front: '"Mười tám năm ròng nằm gai nếm mật..."', back: 'Trương Viên nhớ thương tới mẹ và vợ' },
];

function FlashcardDeck({ title, subtitle, cards, deckColor }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => { setFlipped(false); setTimeout(() => setIndex((i) => (i + 1) % cards.length), 150); };
  const prev = () => { setFlipped(false); setTimeout(() => setIndex((i) => (i - 1 + cards.length) % cards.length), 150); };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-1">{title}</h3>
      <p className="font-montserrat text-xs text-primary/60 mb-6">{subtitle}</p>

      {/* Card */}
      <div
        className="w-full max-w-sm aspect-[4/3] cursor-pointer mb-4"
        style={{ perspective: '1200px' }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="relative w-full h-full transition-transform duration-700"
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front */}
          <div
            className={`absolute inset-0 rounded-lg border ${deckColor} p-6 flex items-center justify-center`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <p className="font-playfair text-sm md:text-base text-primary italic text-center leading-relaxed">
              {cards[index].front}
            </p>
          </div>
          {/* Back */}
          <div
            className="absolute inset-0 rounded-lg border border-primary/40 bg-card p-6 flex items-center justify-center"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="font-montserrat text-sm text-foreground/80 text-center leading-relaxed">
              {cards[index].back}
            </p>
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
            href="https://media.base44.com/files/public/user_69e39422b6ba73e7f55d8606/af5608ed5_6FLASHCARDCACCAUTHOAICHEO84x36cm.pdf"
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