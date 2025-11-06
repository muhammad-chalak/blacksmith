document.addEventListener('DOMContentLoaded', () => {
    // وەرگرتنی مۆدال و ئەندامەکانی
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    // وەرگرتنی هەموو دوگمەکانی گەورەکردن
    const zoomButtons = document.querySelectorAll('.zoom-button');

    // *لێرە هیچ کۆدێکی شاردنەوەی سەرەتا نییە، چونکە کارەکە لە style.css بە media query کراوە*

    // کردار بۆ کردنەوەی مۆدال
    zoomButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // وێنەکە لەناو هەمان کارتدایە لەگەڵ دوگمەکە
            const imageElement = event.target.closest('.image-card').querySelector('img');
            
            // دانانی سەرچاوەی وێنەکە لەناو مۆدال
            modalImage.src = imageElement.src;
            
            // دەرخستنی مۆدال بە شێوازی 'flex'
            modal.style.display = 'flex';
        });
    });

    // کردار بۆ داخستنی مۆدال کاتێک دوگمەی زەربێک (X) دەگرێت
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // کردار بۆ داخستنی مۆدال کاتێک لە دەرەوەی وێنەکە کلیک دەکرێت
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
