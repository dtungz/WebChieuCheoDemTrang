import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Character lore data extracted from the character handbook PDF
const CHAR_LORE = {
  'Quan Âm Thị Kính': {
    play: 'Quan Âm Thị Kính',
    faction: 'Phe Thiện',
    desc: 'Người phụ nữ hiền thục, nết na nhưng phải chịu oan khuất trong xã hội phong kiến. Bị vu tội giết chồng, nàng giả trai đi tu, nuôi con Thị Mầu trong tủi nhục. Đến khi viên tịch, tấm lòng nhân hậu của nàng hóa thành Phật Bà Quan Âm.',
  },
  'Thiện Sĩ': {
    play: 'Quan Âm Thị Kính',
    faction: 'Trung Lập',
    desc: 'Đại diện trí thức phong kiến nhưng bạc nhược, thiếu quyết đoán. Sự nhu nhược và thiếu lòng tin khiến ông không bảo vệ được vợ trước vu oan của mẹ đẻ, trở thành nguyên cớ bi kịch của Thị Kính.',
  },
  'Thị Mầu': {
    play: 'Quan Âm Thị Kính',
    faction: 'Trung Lập',
    desc: 'Con gái phú ông với tính cách lẳng lơ, phóng khoáng, táo bạo. Chủ động tán tỉnh chú tiểu Kính Tâm và đổ oan cái thai trong bụng mình cho tiểu. Phản ánh khát khao yêu đương tự do đi ngược chuẩn mực phong kiến.',
  },
  'Trương Viên': {
    play: 'Trương Viên',
    faction: 'Phe Thiện',
    desc: 'Hội tụ đức tính "trung, hiếu, tiết, nghĩa". Thư sinh văn võ song toàn, chấp nhận rời gia đình 18 năm chinh chiến. Dù công thành danh toại vẫn khước từ vinh hoa để quay về tìm vợ và mẹ già.',
  },
  'Thị Phương': {
    play: 'Trương Viên',
    faction: 'Phe Thiện',
    desc: 'Người vợ hiền, dâu thảo, thủy chung son sắt. Khi chồng ra trận, một mình phụng dưỡng mẹ già, thậm chí dâng đôi mắt cầu thần cứu mẹ. Sự hi sinh cảm động trời đất, giúp nàng được đoàn viên, mắt sáng trở lại.',
  },
  'Quỷ Đực': {
    play: 'Trương Viên',
    faction: 'Phe Phá Rối',
    desc: 'Vai bạo tà bước ra từ bóng tối sân đình. Gương mặt xanh lạnh, đôi sừng cong vươn ngược, mái tóc rối bời. Kiểu cái ác thô ráp, cậy sức, chỉ chờ đêm buông để lộ mặt thật.',
  },
  'Quỷ Cái': {
    play: 'Trương Viên',
    faction: 'Phe Phá Rối',
    desc: 'Vai đào yêu bước ra từ ánh đèn sân đình. Gương mặt trắng xanh, dáng vẻ lặng lẽ mềm mại. Ẩn sau vẻ dịu dàng là bóng tối khó nắm bắt — cái ác không ồn ào nhưng đủ sức làm lòng người chệch hướng.',
  },
  'Lưu Bình': {
    play: 'Lưu Bình Dương Lễ',
    faction: 'Phe Thiện',
    desc: 'Người có tài, trọng nghĩa nhưng lúc đầu bi quan khi thi cử thất bại. Sau khi bị Dương Lễ hắt hủi và được Châu Long chăm lo, thức tỉnh, chuyên tâm đèn sách, trở thành Trạng nguyên.',
  },
  'Dương Lễ': {
    play: 'Lưu Bình Dương Lễ',
    faction: 'Phe Thiện',
    desc: 'Người thông minh, đỗ Trạng nguyên, làm quan. Bên ngoài lạnh lùng khinh bạn, nhưng thực chất dùng "khích tướng" để bạn vượt qua sa cơ. Mẫu người quân tử coi trọng tình bằng hữu.',
  },
  'Châu Long': {
    play: 'Lưu Bình Dương Lễ',
    faction: 'Phe Thiện',
    desc: 'Vợ ba của Dương Lễ, được chồng nhờ nuôi Lưu Bình ăn học. Người phụ nữ đức hạnh, thủy chung, giàu đức hi sinh, ba năm chăm sóc bạn chồng mà vẫn giữ trọn phẩm hạnh.',
  },
  'Chu Mãi Thần': {
    play: 'Chu Mãi Thần',
    faction: 'Phe Thiện',
    desc: 'Thuở trẻ có chí học nhưng nhà nghèo, kiếm củi độ nhật. Vợ bỏ theo kẻ giàu có, nhưng vẫn quyết tâm dùi mài kinh sử. Công thành danh toại, từ chối để vợ cũ quay lại vì tình nghĩa đã dứt.',
  },
  'Thiệt Thê': {
    play: 'Chu Mãi Thần',
    faction: 'Trung Lập',
    desc: 'Vợ của Chu Mãi Thần. Không chịu nổi cảnh nghèo túng kéo dài, bỏ đi theo quan Tuần Ty. Sau bị đánh ghen, cuộc đời phiêu dạt. Gặp lại chồng khi công thành danh toại, xin quay lại nhưng không được chấp nhận.',
  },
  'Tuần Ty': {
    play: 'Chu Mãi Thần',
    faction: 'Phe Phá Rối',
    desc: 'Quan lại địa phương, đại diện giai cấp thống trị phong kiến, tính cách trăng hoa, lăng nhăng. Nổi tiếng với trích đoạn hài hước, châm biếm khi tán tỉnh, trêu ghẹo Đào Huế (vợ cũ của Chu Mãi Thần).',
  },
  'Kim Nham': {
    play: 'Kim Nham',
    faction: 'Phe Thiện',
    desc: 'Nho sinh nghèo, ngụ học ở Kinh đô, được gả con gái viên huyện là Xúy Vân. Sau khi cưới vợ lại lên kinh đô theo đuổi công danh, nguyên nhân trực tiếp dẫn đến bi kịch của Xúy Vân.',
  },
  'Súy Vân': {
    play: 'Kim Nham',
    faction: 'Trung Lập',
    desc: 'Con gái viên huyện, bị ép gả cho Kim Nham không tình yêu. Cô đơn kéo dài, bị Trần Phương lừa phỉnh, giả dại đòi ly hôn. Bị phản bội, hóa điên thật, cuối cùng gieo mình xuống sông tự vẫn.',
  },
  'Trần Phương': {
    play: 'Kim Nham',
    faction: 'Phe Phá Rối',
    desc: 'Lãng tử dẻo miệng, dùng lời đường mật lừa gạt Xúy Vân bỏ chồng. Đại diện sự cám dỗ và giả dối, đến với Xúy Vân không bằng tình yêu thực sự mà bằng chiêu trò.',
  },
  'Trinh Nguyên': {
    play: 'Trinh Nguyên',
    faction: 'Phe Thiện',
    desc: 'Người thợ dệt tơ tằm, vợ thứ của Tôn Dân. Sau khi chồng mất, tần tảo nuôi cả con chung lẫn con riêng. Đối diện án tử hình, tình nguyện hi sinh con đẻ để giữ mạng con riêng của chồng.',
  },
  'Tôn Mạnh': {
    play: 'Trinh Nguyên',
    faction: 'Phe Thiện',
    desc: 'Con riêng của chồng Trinh Nguyên, được bà chăm sóc và yêu thương như con đẻ. Vô tình gặp xác người bị giết và chôn giúp nên bị oan tội giết người. Được giải oan nhờ đức hi sinh của mẹ và sự minh xét của Quan Án sát.',
  },
  'Tôn Trọng': {
    play: 'Trinh Nguyên',
    faction: 'Phe Thiện',
    desc: 'Con đẻ của Trinh Nguyên. Cùng anh Tôn Mạnh bị oan tội giết người. Người mẹ tình nguyện hi sinh con đẻ (Tôn Trọng) để con riêng được sống. Được Quan Án sát giải oan, đoàn tụ cùng mẹ.',
  },
  'Quan Án Sát': {
    play: 'Trinh Nguyên',
    faction: 'Phe Thiện',
    desc: 'Vị quan thanh liêm, sáng suốt và giàu lòng nhân ái. Không chỉ dựa vào luật pháp khô khan mà dùng cái tâm soi xét sự việc. Cảm động trước đức hi sinh của Trinh Nguyên, đình chỉ bản án, tìm ra kẻ thủ ác thực sự.',
  },
  'Từ Thức': {
    play: 'Từ Thức Gặp Tiên',
    faction: 'Phe Thiện',
    desc: 'Tri huyện nhân từ, nho nhã, yêu thích phong cảnh. Vì cứu tiên nữ Giáng Hương mà từ quan, kết duyên với tiên. Sau thời gian sống cõi tiên, nhớ quê hương quay về trần gian, mọi thứ đã thay đổi, người thân không còn ai.',
  },
  'Giáng Hương': {
    play: 'Từ Thức Gặp Tiên',
    faction: 'Phe Thiện',
    desc: 'Tiên nữ sống ở chốn bồng lai, sơ ý làm gãy cành hoa mẫu đơn quý, được Từ Thức cứu chuộc rồi kết duyên. Đau đớn tiễn chồng về trần gian, sau đó sống cô độc giữa cõi tiên — biểu tượng tình yêu thủy chung và bi kịch.',
  },
  'Dân Làng': {
    play: 'Chiếu Chèo Đêm Trăng',
    faction: 'Phe Thiện',
    desc: 'Những con người lam lũ nhưng giàu tình nghĩa — linh hồn của gánh hát, người giữ cho làng chèo không rơi vào hỗn loạn. Phải tỉnh táo phân biệt đâu là người cùng phường hát, đâu là kẻ che giấu âm mưu.',
  },
  'Kẻ Phá Rối': {
    play: 'Chiếu Chèo Đêm Trăng',
    faction: 'Phe Phá Rối',
    desc: 'Không phải quỷ, cũng chẳng phải người. Sống bằng sự mập mờ, gieo lời đồn, bóp méo câu hát. Giả vờ say mê nghệ thuật nhưng thực chất muốn sân đình rối ren, đêm đêm bắt cóc dân làng vào ngục.',
  },
};

// Map each character to their card order.

const CHAR_PAGE = {
  'Tên Hề': 2,
  'Quan Âm Thị Kính': 3,
  'Quan Án Sát': 4,
  'Trương Viên': 5,
  'Thị Phương': 6,
  'Lưu Bình': 7,
  'Kim Nham': 8,
  'Châu Long': 9,
  'Chu Mãi Thần': 10,
  'Từ Thức': 11,
  'Giáng Hương': 12,
  'Dương Lễ': 13,
  'Trinh Nguyên': 14,
  'Tôn Mạnh': 15,
  'Tôn Trọng': 16,
  'Dân Làng': 17,
  'Quỷ Đực': 18,
  'Tuần Ty': 19,
  'Kẻ Phá Rối': 20,
  'Quỷ Cái': 21,
  'Trần Phương': 22,
  'Thị Mầu': 23,
  'Thiệt Thê': 24,
  'Thiện Sĩ': 25,
  'Súy Vân': 26,
};

const CARD_IMAGE_BY_PAGE = {
  2: '/cards/TenHe-back.png',
  3: '/cards/ThiKinh-back.png',
  4: '/cards/QuanAmSat-back.png',
  5: '/cards/TruongVien-back.png',
  6: '/cards/ThiPhuong-back.png',
  7: '/cards/LuuBinh-back.png',
  8: '/cards/KimNham-back.png',
  9: '/cards/ChauLong-back.png',
  10: '/cards/ChuMaThan-back.png',
  11: '/cards/TuThuc-back.png',
  12: '/cards/GiangHuong-back.png',
  13: '/cards/DuongLe-back.png',
  14: '/cards/TrinhNguyen-back.png',
  15: '/cards/TonMang-back.png',
  16: '/cards/TonTrong-back.png',
  17: '/cards/DangLang-back.png',
  18: '/cards/QuyDuc-back.png',
  19: '/cards/TuanTy-back.png',
  20: '/cards/KePhaRoi-back.png',
  21: '/cards/QuyCai-back.png',
  22: '/cards/TrangPhuong-back.png',
  23: '/cards/ThiMau-back.png',
  24: '/cards/ThietThe-back.png',
  25: '/cards/ThienSi-back.png',
  26: '/cards/SuyVan-back.png',
};

export default function CharacterCard({ character, index }) {
  const [flipped, setFlipped] = useState(false);
  const page = CHAR_PAGE[character.name] || 2;
  const cardImage = CARD_IMAGE_BY_PAGE[page] || '/cards/TenHe-back.png';
  const lore = CHAR_LORE[character.name];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.04, duration: 0.5 }}
      className="cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          aspectRatio: '67/96',
        }}
      >
        {/* FRONT — card art image */}
        <div
          className="absolute inset-0 rounded-sm bg-black overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Render local image to guarantee full-frame fit and no inner scrollbars */}
          <img
            src={cardImage}
            alt={character.name}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* BACK — lore info from character handbook */}
        <div
          className="absolute inset-0 overflow-hidden rounded-sm"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'radial-gradient(circle at 50% 30%, #1a0f05 0%, #050301 100%)',
          }}
        >
          {/* Gold border and corners */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            <div className="absolute inset-[4px] rounded-sm border border-[#D4AF37]/20" />
            {[
              'top-[2px] left-[2px] border-t-2 border-l-2',
              'top-[2px] right-[2px] border-t-2 border-r-2',
              'bottom-[2px] left-[2px] border-b-2 border-l-2',
              'bottom-[2px] right-[2px] border-b-2 border-r-2'
            ].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-3 h-3`} style={{ borderColor: '#D4AF37' }} />
            ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-start pt-6 px-4 gap-1.5" style={{ zIndex: 3 }}>
            {/* Character name */}
            <h3 className="font-playfair font-bold text-center leading-tight text-[#F5DEB3]" style={{ fontSize: 'clamp(11px, 2.8vw, 16px)', textShadow: '0 0 10px rgba(212,175,55,0.2)' }}>
              {character.name}
            </h3>

            {/* Play */}
            {lore?.play && (
              <p className="font-montserrat uppercase tracking-[0.15em] text-center text-[#D4AF37]/80" style={{ fontSize: 'clamp(6px, 1.5vw, 9px)' }}>
                VỞ CHÈO: {lore.play}
              </p>
            )}

            {/* Glowing Divider */}
            <div className="w-16 h-px my-1 relative">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_5px_#D4AF37]" />
            </div>

            {/* Faction badge */}
            {lore?.faction && (
              <div
                className="mt-1 px-3 py-0.5 rounded-sm font-montserrat uppercase tracking-[0.2em] bg-[#D4AF37]/5 border border-[#D4AF37]/40"
                style={{ fontSize: 'clamp(5px, 1.2vw, 7.5px)', color: '#D4AF37' }}
              >
                {lore.faction}
              </div>
            )}

            {/* Description */}
            {lore?.desc && (
              <p
                className="mt-2 font-montserrat text-center leading-relaxed text-[#F5DEB3]/80"
                style={{
                  fontSize: 'clamp(6px, 1.4vw, 8.5px)',
                  padding: '0 2px',
                }}
              >
                {lore.desc}
              </p>
            )}

            {!lore && (
              <p className="font-montserrat uppercase tracking-widest text-center text-[#D4AF37] mt-4" style={{ fontSize: '7px' }}>
                {character.faction}
              </p>
            )}
          </div>

          {/* Subtle Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
        </div>
      </div>
    </motion.div>
  );
}
