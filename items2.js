fetch("items.json")
    .then(response => response.json())
    .then(data => {
        const swiper_items_sale = document.getElementById("swiper_items_sale");
        const other_product = document.getElementById("other_product");

        all_products_json=data

        data.forEach(product => {
            if (product.old_price) {
                swiper_items_sale.innerHTML += `
                    <div class="product7 swiper-slide">
                        <div class="icons-pro">
                            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sales-icon">10%</span>
                        <div class="img-product">
                            <img src="${product.img}" alt="product image">
                            <img class="img-hover" src="${product.img_hover}" alt="hover image">
                        </div>
                        <h3 class="name-product">${product.name}</h3>
                        <div class="stars">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price2">
                            <p><span>${product.price}$</span></p>
                            <p class="old-price">${product.old_price}$</p>
                        </div>
                    </div>`;
            }
        });



        data.forEach(product => {
            
                other_product.innerHTML += `
                    <div class="product7 swiper-slide">
                        <div class="icons-pro">
                            <span><i onclick="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sales-icon">10%</span>
                        <div class="img-product">
                            <img src="${product.img}" alt="product image">
                            <img class="img-hover" src="${product.img_hover}" alt="hover image">
                        </div>
                        <h3 class="name-product">${product.name}</h3>
                        <div class="stars">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="price2">
                            <p><span>${product.price}$</span></p>
                        </div>
                    </div>`;
            
        });

    })
    .catch(error => console.error("Error fetching the products:", error));
