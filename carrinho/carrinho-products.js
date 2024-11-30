// Objeto com detalhes dos produtos
const products = {
    'batom-primavera': {
        title: 'Batom Frescor da Primavera',
        image: 'imagens/15596984-a5d2-4d4b-89b0-3787c8cc40a6-revlon-ultra-hd-romance-batom-liquido-matte-59ml.webp',
        price: 'R$120,00'
    },
    'gloss-floral': {
        title: 'Gloss Floral Brilhante',
        image: 'imagens/205832-800-auto.png',
        price: 'R$115,00'
    },
    'gloss-chocolate': {
        title: 'Gloss Toque de Chocolate',
        image: 'imagens/874-8746209_fenty-beauty-lip-gloss.png',
        price: 'R$110,00'
    },
    'iluminador-manha': {
        title: 'Iluminador Brilho da Manhã',
        image: 'imagens/iluminador_glow_and_go_golden_0.png',
        price: 'R$135,00'
    },
    'base-matte': {
        title: 'Base Corretivo Matte',
        image: 'imagens/dfb1321f-6b18-4425-a4c6-04973ca68535-mari-maria-makeup-velvet-skin-cacau-base-liquida-25g.webp',
        price: 'R$199,90'
    },
    'paleta-maquiagem': {
        title: 'Paleta de Maquiagem',
        image: 'imagens/5d91ddeb-4983-4ace-9161-6ab8ece780ee-88122-vult-rica-de-marre-paleta-de-maquiagem-12g.webp',
        price: 'R$89,90'
    },
    'hidratante-creme': {
        title: 'Hidratante Creme Nutritivo',
        image: 'imagens/e89f6e8f-1972-49bf-ba67-598122306979-102585-vult-care-creme-reparador-facial-100g.webp',
        price: 'R$49,90'
    },
    'lapis-clarins': {
        title: 'Lápis Clarins Marrom',
        image: 'imagens/clarins-crayon-sourcils-02-light-brown-lapis-para-sobrancelha-13g-35585-3714440298571283189.webp',
        price: 'R$29,90'
    },
    'gloss-labial': {
        title: 'Gloss Labial Nova Coleção',
        image: 'imagens/maca.png',
        price: 'R$19,90'
    }
};


// Função para atualizar o carrinho
function updateCart(productKey) {
    const product = products[productKey];

    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-price').textContent = product.price;
}