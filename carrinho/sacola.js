document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const sectionCarrinho = document.getElementById("Seção-carrinho");
    const contador = document.querySelector(".contador");

    // Obter os dados do carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach(item => {
        if (item.selected === undefined) {
            item.selected = true; // Inicializar como true por padrão
        }
    });
    
    // Atualizar o localStorage com os objetos corrigidos
    localStorage.setItem("cart", JSON.stringify(cart));

    function updateTotal() {
        let total = 0;
        cart.forEach(item => {
            if (item.selected) {
                const price = parseFloat(item.price) * item.quantity;
                total += isNaN(price) ? 0 : price;

            }
        });
        totalPriceElement.textContent = `Valor total: R$ ${total.toFixed(2).replace(".", ",")}`;
    }
    

    // Função para atualizar o contador de itens no carrinho
    function updateCounter() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        contador.textContent = totalItems;
    }

    // Verificar se o carrinho está vazio
    if (cart.length === 0) {
        sectionCarrinho.innerHTML = `
            <div class="empty-cart-message" style="text-align: center; margin-top: 50px;">
                <h1 style="font-size: 3rem; color: #555;">Sua sacola está vazia</h1>
                <img src="../imagens/sacola2.png" width="300px" style="background-color:black">
            </div>
        `;
        return;
    }

    // Criar os cards para cada item no carrinho
    cart.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.style.maxWidth = "540px";

        card.innerHTML = `
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.image}" class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">R$ ${parseFloat(item.price).toFixed(2).replace(".", ",")}</p>
                        <div class="quantity">
                            <button class="minus" data-index="${index}">-</button>
                            <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                            <button class="plus" data-index="${index}">+</button>
                        </div>
                        <div>
                            <input type="checkbox" class="select-item" data-index="${index}" checked> Selecionar
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adicionar o card ao contêiner
        cartItemsContainer.appendChild(card);
    });

    // Atualizar o total inicial no HTML
    updateTotal();

    // Atualizar o contador inicial
    updateCounter();

    // Adicionar eventos para os botões de aumentar e diminuir quantidade
    cartItemsContainer.addEventListener("click", (event) => {
        const button = event.target;
        if (button.classList.contains("minus") || button.classList.contains("plus")) {
            const index = parseInt(button.dataset.index, 10);
            const product = cart[index];

            if (button.classList.contains("minus") && product.quantity > 1) {
                product.quantity--;
            } else if (button.classList.contains("plus")) {
                product.quantity++;
            }

            // Atualizar o localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Atualizar a quantidade no input
            const quantityInput = button.closest(".quantity").querySelector(".quantity-input");
            quantityInput.value = product.quantity;

            localStorage.setItem("cart", JSON.stringify(cart));
            // Recalcular total e contador
            updateTotal();
            updateCounter();
        }
    });

    // Atualizar o total quando os checkboxes forem clicados
    cartItemsContainer.addEventListener("change", (event) => {
        const checkbox = event.target;
        if (checkbox.classList.contains("select-item")) {
            const index = parseInt(checkbox.dataset.index, 10);
            const item = cart[index];

            item.selected = checkbox.checked;

            // Atualizar o localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
            updateTotal();
        }
    });
});
// Função para resetar o carrinho e os cards
function ResetarCarrinho() {
    // Remover o item "cart" do localStorage
    localStorage.removeItem("cart");

    // Atualizar o contador de itens no carrinho
    updateCounter();

    // Resetar todos os cards dos produtos na página
    const productCards = document.querySelectorAll(".product-card"); // Ajuste o seletor para os seus cards

    productCards.forEach(card => {
        // Resetar campos específicos de cada card
        const quantityInput = card.querySelector(".product-quantity");
        if (quantityInput) {
            quantityInput.value = 1; // Redefinir a quantidade para 1
        }

        const addToCartButton = card.querySelector(".btn-adicionar-carrinho");
        if (addToCartButton) {
            addToCartButton.disabled = false; // Reativar o botão, se necessário
            addToCartButton.textContent = "Adicionar ao carrinho"; // Texto original do botão
        }
    });

    // Exibir mensagem de feedback (opcional)
    alert("O carrinho e os cards foram resetados com sucesso!");
}

// Adicionar evento de clique ao botão de resetar carrinho (se existir no DOM)
document.querySelector(".btn-resetar-carrinho")?.addEventListener("click", function () {
    ResetarCarrinho();
});