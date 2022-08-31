'use strict';

let productsData = [];
let productCards = document.querySelectorAll('.item');
productCards.forEach(function (productCard) {
    let name = productCard.querySelector('.item_text').innerText;
    let img = productCard.querySelector('.item_img').src;
    let price = +productCard.querySelector('.item_text_price_value').innerText;
    productsData.push({
        name,
        img,
        price
    });
});
