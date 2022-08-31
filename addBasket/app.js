'use strict';

let addToCartButtons = document.querySelectorAll('button[data-id]');
let basketButtonSpanCount = document.querySelector('.basket_button_span');
let basketBox = document.querySelector('.basket_box');
let basketBoxTotalBriceTextSpan = document.querySelector('.basket_box__total_price_text_span');
let basket = {};

addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let id = event.currentTarget.getAttribute('data-id');
        addToBasket(id);
    })
})

function addBasketBoxItem(id) {
    let basketBoxItem = `
    <div class="basket_box__item" data-id="${id}">
        <a href="product.html" class="basket_box__item_link">
            <img src="${productsData[id].img}" alt="photo" class="basket_box__item_photo">
            <div class="basket_box__item_info">
                <p class="basket_box__item_info_name">${productsData[id].name}</p>
                <img src="img/basket_stars.png" alt="stars"
                    class="basket_box__item_info_stars">
                    <div class="basket_box__item_info_price_flex">
                    <p class="basket_box__item_info_price"><span
                class="basket_box__item_span_count" data-id="${id}">1</span> x $<span
                class="basket_box__item_span_price">${(productsData[id].price).toFixed(2)}</span></p> <p class="basket_box__item_info_total_price">$<span
                class="basket_box__item_span_total_price" data-id="${id}">${(productsData[id].price).toFixed(2)}</span></p>
                </div>
                    
            </div>

        </a>
        <a href="#" class="basket_box__item_delete"><i
                class="fa-solid fa-circle-xmark"></i></a>

    </div>
    `;
    basketBox.insertAdjacentHTML('afterbegin', basketBoxItem);
}

function incrBasketBoxItemSpanCount(id) {
    let basketBoxItemSpanCount = document.querySelector(`.basket_box__item_span_count[data-id="${id}"]`);
    basketBoxItemSpanCount.innerText++;
}

function incrBasketBoxItemSpanTotalPrice(id) {
    let basketBoxItemSpanTotalPrice = document.querySelector(`.basket_box__item_span_total_price[data-id="${id}"]`);
    basketBoxItemSpanTotalPrice.innerText = (productsData[id].price * basket[id]).toFixed(2);
}

function addBasket(id) {
    if (id in basket) {
        basket[id]++;
        incrBasketBoxItemSpanCount(id)
        incrBasketBoxItemSpanTotalPrice(id)
    } else {
        basket[id] = 1;
        addBasketBoxItem(id);
    }
}

function totalPrice() {
    let result = 0;
    for (let value in basket) {
        result += productsData[value].price * basket[value];
    }
    return result;
}

function addToBasket(id) {
    basketButtonSpanCount.style.display = 'block'
    basketButtonSpanCount.innerText++;
    addBasket(id);
    basketBoxTotalBriceTextSpan.innerText = totalPrice().toFixed(2);
}
