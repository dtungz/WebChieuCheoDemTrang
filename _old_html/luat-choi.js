document.addEventListener('DOMContentLoaded', () => {
    // ACCORDION LUẬT CHƠI
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
