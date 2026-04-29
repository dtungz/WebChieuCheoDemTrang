import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Users, BookOpen, Shield, Skull, Scale } from 'lucide-react';
import SectionDivider from './SectionDivider';

const TABS = [
  { id: 'overview', label: 'Tổng Quan', icon: BookOpen },
  { id: 'factions', label: 'Các Phe', icon: Shield },
  { id: 'phases', label: 'Ngày & Đêm', icon: Moon },
  { id: 'setup', label: 'Thiết Lập', icon: Users },
];

export default function RulesSection({ drumImage }) {
  const [activeTab, setActiveTab] = useState('overview');

  const [activeBook, setActiveBook] = useState('quantro');

  return (
    <section id="rules" className="relative py-24 md:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-montserrat text-xs tracking-[0.4em] text-primary/70 uppercase mb-4">The Sacred Archives</p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">Luật Chơi</h2>
          <SectionDivider />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 font-montserrat text-xs tracking-wider rounded-sm border transition-all ${activeTab === tab.id
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:border-primary/40'
                }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-6 md:p-10"
        >
          {activeTab === 'overview' && <OverviewContent />}
          {activeTab === 'factions' && <FactionsContent />}
          {activeTab === 'phases' && <PhasesContent />}
          {activeTab === 'setup' && <SetupContent />}
        </motion.div>

        {/* PDF Links */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <a
            href="https://media.base44.com/files/public/user_69e39422b6ba73e7f55d8606/d42e9dc8c_4DANSOTAYLUATCHOI1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-card/40 border border-border rounded-lg hover:border-primary/50 transition-all"
          >
            <BookOpen className="w-10 h-10 text-primary shrink-0" />
            <div>
              <h4 className="font-playfair text-lg text-foreground group-hover:text-primary transition-colors">Sổ Tay Luật Chơi</h4>
              <p className="font-montserrat text-xs text-muted-foreground mt-1">Tải PDF đầy đủ →</p>
            </div>
          </a>
          <a
            href="https://media.base44.com/files/public/user_69e39422b6ba73e7f55d8606/deec0a94f_3DANSOTAYQUANTRO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 bg-card/40 border border-border rounded-lg hover:border-primary/50 transition-all"
          >
            <Users className="w-10 h-10 text-primary shrink-0" />
            <div>
              <h4 className="font-playfair text-lg text-foreground group-hover:text-primary transition-colors">Sổ Tay Quản Trò</h4>
              <p className="font-montserrat text-xs text-muted-foreground mt-1">Tải PDF đầy đủ →</p>
            </div>
          </a>
        </div>

        {/* Flipbook Iframe */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl text-primary mb-8">Sổ Tay Luật Chơi & Quản Trò</h3>

          {/* Book Selector Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveBook('quantro')}
              className={`px-6 py-2 rounded-full border font-montserrat text-xs tracking-wider transition-all ${activeBook === 'quantro'
                ? 'bg-primary text-background border-primary'
                : 'border-primary/50 text-primary hover:bg-primary/10'
                }`}
            >
              Sổ Tay Quản Trò
            </button>
            <button
              onClick={() => setActiveBook('luatchoi')}
              className={`px-6 py-2 rounded-full border font-montserrat text-xs tracking-wider transition-all ${activeBook === 'luatchoi'
                ? 'bg-primary text-background border-primary'
                : 'border-primary/50 text-primary hover:bg-primary/10'
                }`}
            >
              Sổ Tay Luật Chơi
            </button>
          </div>

          <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden border border-border/50 bg-card/20 backdrop-blur-sm" style={{ height: '650px' }}>
            <iframe
              src={`/flipbook-sotay.html?book=${activeBook}`}
              className="w-full h-full border-none"
              title="Interactive Flipbook"
              key={activeBook} // Force re-render iframe when switching books
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function OverviewContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="font-playfair text-2xl text-primary mb-4">Tổng Quan Cách Chơi</h3>
        <div className="space-y-4 font-montserrat text-sm text-foreground/80 leading-relaxed">
          <p>Trò chơi chia làm hai pha: <strong className="text-primary">pha ban ngày</strong> và <strong className="text-primary">pha ban đêm</strong>.</p>
          <p>Bắt đầu vào đêm đầu tiên, các nhân vật được phân vai trò bí mật. Quản trò gọi từng nhân vật dậy trong đêm.</p>
          <p>Ban ngày, tất cả cùng thảo luận tìm ra Kẻ phá rối. Người bị chọn có 2 phút biện hộ, bắt đầu bằng: <em className="text-primary">"Bẩm làng, con xin thưa…"</em></p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-playfair text-lg text-foreground">Điều Kiện Thắng</h4>
        <div className="space-y-3">
          {[
            { icon: Shield, text: 'Phe Thiện thắng khi bắt hết Kẻ phá rối', color: 'text-green-400' },
            { icon: Skull, text: 'Phe Phá rối thắng khi có số lượng bằng Phe Thiện', color: 'text-red-400' },
            { icon: Scale, text: 'Phe Trung lập thắng khi hoàn thành nhiệm vụ riêng', color: 'text-blue-400' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-md">
              <item.icon className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
              <p className="font-montserrat text-sm text-foreground/80">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="p-4 border border-primary/20 rounded-md mt-4">
          <p className="font-montserrat text-xs text-muted-foreground">
            <strong className="text-primary">8–20 người chơi</strong> · 1 lá Quản trò · 6 lá Dân làng · 8 lá Kẻ phá rối · 22 lá chức năng
          </p>
        </div>
      </div>
    </div>
  );
}

function FactionsContent() {
  const factions = [
    {
      name: 'Phe Thiện',
      ratio: '60–65%',
      desc: 'Mỗi đêm phải tìm ra Kẻ phá rối và bắt giam. Ban ngày bàn bạc, ban đêm chìm vào giấc ngủ.',
      color: 'border-green-700/50 bg-green-900/10',
    },
    {
      name: 'Phe Phá Rối',
      ratio: '20–25%',
      desc: 'Bắt cóc dân làng trong đêm, ban ngày đóng giả để tránh bị phát hiện.',
      color: 'border-red-800/50 bg-red-900/10',
    },
    {
      name: 'Phe Trung Lập',
      ratio: '10–20%',
      desc: 'Không thuộc phe nào. Mỗi nhân vật có chức năng riêng, phải che giấu thân phận.',
      color: 'border-blue-800/50 bg-blue-900/10',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {factions.map((f) => (
        <div key={f.name} className={`p-6 rounded-lg border ${f.color}`}>
          <h4 className="font-playfair text-xl text-foreground mb-2">{f.name}</h4>
          <span className="font-montserrat text-xs text-primary font-bold">{f.ratio}</span>
          <p className="font-montserrat text-sm text-foreground/70 mt-3 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

function PhasesContent() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-6 bg-gradient-to-br from-blue-950/30 to-card rounded-lg border border-blue-900/30">
        <div className="flex items-center gap-3 mb-4">
          <Moon className="w-6 h-6 text-blue-300" />
          <h4 className="font-playfair text-xl text-blue-200">Pha Ban Đêm</h4>
        </div>
        <div className="font-montserrat text-sm text-foreground/70 space-y-3 leading-relaxed">
          <p className="italic text-primary/80 text-xs border-l-2 border-primary/30 pl-3">
            "Chiềng làng chiềng chạ, thượng hạ tây đông, làng ta yên ả, bỗng đâu bão giông. Mời cả làng nhắm mắt ngủ yên, chờ hạ hồi phân giải."
          </p>
          <p>Quản trò gọi từng nhân vật dậy thực hiện chức năng. Luôn gọi Kẻ phá rối đầu tiên.</p>
        </div>
      </div>
      <div className="p-6 bg-gradient-to-br from-amber-950/30 to-card rounded-lg border border-amber-900/30">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="w-6 h-6 text-amber-300" />
          <h4 className="font-playfair text-xl text-amber-200">Pha Ban Ngày</h4>
        </div>
        <div className="font-montserrat text-sm text-foreground/70 space-y-3 leading-relaxed">
          <p className="italic text-primary/80 text-xs border-l-2 border-primary/30 pl-3">
            "Trời sáng bảnh mắt, cả làng thức dậy mà xem, đêm qua có cô/cậu…đã bị Kẻ phá rối bắt mất tích!"
          </p>
          <p>Quản trò bốc thẻ sự kiện, mọi người thảo luận và bỏ phiếu bắt giam.</p>
        </div>
      </div>
    </div>
  );
}

function SetupContent() {
  const setups = [
    { size: 'Nhóm Nhỏ', players: '8–10 người', time: '20–30 phút', note: 'Thời gian nhanh, tập trung suy luận cơ bản' },
    { size: 'Nhóm Trung Bình', players: '11–15 người', time: '45–75 phút', note: 'Yêu cầu tư duy đa chiều, có phe Trung lập' },
    { size: 'Nhóm Lớn', players: '16–20 người', time: '90–120 phút', note: 'Quản trò cần tập trung cao, nhớ toàn bộ nhân vật' },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {setups.map((s) => (
        <div key={s.size} className="p-6 bg-muted/20 rounded-lg border border-border text-center">
          <h4 className="font-playfair text-xl text-primary mb-2">{s.size}</h4>
          <p className="font-montserrat text-2xl font-bold text-foreground">{s.players}</p>
          <p className="font-montserrat text-xs text-primary mt-2">{s.time}</p>
          <p className="font-montserrat text-xs text-muted-foreground mt-3">{s.note}</p>
        </div>
      ))}
    </div>
  );
}