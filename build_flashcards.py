import re
import json

with open("flashcards.txt", "r", encoding="utf-8") as f:
    content = f.read()

files = content.split("FILE: ")

lan_dieu_pages = []
cau_thoai_pages = []

if len(files) > 1:
    # file 5
    file5_content = files[1]
    pages5 = re.split(r"--- PAGE \d+ ---", file5_content)[1:]
    lan_dieu_pages = [p.strip() for p in pages5 if p.strip()]

if len(files) > 2:
    # file 6
    file6_content = files[2]
    pages6 = re.split(r"--- PAGE \d+ ---", file6_content)[1:]
    cau_thoai_pages = [p.strip() for p in pages6 if p.strip()]

def build_pairs(pages):
    # filter out the title page
    filtered = [p for p in pages if not p.startswith("Các làn điệu") and not p.startswith("Các câu thoại")]
    pairs = []
    for i in range(0, len(filtered), 2):
        if i + 1 < len(filtered):
            front = filtered[i].replace('\n', '<br>')
            back = filtered[i+1].replace('\n', '<br>')
            pairs.append({"front": front, "back": back})
    return pairs

lan_dieu_data = build_pairs(lan_dieu_pages)
cau_thoai_data = build_pairs(cau_thoai_pages)

js_content = f"""// Auto-generated from PDF
const lanDieuData = {json.dumps(lan_dieu_data, indent=4, ensure_ascii=False)};

const cauThoaiData = {json.dumps(cau_thoai_data, indent=4, ensure_ascii=False)};

document.addEventListener('DOMContentLoaded', () => {{
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    function switchTab(tabId) {{
        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        const activeBtn = document.querySelector(`.tab-btn[data-tab="${{tabId}}"]`);
        const activeContent = document.getElementById(tabId);
        
        if (activeBtn) activeBtn.classList.add('active');
        if (activeContent) activeContent.classList.add('active');
    }}
    
    tabBtns.forEach(btn => {{
        btn.addEventListener('click', () => {{
            switchTab(btn.dataset.tab);
        }});
    }});
    
    function renderFlashcards(dataArray, containerId) {{
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = '';
        dataArray.forEach(card => {{
            const cardEl = document.createElement('div');
            cardEl.className = 'flashcard-wrapper';
            cardEl.innerHTML = `
                <div class="flashcard">
                    <div class="flashcard-front">
                        <div class="card-inner-border">
                            <p class="quote">"${{card.front.replace(/^"|"$/g, '').replace(/<br>"/g, '<br>').replace(/"<br>/g, '<br>')}}"</p>
                            <div class="flip-hint">⟲ Lật để xem đáp án</div>
                        </div>
                    </div>
                    <div class="flashcard-back">
                        <div class="card-inner-border">
                            <div class="answer-content">${{card.back}}</div>
                        </div>
                    </div>
                </div>
            `;
            
            cardEl.addEventListener('click', () => {{
                const innerCard = cardEl.querySelector('.flashcard');
                innerCard.classList.toggle('flipped');
            }});
            
            container.appendChild(cardEl);
        }});
    }}
    
    renderFlashcards(lanDieuData, 'lan-dieu-grid');
    renderFlashcards(cauThoaiData, 'cau-thoai-grid');
}});
"""

with open("flashcard.js", "w", encoding="utf-8") as f:
    f.write(js_content)
