import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Misty Vietnamese village under moonlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <p className="font-montserrat text-xs md:text-sm tracking-[0.4em] text-primary/80 uppercase mb-6">
            Trò chơi nhập vai trải nghiệm
          </p>
          
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl font-bold text-primary leading-none mb-4">
            Chiếu Chèo
          </h1>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-6xl font-light text-foreground italic mb-12">
            Đêm Trăng
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          <h3 className="font-playfair text-xl md:text-2xl text-primary/90 italic mb-6">Lời Nói Đầu</h3>
          <p className="font-montserrat text-sm md:text-base leading-relaxed text-foreground/80">
            Nghệ thuật chèo là một loại hình sân khấu truyền thống đặc sắc, kết tinh những giá trị lịch sử, 
            văn hóa và nghệ thuật của dân tộc Việt Nam. Trước làn sóng toàn cầu hóa và sự bùng nổ của 
            các loại hình giải trí hiện đại, chúng tôi đã ấp ủ ý tưởng đưa chèo đến gần hơn với cộng đồng 
            thông qua dự án trò chơi trải nghiệm này.
          </p>
          <p className="font-montserrat text-sm md:text-base leading-relaxed text-foreground/60 mt-4">
            Chúng tôi hi vọng <span className="text-primary italic">"Chiếu chèo đêm trăng"</span> sẽ trở thành nhịp cầu 
            giúp các bạn trẻ thêm yêu và tự hào về những nét đẹp văn hóa truyền thống của quê hương.
          </p>
        </motion.div>

        <motion.a 
          href="#characters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="inline-block mt-16 animate-float"
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.a>
      </div>
    </section>
  );
}