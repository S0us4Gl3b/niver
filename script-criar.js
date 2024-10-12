document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carousel-images');
    
    // Array com os caminhos das imagens
    const images = [
        './images/justin1.jpg',
        './images/justin2.jpg',
        './images/justin3.jpg'
    ];

    // Adiciona as imagens ao carrossel
    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        carrossel.appendChild(img);
    });

    let currentIndex = 0;

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextImage, 4000); // Muda a imagem a cada 4 segundos

});