document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------
    // بەشی ١: زانیاری وێنەکان
    // ----------------------------------------------------

    // پێویستە ئەمە پڕ بکەیتەوە. ناوی وێنەکان بە "1، 2، 3، ..." دەبێت.
    // لێرە تەنها درێژکراوە (پاشگر)ەکانی وێنەکە بنووسە بە ڕیزبەندی.

    const GALLERY_DATA = {
        "door-gallery": {
            baseName: "door",
            title: "بەشی دەرگا",
            // فۆرماتی وێنەکانی دەرگا، بە ڕیزبەندی: door1, door2, door3...
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "jpg", // 6 وێنەی یەکەم بۆ نموونە
                // لێرە بەردەوام بە... تا کۆتایی هەموو وێنەکانت
            ]
        },
        "rafa-gallery": {
            baseName: "rafa",
            title: "بەشی رەفە",
            // فۆرماتی وێنەکانی ڕەفە، بە ڕیزبەندی: rafa1, rafa2, rafa3...
            extensions: [
                "png", "jpg", "webp", "JPG", "gif", "HEIC", // 6 وێنەی یەکەم بۆ نموونە
                // لێرە بەردەوام بە... تا کۆتایی هەموو وێنەکانت
            ]
        },
        "qadrma-gallery": {
            baseName: "qadrma",
            title: "بەشی قادرمە",
            // فۆرماتی وێنەکانی قادرمە
            extensions: [
                "jpg", "png", "webp", "HEIC", // 4 وێنەی یەکەم بۆ نموونە
                // لێرە بەردەوام بە... تا کۆتایی هەموو وێنەکانت
            ]
        },
        // **لێرە بەردەوام بە بۆ کاتیبە، کەپر، موحاجەرە، هتد**
        "kapr-gallery": {
            baseName: "kapr",
            title: "بەشی کەپر",
            extensions: ["jpg", "png", /* ... */] 
        },
        "katiba-gallery": {
            baseName: "katiba",
            title: "بەشی کەتیبە",
            extensions: ["jpg", "png", /* ... */] 
        },
        "mhajara-gallery": {
            baseName: "mhajara",
            title: "بەشی موحاجەرە",
            extensions: ["jpg", "png", /* ... */] 
        }
    };

    // ----------------------------------------------------
    // بەشی ٢: دروستکردنی گەلەری (گەورەترین گۆڕانکاری)
    // ----------------------------------------------------

    const galleryContainer = document.querySelector('.gallery-grid');
    if (galleryContainer) {
        // وەرگرتنی IDی کۆنتەینەرەکە (بۆ نموونە: door-gallery)
        const currentGalleryId = galleryContainer.id; 
        const currentData = GALLERY_DATA[currentGalleryId];

        if (currentData) {
            let imagesHTML = "";
            const { baseName, extensions } = currentData;

            // دروستکردنی کۆدی HTML بۆ هەموو وێنەکان لە ناو لووپێکدا
            extensions.forEach((ext, index) => {
                const imageNumber = index + 1;
                // گرتنی ناوی ڕێگای تەواوی وێنەکە
                // بۆ نموونە: images/door1.jpg یان images/rafa5.PNG
                const imagePath = `images/${baseName}${imageNumber}.${ext}`; 
                
                // دروستکردنی تاگی <img /> و کارتی وێنەکە
                // loading="lazy" بۆ باشترکردنی خێرایی بارکردن بەکاردەهێنرێت
                imagesHTML += `
                    <div class="image-card">
                        <img src="${imagePath}" 
                             alt="${currentData.title} ژمارە ${imageNumber}"
                             loading="lazy">
                        <button class="zoom-button">گەورە کردن</button>
                    </div>
                `;
            });

            // داخلکردنی هەموو کۆدەکە بە یەکجار بۆ ناو HTML
            galleryContainer.innerHTML = imagesHTML;
        }
    }


    // ----------------------------------------------------
    // بەشی ٣: کۆدی مۆدالی گەورەکردن (وەک خۆی دەمێنێتەوە، تەنها شوێنەکەی دەگۆڕدرێت)
    // ----------------------------------------------------
    
    // وەرگرتنی مۆدال و ئەندامەکانی
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    // وەرگرتنی هەموو دوگمەکانی گەورەکردن (دوای دروستکردنیان لە لووپەکە)
    // ئەمە زۆر گرنگە کە لێرە بێت چونکە وێنەکان تازە دروست کراون.
    const zoomButtons = document.querySelectorAll('.zoom-button'); 

    // کردار بۆ کردنەوەی مۆدال
    zoomButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const imageElement = event.target.closest('.image-card').querySelector('img');
            modalImage.src = imageElement.src;
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
