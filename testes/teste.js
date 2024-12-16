// Objeto com detalhes dos produtos
const products = {
    'batom-primavera': {
        title: 'Batom Primavera Nova Coleção',
        image: 'imagens/batom1.png',
        price: 'R$ 39,99'
    },
    'batom-verao': {
        title: 'Batom Verão Nova Coleção',
        image: 'imagens/batom2.png',
        price: 'R$ 29,99'
    }
};

// Função para atualizar o carrinho
function updateCart(productKey) {
    const product = products[productKey];

    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-price').textContent = product.price;
}
const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("dropdown");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});
