// animação intro
window.addEventListener("load", () => {
    const section = document.querySelector(".section-animação");
    const logoContainer = document.querySelector(".logo-container");

    // Função para iniciar animação de saída
    function startExitAnimation() {
        logoContainer.classList.add("exit");
        // Espera o tempo da animação de saída (1.5s)
        setTimeout(() => {
            section.classList.add("hidden"); // Oculta a section
            document.body.style.overflow = "auto"; // Permite scroll no resto da página
        }, 1500); // Tempo da animação de saída
    }

    // Adiciona evento para iniciar a animação de saída após a animação de entrada (1.5s + 0.5s de atraso)
    setTimeout(startExitAnimation, 2000); // Ajusta o tempo total para 3 segundos
});



document.addEventListener("DOMContentLoaded", function () {
    const contador = document.querySelector(".contador"); // Seleciona o elemento do contador

    if (!contador) {
        console.error("O elemento '.contador' não foi encontrado no DOM.");
        return; // Evita erros se o contador não existir
    }

    // Função para atualizar o contador de itens no carrinho
    function updateCounter() {
        const cart = JSON.parse(localStorage.getItem("cart")) || []; // Obtém o carrinho do localStorage
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0); // Soma as quantidades
        contador.textContent = totalItems; // Atualiza o contador com o número total de itens
    }

    // Atualizar o contador ao carregar a página
    updateCounter();
});



// carrosel promoções
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const totalCards = cards.length;

// Ajuste para lidar com o tamanho do carrossel
function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // inclui margem lateral
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= totalCards) {
        index = 0; // Retorna ao primeiro card
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = totalCards - 1; // Vai para o último card
    }
    updateCarousel();
});


document.querySelectorAll('.comprar-button').forEach(button => {
    button.addEventListener('click', function() {
        const productKey = this.getAttribute('data-product');

        // Verifique se o productKey não está vazio
        if (productKey) {
            localStorage.setItem('selectedProduct', productKey);
            window.location.href = 'product-detalhes.html';
        } else {
            console.error('Produto não encontrado.');
        }
    });
});



