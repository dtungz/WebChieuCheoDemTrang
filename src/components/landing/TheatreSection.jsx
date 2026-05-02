import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionDivider from './SectionDivider';

const PLAYS = [
  { name: 'Quan Âm Thị Kính', desc: 'Bi kịch của Thị Kính — oan khuất chồng chất, lòng nhân từ bất diệt.', videoQuery: 'https://www.youtube.com/watch?v=ZxVY5duWmbg', thumbnail: '/Thumbnail/QuanAmThiKinh.JPG' },
  { name: 'Trương Viên', desc: 'Chuyện tình bi tráng giữa chiến tranh, lòng trung trinh của Thị Phương.', videoQuery: 'https://www.youtube.com/watch?v=msJjQQILUFU', thumbnail: '/Thumbnail/TruongVien.JPG' },
  { name: 'Kim Nham', desc: 'Bi kịch gia đình và thân phận người phụ nữ trong xã hội phong kiến.', videoQuery: 'https://www.youtube.com/watch?v=urH2Utyheqo', thumbnail: '/Thumbnail/KimNham.JPG' },
  { name: 'Chu Mãi Thần', desc: 'Bài học về sự thuỷ chung, tình nghĩa giữa nhân tình thế thái.', videoQuery: 'https://www.youtube.com/watch?v=Kn22EDG7iWY', thumbnail: '/Thumbnail/ChuMaiThan.JPG' },
  { name: 'Lưu Bình Dương Lễ', desc: 'Tình bạn tri kỷ vượt qua gian khổ,sự hy sinh thầm lặng của Châu Long.', videoQuery: 'https://www.youtube.com/watch?v=ohOz5PDTW7I', thumbnail: '/Thumbnail/LuuBinhDuongLe.JPG' },
  { name: 'Từ Thức Gặp Tiên', desc: 'Tình yêu vượt cõi trần - tiên giữa chàng nho sĩ Từ Thức và nàng tiên Giáng Hương.', videoQuery: 'https://www.youtube.com/watch?v=IiNc-222rDQ', thumbnail: '/Thumbnail/TuThucGapTien.JPG' },
  { name: 'Trinh Nguyên', desc: 'Tấm lòng cao thượng của người mẹ dành cho các con.', videoQuery: 'https://www.youtube.com/watch?v=owZZ8_P2oaY', thumbnail: '/Thumbnail/TrinhNguyen.JPG' },
];

export default function TheatreSection({ bgImage }) {
  return (
    <section id="theatre" className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">Mini Theatre</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Thư viện các vở chèo kinh điển</h2>
          <SectionDivider />
          <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            Bảy vở chèo cổ kinh điển — cảm hứng cho 25 nhân vật trong trò chơi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYS.map((play, i) => (
            <motion.a
              key={play.name}
              href={play.videoQuery}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                <img
                  src={play.thumbnail}
                  alt={play.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all bg-background/20 backdrop-blur-sm">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-lg text-foreground group-hover:text-primary transition-colors">{play.name}</h3>
                <p className="font-montserrat text-xs text-muted-foreground mt-2 leading-relaxed">{play.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}