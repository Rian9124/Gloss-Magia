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