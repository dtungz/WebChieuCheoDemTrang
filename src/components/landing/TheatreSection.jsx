import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionDivider from './SectionDivider';

const PLAYS = [
  { name: 'Quan Âm Thị Kính', desc: 'Bi kịch của Thị Kính — oan khuất chồng chất, lòng nhân từ bất diệt', videoQuery: 'Quan Am Thi Kinh cheo co' },
  { name: 'Trương Viên', desc: 'Chuyện tình bi tráng giữa chiến tranh, lòng trung trinh của Thị Phương', videoQuery: 'Truong Vien cheo co' },
  { name: 'Kim Nham', desc: 'Bi kịch Súy Vân giả dại — khi tình yêu bị phản bội, đẩy con người vào bước đường cùng', videoQuery: 'Kim Nham cheo co' },
  { name: 'Chu Mãi Thần', desc: 'Câu chuyện về lòng kiên trì và sự bạc bẽo của thế thái nhân tình', videoQuery: 'Chu Mai Than cheo co' },
  { name: 'Lưu Bình Dương Lễ', desc: 'Tình bạn tri kỷ vượt qua gian khổ, hy sinh thầm lặng của Châu Long', videoQuery: 'Luu Binh Duong Le cheo co' },
  { name: 'Từ Thức Gặp Tiên', desc: 'Chốn bồng lai tiên cảnh — khi con người chạm đến giấc mơ ngàn đời', videoQuery: 'Tu Thuc gap tien cheo co' },
  { name: 'Trinh Nguyên', desc: 'Tấm lòng cao thượng của người mẹ dành cho các con', videoQuery: 'Trinh Nguyen cheo co' },
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
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Nhà Hát Vở Chèo</h2>
          <SectionDivider />
          <p className="font-montserrat text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            Bảy vở chèo cổ kinh điển — cảm hứng cho 25 nhân vật trong trò chơi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYS.map((play, i) => (
            <motion.a
              key={play.name}
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(play.videoQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card/50 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary/60 via-card to-muted/30 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors" />
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                  <Play className="w-6 h-6 text-primary ml-1" />
                </div>
                <span className="absolute bottom-3 left-4 font-playfair text-xs text-primary/60">Vở chèo cổ</span>
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