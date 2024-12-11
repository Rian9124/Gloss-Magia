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
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let offset = 0;
const cardWidth = 270; // largura do card + margens

prevButton.addEventListener('click', () => {
    offset += cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
});

nextButton.addEventListener('click', () => {
    offset -= cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
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



