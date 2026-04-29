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
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-24 pb-10 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <p className="mb-4 font-montserrat text-xs uppercase tracking-[0.4em] text-primary/80 md:mb-6 md:text-sm">
            Trò chơi nhập vai trải nghiệm
          </p>

          {/* Crop away logo canvas padding so visual spacing stays compact. */}
          <div className="mx-auto mb-6 w-[min(92vw,760px)] overflow-hidden aspect-[540/371]">
            <img
              src="/logo.png"
              alt="Chiếu Chèo Đêm Trăng Logo"
              className="h-full w-full object-cover object-center drop-shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mx-auto mb-6 h-px w-16 bg-primary" />
          <h3 className="mb-4 font-playfair text-xl italic text-primary/90 md:text-2xl">Lời Nói Đầu</h3>
          <p className="mx-auto max-w-[68ch] font-montserrat text-sm leading-relaxed text-foreground/80 md:text-base">
            Nghệ thuật chèo là một loại hình sân khấu truyền thống đặc sắc, kết tinh những giá trị lịch sử,
            văn hóa và nghệ thuật của dân tộc Việt Nam. Trước làn sóng toàn cầu hóa và sự bùng nổ của
            các loại hình giải trí hiện đại, chúng tôi đã ấp ủ ý tưởng đưa chèo đến gần hơn với cộng đồng
            thông qua dự án trò chơi trải nghiệm này.
          </p>
          <p className="mx-auto mt-3 max-w-[68ch] font-montserrat text-sm leading-relaxed text-foreground/60 md:text-base">
            Chúng tôi hi vọng <span className="text-primary italic">"Chiếu chèo đêm trăng"</span> sẽ trở thành nhịp cầu
            giúp các bạn trẻ thêm yêu và tự hào về những nét đẹp văn hóa truyền thống của quê hương.
          </p>
        </motion.div>

        <motion.a
          href="#characters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 inline-block animate-float md:mt-12"
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.a>
      </div>
    </section>
  );
}
