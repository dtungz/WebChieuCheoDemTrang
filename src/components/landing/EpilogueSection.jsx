import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function EpilogueSection({ drumImage }) {
  return (
    <section id="buy" className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">Epilogue</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">Lời Kết</h2>
          <SectionDivider />

          <div className="mt-10 relative">
            <img src="/scale.png" alt="Scale" className="w-48 md:w-64 mx-auto mb-10 opacity-40" />

            <p className="font-playfair text-lg md:text-xl italic text-foreground/80 leading-relaxed">
              Khi những lá bài cuối cùng được lật mở và chân tướng được soi tỏ, cũng là lúc hành trình hóa thân
              vào thế giới của <span className="text-primary">"Chiếu chèo đêm trăng"</span> khép lại.
            </p>
            <p className="font-montserrat text-sm text-foreground/60 mt-6 leading-relaxed max-w-2xl mx-auto">
              Thông qua việc trải nghiệm số phận của những nhân vật như Thị Kính, Trương Viên hay Lưu Bình,...
              chúng tôi tin rằng nghệ thuật chèo đã trở thành những cảm xúc sống động, gần gũi trong tâm trí mỗi người chơi.
              Trò chơi có thể kết thúc, nhưng những bài học về lòng nhân nghĩa, sự trung trinh và niềm tin
              <em className="text-primary"> "ở hiền gặp lành"</em>, <em className="text-primary">“cái thiện sẽ chiến thắng cái ác” </em> vẫn
              còn mãi như một dòng chảy văn hóa âm thầm nuôi dưỡng tâm hồn con người.
            </p>

            <p className="font-montserrat text-xs text-muted-foreground mt-8">
              Xin chân thành cảm ơn bạn đã tham gia trò chơi và góp phần tôn vinh di sản văn hóa đặc sắc của dân tộc!
            </p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <a
              href="#"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-montserrat text-sm font-bold tracking-widest rounded-sm animate-pulse-gold hover:scale-105 transition-transform"
            >
              MUA GAME NGAY
            </a>
            <p className="font-montserrat text-xs text-muted-foreground mt-4">Sắp ra mắt — Đăng ký để nhận thông báo sớm nhất</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}