document.addEventListener('DOMContentLoaded', () => {
    const handbookEl = document.getElementById('handbook');
    
    if (handbookEl) {
        // Init StPageFlip
        const pageFlip = new St.PageFlip(handbookEl, {
            width: 400, // base page width
            height: 600, // base page height
            size: "stretch",
            minWidth: 300,
            maxWidth: 500,
            minHeight: 400,
            maxHeight: 750,
            maxShadowOpacity: 0.5,
            showCover: true,
            mobileScrollSupport: false // disable on mobile to use buttons/swipe inside element
        });

        // Load pages
        pageFlip.loadFromHTML(document.querySelectorAll('.page'));
        
        // Show the book container
        handbookEl.style.display = 'block';

        // Update UI controls
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        const pageCurrent = document.getElementById('page-current');
        const pageTotal = document.getElementById('page-total');

        // Set total pages
        pageTotal.textContent = pageFlip.getPageCount();

        // Event listeners for buttons
        btnPrev.addEventListener('click', () => {
            pageFlip.flipPrev();
        });

        btnNext.addEventListener('click', () => {
            pageFlip.flipNext();
        });

        // Event listener for page flip state change
        pageFlip.on('flip', (e) => {
            // e.data is the target page number (0-indexed)
            pageCurrent.textContent = e.data + 1;
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                pageFlip.flipPrev();
            } else if (e.key === 'ArrowRight') {
                pageFlip.flipNext();
            }
        });
    }
});
