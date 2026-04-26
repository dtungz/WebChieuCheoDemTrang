import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-playfair text-xl text-primary mb-2">Chiếu Chèo Đêm Trăng</p>
        <p className="font-montserrat text-xs text-muted-foreground">
          Trò chơi nhập vai trải nghiệm văn hóa chèo truyền thống Việt Nam
        </p>
        <div className="flex justify-center gap-6 mt-6">
          {['GIỚI THIỆU', 'NHÂN VẬT', 'LUẬT CHƠI', 'NHÀ HÁT', 'FLASHCARDS'].map((item) => (
            <a
              key={item}
              href={`#${item === 'GIỚI THIỆU' ? 'hero' : item === 'NHÂN VẬT' ? 'characters' : item === 'LUẬT CHƠI' ? 'rules' : item === 'NHÀ HÁT' ? 'theatre' : 'flashcards'}`}
              className="font-montserrat text-[10px] tracking-widest text-muted-foreground hover:text-primary transition-colors hidden md:block"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="font-montserrat text-[10px] text-muted-foreground/50">
            © 2025 Chiếu Chèo Đêm Trăng. Bảo tồn và phát huy giá trị nghệ thuật chèo truyền thống.
          </p>
        </div>
      </div>
    </footer>
  );
}