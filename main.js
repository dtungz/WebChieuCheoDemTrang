document.addEventListener('DOMContentLoaded', () => {
    // 1. HEADER SCROLL EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. WIKI NHÂN VẬT (PHASE 3)
    const charactersData = [
        { name: 'Thị Kính', faction: 'thien', play: 'Quan Âm Thị Kính', rank: 'S', desc: 'Người phụ nữ hiền thục, nết na nhưng chịu oan khuất. Hóa thành Quan Thế Âm.', skill: 'Cứu người bị bắt cóc hoặc bắt giam 1 người vào ngục.' },
        { name: 'Quan Án Sát', faction: 'thien', play: 'Trinh Nguyên', rank: 'S', desc: 'Vị quan thanh liêm, sáng suốt và giàu lòng nhân ái.', skill: 'Xét xử xem ai là Kẻ phá rối (soi vai).' },
        { name: 'Trương Viên', faction: 'thien', play: 'Trương Viên', rank: 'S', desc: 'Thư sinh văn võ song toàn, trung hiếu tiết nghĩa.', skill: 'Nếu bị bắt, kéo 1 người bị bắt cùng.' },
        { name: 'Thị Phương', faction: 'thien', play: 'Trương Viên', rank: 'A', desc: 'Người vợ hiền, dâu thảo, thủy chung son sắt.', skill: 'Bảo vệ 1 người không bị bắt cóc.' },
        { name: 'Châu Long', faction: 'thien', play: 'Lưu Bình Dương Lễ', rank: 'S', desc: 'Người phụ nữ đức hạnh, thủy chung, giàu hi sinh.', skill: 'Se duyên lành — ghép cặp 2 người nhận ra nhau.' },
        { name: 'Lưu Bình', faction: 'thien', play: 'Lưu Bình Dương Lễ', rank: 'C', desc: 'Người có tài, trọng nghĩa, biết vươn lên từ thất bại.', skill: 'Không hoạt động ban đêm.' },
        { name: 'Dương Lễ', faction: 'thien', play: 'Lưu Bình Dương Lễ', rank: 'A', desc: 'Người thông minh, trọng nghĩa, có lòng bao dung.', skill: 'Bảo vệ 1 người.' },
        { name: 'Kim Nham', faction: 'thien', play: 'Kim Nham', rank: 'A', desc: 'Nho sinh nghèo, nguyên nhân dẫn đến bi kịch của Xúy Vân.', skill: 'Vô hiệu hóa toàn bộ vai trò phe Ác (1 lần).' },
        { name: 'Trinh Nguyên', faction: 'thien', play: 'Trinh Nguyên', rank: 'B', desc: 'Người mẹ giàu tình thương, hi sinh thân mình vì con.', skill: 'Nhận diện đêm đầu.' },
        { name: 'Tôn Mạnh', faction: 'thien', play: 'Trinh Nguyên', rank: 'B', desc: 'Con riêng của chồng, được Trinh Nguyên yêu thương.', skill: 'Hai anh em nhận ra nhau.' },
        { name: 'Tôn Trọng', faction: 'thien', play: 'Trinh Nguyên', rank: 'B', desc: 'Con đẻ của Trinh Nguyên.', skill: 'Hai anh em nhận ra nhau.' },
        { name: 'Từ Thức', faction: 'thien', play: 'Từ Thức gặp tiên', rank: 'C', desc: 'Tri huyện nhân từ, từ quan về quê kết duyên cùng tiên.', skill: 'Biến mất (thoát khỏi ván chơi).' },
        { name: 'Giáng Hương', faction: 'thien', play: 'Từ Thức gặp tiên', rank: 'A', desc: 'Tiên nữ bồng lai, chung thủy nhưng gặp bi kịch.', skill: 'Biết ai thuộc phe nào.' },
        { name: 'Chu Mãi Thần', faction: 'thien', play: 'Chu Mãi Thần', rank: 'B', desc: 'Nho sinh ham học, công thành danh toại.', skill: 'Soi năng lực (sau khi được khai mở).' },
        { name: 'Súy Vân', faction: 'thien', play: 'Kim Nham', rank: 'A', desc: 'Cô gái xinh đẹp, giả điên đòi ly hôn rồi hóa điên thật.', skill: 'Nhận diện đêm đầu.' },
        { name: 'Dân Làng', faction: 'thien', play: 'Nhiều vở', rank: 'D', desc: 'Những con người lam lũ, sống nghĩa tình.', skill: 'Không có kỹ năng đặc biệt, ngủ vào ban đêm.' },
        { name: 'Quỷ Đực', faction: 'pharoi', play: 'Trương Viên', rank: 'S', desc: 'Hiện thân của bóng tối, dữ dằn, cậy sức.', skill: 'Cùng phe Ác bắt cóc dân làng mỗi đêm.' },
        { name: 'Quỷ Cái', faction: 'pharoi', play: 'Trương Viên', rank: 'A', desc: 'Lặng lẽ, mềm mại nhưng che giấu cái ác.', skill: 'Cùng phe Ác bắt cóc dân làng mỗi đêm.' },
        { name: 'Kẻ Phá Rối', faction: 'pharoi', play: 'Nhiều vở', rank: 'A', desc: 'Sống bằng sự mập mờ, gieo rắc tin đồn, làm loạn lòng người.', skill: 'Bắt cóc dân làng mỗi đêm.' },
        { name: 'Tuần Ty', faction: 'pharoi', play: 'Chu Mãi Thần', rank: 'B', desc: 'Quan lại địa phương, trăng hoa, lăng nhăng.', skill: 'Nhận diện đêm đầu.' },
        { name: 'Trần Phương', faction: 'pharoi', play: 'Kim Nham', rank: 'A', desc: 'Lãng tử, dùng lời đường mật lừa gạt người khác.', skill: 'Vô hiệu hóa kỹ năng 1 người.' },
        { name: 'Thị Mầu', faction: 'trunglap', play: 'Quan Âm Thị Kính', rank: 'A', desc: 'Lẳng lơ, táo bạo, khao khát tự do yêu đương.', skill: 'Quyến rũ 1 người.' },
        { name: 'Thiện Sĩ', faction: 'trunglap', play: 'Quan Âm Thị Kính', rank: 'B', desc: 'Trí thức phong kiến, bạc nhược và thiếu quyết đoán.', skill: 'Cấm 1 người nói chuyện.' },
        { name: 'Thiệt Thê', faction: 'trunglap', play: 'Chu Mãi Thần', rank: 'C', desc: 'Người vợ bỏ chồng vì nghèo khó, chuốc lấy bi kịch.', skill: 'Nhận diện đêm đầu.' },
        { name: 'Tên Hề', faction: 'trunglap', play: 'Nhiều vở', rank: 'S', desc: 'Nhân vật pha trò, mang biến số lớn.', skill: 'Vai đặc biệt.' },
    ];

    const characterGrid = document.getElementById('characterGrid');
    
    function renderCharacters(filter = 'all') {
        if (!characterGrid) return;
        
        characterGrid.innerHTML = '';
        
        const filteredChars = filter === 'all' 
            ? charactersData 
            : charactersData.filter(c => c.faction === filter);
            
        filteredChars.forEach(char => {
            let factionName = '';
            if (char.faction === 'thien') factionName = 'Phe Thiện';
            else if (char.faction === 'pharoi') factionName = 'Phá Rối';
            else if (char.faction === 'trunglap') factionName = 'Trung Lập';
            
            const cardHTML = `
                <div class="char-card" data-faction="${char.faction}" onclick="this.classList.toggle('flipped')">
                    <div class="char-card-inner">
                        <div class="char-card-front">
                            <div class="card-pattern"></div>
                            <h3>?</h3>
                        </div>
                        <div class="char-card-back">
                            <h4 class="char-name">${char.name}</h4>
                            <div class="char-meta">
                                <span class="char-faction ${char.faction}">${factionName}</span>
                                <span class="char-rank">Hạng ${char.rank}</span>
                            </div>
                            <p class="char-desc">${char.desc}</p>
                            <div class="char-skill">
                                <strong>Kỹ năng ban đêm</strong>
                                ${char.skill}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            characterGrid.innerHTML += cardHTML;
        });
    }

    // Initialize character filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            // Render
            renderCharacters(e.target.dataset.filter);
        });
    });

    // Initial render
    renderCharacters();

    // 3. ACCORDION LUẬT CHƠI (PHASE 4)
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const toggle = item.querySelector('.accordion-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // Mở sẵn mục đầu tiên
    if (timelineItems.length > 0) {
        timelineItems[0].classList.add('active');
    }
});
