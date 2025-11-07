document.addEventListener('DOMContentLoaded', () => {

    

    const GALLERY_DATA = {
        "door-gallery": {
            baseName: "IMG", 
            title: "بەشی دەرگا",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        "rafa-gallery": {
            baseName: "IMG", // **گۆڕدرا**
            title: "بەشی رەفە",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        "qadrma-gallery": {
            baseName: "IMG", // **گۆڕدرا**
            title: "بەشی قادرمە",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        // **لێرە بەردەوام بە بۆ کاتیبە، کەپر، موحاجەرە، هتد**
        "kapr-gallery": {
            baseName: "IMG", // **گۆڕدرا**
            title: "بەشی کەپر",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        "katiba-gallery": {
            baseName: "IMG", // **گۆڕدرا**
            title: "بەشی کەتیبە",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        "mhajara-gallery": {
            baseName: "IMG", // **گۆڕدرا**
            title: "بەشی موحاجەرە",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        },
        "others-gallery": { // بۆ بەشی بابەتی تر
            baseName: "IMG", // **گۆڕدرا**
            title: "بابەتی تر",
            extensions: [
                "jpg", "PNG", "webp", "gif", "HEIC", "JPG", "png",
            ]
        }
    };

    // ----------------------------------------------------
    // بەشی ٢: دروستکردنی گەلەری
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
                // دروستکردنی ناوی ڕێگای تەواوی وێنەکە: images/img1.jpg
                const imagePath = `images/${baseName}${imageNumber}.${ext}`; 
                
                // دروستکردنی تاگی <img /> و کارتی وێنەکە
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
    // بەشی ٣: کۆدی مۆدالی گەورەکردن
    // ----------------------------------------------------
    
    // وەرگرتنی مۆدال و ئەندامەکانی
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-button');

    // وەرگرتنی هەموو دوگمەکانی گەورەکردن (دوای دروستکردنیان لە بەشی ٢)
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
