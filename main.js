//open&close cart
var cartd=document.querySelector('.cartd');

function open_cart() {
    cartd.classList.add("active")
}
function close_cart() {
    cartd.classList.remove("active")
}
var menu=document.querySelector("#menu")

function open_menu() {
    menu.classList.add("active")
}
function close_menu() {
    menu.classList.remove("active")
}

let big_img=document.getElementById("big_img")
function changeitemimg(img) {
    big_img.src=img
}


var all_products_json;

var items_in_cart = document.querySelector(".items_cart");
let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");

    console.log(product_cart);
    getCartItems();
}
let count_icon=document.querySelector(".count_icon")
let count_item_cart=document.querySelector(".count_item_cart")
let total_cost=document.querySelector(".total_cost")
let price_card_header=document.querySelector(".price_card_header")

function getCartItems() {
    let total_p=0;

    let items_c = '';
    for (let i = 0; i < product_cart.length; i++) {
        items_c += `
        <div class="item_img">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price_cart">$${product_cart[i].price}</p>
            </div>
            <button onclick ="removeFromCart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
        total_p+=product_cart[i].price
    }
    items_in_cart.innerHTML = items_c;
    price_card_header.innerHTML="$"+total_p
    count_icon.innerHTML=product_cart.length
    total_cost.innerHTML = "$"+total_p
    count_item_cart.innerHTML=`(${product_cart.length} items in Cart)`;

}



function removeFromCart(index) {
    product_cart.splice(index,1)
    getCartItems()
    let addCartButton=document.querySelectorAll(".fa-cart-plus")
    for (let i = 0; i < addCartButton.length; i++) {
        addCartButton[i].classList.remove("active")
        product_cart.forEach(product => {
            if(product.id==i){
                addCartButton[i].classList.add("active")
            }
        });
        
        
    }

}