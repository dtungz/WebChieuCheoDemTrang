import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-playfair text-3xl text-primary mb-2">Chiếu Chèo Đêm Trăng</p>
        <p className="font-montserrat text-xs text-[#C4B684]/80">
          Trò chơi nhập vai trải nghiệm văn hóa chèo truyền thống Việt Nam
        </p>
        <div className="mt-6 space-y-3">
          <p className="font-montserrat text-[11px] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Một dự án xây dựng mô hình boardgame kết hợp nghệ thuật chèo truyền thống đến từ nhóm sinh viên thuộc khoa Ngữ văn <br /> - Trường Đại học Sư phạm Hà Nội.
          </p>
          <div className="font-montserrat text-[10px] text-muted-foreground/70 flex flex-col items-center gap-1 uppercase tracking-wider">
            <p>Trưởng dự án: <span className="text-primary/80 font-semibold">Phạm Quế Anh</span></p>
            <p>GVHD: <span className="text-primary/80 font-semibold">Nguyễn Thị Diệu Khanh</span></p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-center gap-6 text-muted-foreground/60">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary/60" />
            <span className="font-montserrat text-[11px] tracking-wider">0382891265</span>
          </div>
          <div className="w-px h-3 bg-border/50" />
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-primary/60" />
            <a href="mailto:torintoujs@gmail.com" className="font-montserrat text-[11px] tracking-wider hover:text-primary transition-colors">
              torintoujs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}