// cart.js
const productImages = {
    'Samsung Galaxy S24 Ultra': 'img/samsung.png',
    'Apple MacBook Pro': 'img/Apple.png',
    'Sony WH-1000XM4': 'img/Sony.png',
    'HP Spectre x360': 'img/hp.png',
    'Xiaomi Mi 13 Pro': 'img/xiaomi.png',
    'Lenovo Legion 5': 'img/lenovo.png',
    'Dyson V15 Detect': 'img/dyson.png',
    'Sony Bravia XR OLED': 'img/sony_tv.png',
    'JBL Charge 5': 'img/jbl.png',
    'Футболка Nike': 'img/clothes1.jpg',
    'Джинсы Levi\'s': 'img/clothes2.jpg',
    'Куртка Zara': 'img/clothes3.jpg',
    'Пальто H&M': 'img/clothes4.jpg',
    'Рубашка Lacoste': 'img/clothes5.jpg',
    'Платье Uniqlo': 'img/clothes6.jpg',
    'Шорты Adidas': 'img/clothes7.jpg',
    'Свитер Mango': 'img/clothes8.jpg',
    'Шапка Puma': 'img/clothes9.jpg',
    'Пицца Маргарита': 'img/food1.jpg',
    'Суши Филадельфия': 'img/food2.jpg',
    'Бургер Классик': 'img/food3.jpg',
    'Паста Карбонара': 'img/food4.jpg',
    'Стейк Рибай': 'img/food5.jpg',
    'Салат Цезарь': 'img/food6.jpg',
    'Том Ям': 'img/food7.jpg',
    'Шашлык из курицы': 'img/food8.jpg',
    'Тирамису': 'img/food9.jpg',
    'Кроссовки Nike': 'img/shoes1.jpg',
    'Кроссовки Adidas': 'img/shoes2.jpg',
    'Ботинки Timberland': 'img/shoes3.jpg',
    'Классические туфли': 'img/shoes4.jpg',
    'Сандалии Puma': 'img/shoes5.jpg',
    'Кеды Vans': 'img/shoes6.jpg',
    'Ботильоны женские': 'img/shoes7.jpg',
    'Зимние сапоги': 'img/shoes8.jpg',
    'Шлепанцы Crocs': 'img/shoes9.jpg'
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.addToCart = function(name, price, button) {
    if (!name || !price || !button) {
        console.error('Invalid parameters for addToCart:', { name, price, button });
        return;
    }
    const quantityInput = button.previousElementSibling;
    const quantity = parseInt(quantityInput.value) || 1;
    
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину!');
    displayCart();
};

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalQuantityEl = document.getElementById('total-quantity');
    const totalPriceEl = document.getElementById('total-price');
    
    if (!cartItems || !totalQuantityEl || !totalPriceEl) {
        console.error('Cart elements not found');
        return;
    }
    
    cartItems.innerHTML = '';
    let totalQuantity = 0;
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        const imagePath = productImages[item.name] || 'img/placeholder.jpg';
        itemEl.innerHTML = `
            <img src="${imagePath}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Цена: ${item.price}c</p>
            <p>Количество: ${item.quantity} шт.</p>
            <p>Итого: ${item.quantity * item.price}c</p>
            <button onclick="removeFromCart(${index})" class="cart-button">Удалить</button>
        `;
        cartItems.appendChild(itemEl);
        totalQuantity += item.quantity;
        totalPrice += item.quantity * item.price;
    });
    
    totalQuantityEl.textContent = totalQuantity;
    totalPriceEl.textContent = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function displayCheckoutForm() {
    const checkoutForm = document.getElementById('checkout-form');
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (!checkoutForm) {
        console.error('Checkout form container not found');
        return;
    }
    
    if (!userData) {
        checkoutForm.innerHTML = `
            <label for="firstName">Имя:</label>
            <input type="text" id="firstName" required>
            <label for="lastName">Фамилия:</label>
            <input type="text" id="lastName" required>
            <label for="cardNumber">Номер карты:</label>
            <input type="text" id="cardNumber" required>
            <button onclick="saveUserData()" class="cart-button">Оформить</button>
        `;
    } else {
        checkoutForm.innerHTML = `
            <p>Имя: ${userData.firstName} ${userData.lastName}</p>
            <label for="cardSelect">Выберите карту:</label>
            <select id="cardSelect">
                <option value="${userData.cardNumber}">**** **** **** ${userData.cardNumber.slice(-4)}</option>
            </select>
            <button onclick="confirmOrder()" class="cart-button">Подтвердить</button>
        `;
    }
}

function saveUserData() {
    const firstName = document.getElementById('firstName')?.value;
    const lastName = document.getElementById('lastName')?.value;
    const cardNumber = document.getElementById('cardNumber')?.value;
    
    if (firstName && lastName && cardNumber) {
        localStorage.setItem('userData', JSON.stringify({ firstName, lastName, cardNumber }));
        confirmOrder();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

function confirmOrder() {
    alert('Заказ успешно оформлен!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('checkout-modal').style.display = 'none';
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
        
        const modal = document.getElementById('checkout-modal');
        const btn = document.getElementById('checkout-button');
        const span = document.getElementsByClassName('close')[0];
        
        if (btn && modal && span) {
            btn.onclick = () => {
                if (cart.length === 0) {
                    alert('Корзина пуста!');
                    return;
                }
                modal.style.display = 'block';
                displayCheckoutForm();
            };
            
            span.onclick = () => {
                modal.style.display = 'none';
            };
            
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        } else {
            console.error('Modal or button elements not found');
        }
    }
});