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
    const contador = document.querySelector(".contador-mobal"); // Seleciona o elemento do contador

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