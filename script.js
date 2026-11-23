let cart = [];

function addToCart(name, price) {

    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();

    alert(name + " добавлен в корзину!");
}

function updateCart() {

    let items = document.getElementById("cartItems");
    let count = document.getElementById("cartCount");
    let total = document.getElementById("cartTotal");

    items.innerHTML = "";

    let totalPrice = 0;
    let totalCount = 0;

    cart.forEach(function(product, index) {

        totalPrice += product.price * product.quantity;
        totalCount += product.quantity;

        items.innerHTML += `
            <div class="cart-item">

                <b>${product.name}</b>

                <p>
                    ${product.price} ₸ × ${product.quantity}
                </p>

                <button onclick="changeQuantity(${index}, -1)">
                    −
                </button>

                ${product.quantity}

                <button onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <button onclick="removeFromCart(${index})">
                    Удалить
                </button>

            </div>
        `;
    });

    count.innerText = totalCount;
    total.innerText = totalPrice;
}

function changeQuantity(index, number) {

    cart[index].quantity += number;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function openCart() {

    document.getElementById("cartWindow").style.display = "flex";

}

function closeCart() {

    document.getElementById("cartWindow").style.display = "none";

}

function buyProducts() {

    if (cart.length === 0) {

        alert("Корзина пока пустая!");

        return;
    }

    alert("Спасибо за покупку! Ваш заказ принят ❤️");

    cart = [];

    updateCart();

    closeCart();
}

let weeklyProduct = {

    name: "Лимонный пиррог",

    description:
        "Нежный кекс с лимонной глазурью и лёгким цитрусовым вкусом.",

    price: 750,

    image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=85"
};


document.getElementById("weeklyImage").src =
    weeklyProduct.image;

document.getElementById("weeklyName").innerText =
    weeklyProduct.name;

document.getElementById("weeklyDescription").innerText =
    weeklyProduct.description;

document.getElementById("weeklyPrice").innerText =
    weeklyProduct.price + " ₸";


document.getElementById("weeklyButton").onclick = function() {

    addToCart(
        weeklyProduct.name,
        weeklyProduct.price
    );

};