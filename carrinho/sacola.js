document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const sectionCarrinho = document.getElementById("Seção-carrinho");
    const contador = document.querySelector(".contador"); // Seleciona o elemento do contador

    // Obter os dados do carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    // Função para atualizar o total no HTML
    function updateTotal() {
        totalPriceElement.textContent = `Valor total: R$ ${total.toFixed(2).replace(".", ",")}`;
    }

    // Função para atualizar o contador de itens no carrinho
    function updateCounter() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // Atualiza a contagem com a quantidade
        contador.textContent = totalItems; // Atualiza o valor no contador
    }

    // Verificar se o carrinho está vazio
    if (cart.length === 0) {
        // Ocultar os elementos da seção do carrinho
        sectionCarrinho.innerHTML = `
            <div class="empty-cart-message" style="text-align: center; margin-top: 50px;">
                <h1 style="font-size: 3rem; color: #555;">Sua sacola está vazia</h1>
                <img src="../imagens/sacola2.png" width="300px" style="background-color:black">
            </div>
        `;
        return; // Não precisa continuar o restante da lógica
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
                        <p class="card-text">${item.price}</p>
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

        // Calcular o total inicial
        const price = parseFloat(item.price.replace("R$", "").replace(",", ".").trim()) * item.quantity;
        total += isNaN(price) ? 0 : price;
    });

    // Atualizar o total inicial no HTML
    updateTotal();

    // Atualizar o contador inicial
    updateCounter();

    // Atualizar o total quando os checkboxes forem clicados
    cartItemsContainer.addEventListener("change", (event) => {
        const checkbox = event.target;
        if (checkbox.classList.contains("select-item")) {
            const price = parseFloat(checkbox.dataset.price.replace("R$", "").replace(",", ".").trim()) * checkbox.checked;
            total += checkbox.checked ? price : -price;
            updateTotal();
        }
    });

    // Adicionar eventos para os botões de aumentar e diminuir quantidade
    cartItemsContainer.addEventListener("click", (event) => {
        const button = event.target;
        if (button.classList.contains("minus") || button.classList.contains("plus")) {
            const index = button.dataset.index;
            const product = cart[index];

            // Atualizar quantidade
            if (button.classList.contains("minus") && product.quantity > 1) {
                product.quantity--;
            } else if (button.classList.contains("plus")) {
                product.quantity++;
            }

            // Atualizar o localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Recalcular total e atualizar o contador sem recarregar a página
            total = 0; // Resetar o total e recalcule-o com as quantidades atualizadas
            cart.forEach(item => {
                const price = parseFloat(item.price.replace("R$", "").replace(",", ".").trim()) * item.quantity;
                total += price;
            });
            updateTotal();
            updateCounter();
        }
    });
});

function ResetarCarrinho() {
    const confirmar = confirm("Tem certeza de que deseja esvaziar o carrinho?");
    if (confirmar) {
        localStorage.removeItem("cart");
        alert("Carrinho resetado!");
        location.reload();
    }
}
