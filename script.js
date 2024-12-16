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


const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let offset = 0;
const cardWidth = 130; // largura do card + margens
const maxOffset = -(cardWidth * (carousel.children.length - 1)); // Limite máximo (todos os cards)

prevButton.addEventListener('click', () => {
    offset = Math.min(500, offset + cardWidth); // Limita o deslocamento mínimo a 0
    carousel.style.transform = `translateX(${offset}px)`;
});

nextButton.addEventListener('click', () => {
    offset = Math.max(maxOffset, offset - cardWidth); // Limita o deslocamento máximo ao limite máximo
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



function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');

    if (dropdown.classList.contains('active')) {
        // Animação de saída
        dropdown.classList.remove('active'); // Remove classe para animação de saída
        setTimeout(() => {
            dropdown.style.display = 'none'; // Oculta o menu após a transição
        }, 300); // Tempo correspondente ao `transition` do CSS
    } else {
        // Animação de entrada
        dropdown.style.display = 'flex'; // Exibe o menu antes da animação
        setTimeout(() => {
            dropdown.classList.add('active'); // Adiciona classe para animação de entrada
        }, 10); // Pequeno atraso para permitir que o navegador registre a transição
    }
}

function fechar() {
    const dropdown = document.querySelector('.dropdown');

    if (dropdown.classList.contains('active')) {
        // Animação de saída
        dropdown.classList.remove('active'); // Remove classe para animação de saída
        setTimeout(() => {
            dropdown.style.display = 'none'; // Oculta o menu após a transição
        }, 500); // Tempo correspondente ao `transition` do CSS
    }
}


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