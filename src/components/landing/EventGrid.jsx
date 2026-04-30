import React from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import SectionDivider from './SectionDivider';

const EVENTS = [
  { name: 'Trăng Sáng', frontImage: '/cards/TrangSang-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Trăng Khuyết', frontImage: '/cards/TrangKhuyet-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Định Mệnh', frontImage: '/cards/DinhMenh-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Thảm Ngục', frontImage: '/cards/ThamNguc-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Hãm Oan', frontImage: '/cards/HamOan-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Hoán Đổi', frontImage: '/cards/HoanDoi-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Trẩy Hội', frontImage: '/cards/TrayHoi-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Say Rượu', frontImage: '/cards/SayRuou-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Thầy Bói', frontImage: '/cards/ThayBoi-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Diễn Chèo', frontImage: '/cards/DienCheo-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Chiếu Chèo', frontImage: '/cards/ChieuCheo-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Du Xuân', frontImage: '/cards/DuXuan-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Ẩn Danh', frontImage: '/cards/AnDanh-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Câm Lặng', frontImage: '/cards/CamLang-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Chia Lìa', frontImage: '/cards/ChiaLia-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Tái Hiện', frontImage: '/cards/TaiHien-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Tan Hội', frontImage: '/cards/TanHoi-back.png', backImage: '/cards/Back_card.png' },
  { name: 'Xướng Vai', frontImage: '/cards/XungVai-back.png', backImage: '/cards/Back_card.png' },
];

export default function EventGrid({ maskImage }) {
  return (
    <section id="events" className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#050301]">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 opacity-5 pointer-events-none">
        <img src={maskImage} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">Special Events</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Thẻ Sự Kiện</h2>
          <SectionDivider />
          <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            18 thẻ sự kiện đặc biệt - những biến cố bất ngờ xuất hiện trong mỗi vòng chơi. Thẻ được bốc ngẫu nhiên sau mỗi lần trời sáng.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
          {EVENTS.map((event, i) => (
            <EventCard key={event.name} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
