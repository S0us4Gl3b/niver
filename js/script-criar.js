document.addEventListener('DOMContentLoaded', function() {
    
    console.log('JS carregado com sucesso')
    
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.item');
    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    function setPositionByIndex() {
        const translateXValue = currentIndex * -100; // Translação horizontal
        carrossel.style.transform = `translateX(${translateXValue}%)`;
    }

    // Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % items.length; // Reinicia no começo quando chega à última imagem
        setPositionByIndex();
    }

    // Definir intervalo de mudança automática (a cada 3 segundos)
    setInterval(nextImage, 3000);

    // Inicialmente, ajustar a posição do carrossel
    setPositionByIndex();
});
