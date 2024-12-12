// Objeto com detalhes dos produtos
const products = {
    'batom-primavera': {
        title: 'Batom Frescor da Primavera',
        image: '../imagens/15596984-a5d2-4d4b-89b0-3787c8cc40a6-revlon-ultra-hd-romance-batom-liquido-matte-59ml.webp',
        price: 'R$120,00',
        installments:'ou 1x de R$ 39,99 sem juros ou em até 6x de R$ 7,20 no cartão'
    },
    'gloss-floral': {
        title: 'Gloss Floral Brilhante',
        image: '../imagens/1xg.png',
        price: 'R$115,00',
        installments:'ou 1x de R$ 39,99 sem juros ou em até 6x de R$ 7,20 no cartão'
    },
    'gloss-chocolate': {
        title: 'Gloss Toque de Chocolate',
        image: '../imagens/874-8746209_fenty-beauty-lip-gloss.png',
        price: 'R$110,00'
    },
    'iluminador-manha': {
        title: 'Iluminador Brilho da Manhã',
        image: '../imagens/iluminador_glow_and_go_golden_0.png',
        price: 'R$135,00'
    },
    'base-matte': {
        title: 'Base Corretivo Matte',
        image: '../imagens/dfb1321f-6b18-4425-a4c6-04973ca68535-mari-maria-makeup-velvet-skin-cacau-base-liquida-25g.webp',
        price: 'R$199,90'
    },
    'paleta-maquiagem': {
        title: 'Paleta de Maquiagem',
        image: '../imagens/5d91ddeb-4983-4ace-9161-6ab8ece780ee-88122-vult-rica-de-marre-paleta-de-maquiagem-12g.webp',
        price: 'R$89,90'
    },
    'hidratante-creme': {
        title: 'Hidratante Creme Nutritivo',
        image: '../imagens/e89f6e8f-1972-49bf-ba67-598122306979-102585-vult-care-creme-reparador-facial-100g.webp',
        price: 'R$49,90'
    },
    'lapis-clarins': {
        title: 'Lápis Clarins Marrom',
        image: '../imagens/clarins-crayon-sourcils-02-light-brown-lapis-para-sobrancelha-13g-35585-3714440298571283189.webp',
        price: 'R$29,90'
    },
    'gloss-labial': {
        title: 'Gloss Labial Nova Coleção',
        image: '../imagens/maca.png',
        price: 'R$19,90'
    }
};

// Função para calcular parcelamento e atualizar o objeto com a mensagem correta
function parcelamento() {
    Object.keys(products).forEach(productKey => {
        const product = products[productKey];

        // Obter o preço do produto e converter para número
        const price = parseFloat(product.price.replace('R$', '').replace(',', '.'));

        // Cálculos para parcelamento
        const sixInstallmentsValue = (price / 6).toFixed(2); // Parcelado em 6 vezes sem juros

        // Para parcelamentos acima de 6 vezes (com 2.5% de taxa por parcela)
        const totalWithFee = price * 1.025; // Aplicando a taxa de 2.5%
        const nineInstallmentsValue = (totalWithFee / 9).toFixed(2); // Parcelado em 9 vezes

        // Criar a mensagem de parcelamento
        const installmentMessage = ` 
        ou 6x de R$ ${sixInstallmentsValue.replace('.', ',')} sem juros, 
        ou 9x de R$ ${nineInstallmentsValue.replace('.', ',')} reais`;

        // Atualizar o objeto com a nova mensagem
        product.installments = installmentMessage;
    });
}

// Executar o cálculo de parcelamento para atualizar os produtos
parcelamento();

// Atualizar detalhes do produto na página se existir o parâmetro na URL
function updateProductDetails(productKey) {
    const product = products[productKey];

    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-image').src = product.image;
    document.querySelectorAll('.product-price').forEach(element => {
        element.textContent = product.price;
    });    
    document.getElementById('product-installments').textContent = product.installments;
}

// Pegar o parâmetro do produto da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Atualizar os detalhes do produto selecionado, se existir
const productKey = getQueryParam('product');
if (productKey && products[productKey]) {
    updateProductDetails(productKey);
} else {
    console.error('Produto não encontrado ou nenhum produto foi selecionado.');
}

// Lógica para aumentar e diminuir quantidade
const quantityInput = document.getElementById('quantity');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');

minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
});

plusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    quantity++;
    quantityInput.value = quantity;
});








function AdicionarSacola() {
    function parsePrice(price) {
        return parseFloat(price.replace('R$', '').replace(',', '.').trim());
    }

    const productImage = document.getElementById("product-image").src;
    const productTitle = document.getElementById("product-title").innerText;
    const productPrice = parsePrice(document.querySelector(".product-price").innerText);

    // Objeto representando o produto
    const product = {
        image: productImage,
        title: productTitle,
        price: productPrice,
        quantity: 1, // Inicialmente, a quantidade é 1
    };

    // Obter o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar se o produto já existe no carrinho
    const existingProduct = cart.find((item) => item.title === productTitle);

    if (existingProduct) {
        // Se já existe, aumentar a quantidade
        existingProduct.quantity += 1;
    } else {
        // Caso contrário, adicionar o novo produto
        cart.push(product);
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produto adicionado à sacola!");
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


function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}
function fechar(){
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display=dropdown.style.display=== 'flex' ? 'none' : 'flex';
}