// Updated productImages object with correct 'images/' folder path
const productImages = {
    'Лепёшка': 'images/non_bread.jpg',
    'Хлеб пшеничный': 'images/wheat_bread.jpg',
    'Самбуса': 'images/sambusa.jpg',
    'Кулча': 'images/kulcha.jpg',
    'Булочка сладкая': 'images/sweet_bun.jpg',
    'Чапоти': 'images/chapoti.jpg',
    'Пирожки с картошкой': 'images/potato_pirozhki.jpg',
    'Хлеб ржаной': 'images/rye_bread.jpg',
    'Фатир': 'images/fatir.jpg',
    'Батон нарезной': 'images/baton.jpg',
    'Яблоки местные': 'images/apples.jpg',
    'Гранаты': 'images/pomegranates.jpg',
    'Виноград кишмиш': 'images/grapes.jpg',
    'Дыня': 'images/melon.jpg',
    'Арбуз': 'images/watermelon.jpg',
    'Персики': 'images/peaches.jpg',
    'Абрикосы': 'images/apricots.jpg',
    'Хурма': 'images/persimmon.jpg',
    'Инжир': 'images/figs.jpg',
    'Груши': 'images/pears.jpg',
    'Говядина': 'images/beef.jpg',
    'Баранина': 'images/lamb.jpg',
    'Курица целая': 'images/chicken.jpg',
    'Молоко 3.2%': 'images/milk.jpg',
    'Сметана 20': 'images/sour_cream.jpg',
    'Творожный сыр': 'images/cream_cheese.jpg',
    'Колбаса вареная': 'images/sausage.jpg',
    'Йогурт натуральный': 'images/yogurt.jpg',
    'Кефир 2.5%': 'images/kefir.jpg',
    'Сыр сулугуни': 'images/suluguni.jpg',
    'Зимняя куртка мужская': 'images/mens_jacket.jpg',
    'Пальто женское': 'images/womens_coat.jpg',
    'Куртка детская': 'images/kids_jacket.jpg',
    'Пуховик унисекс': 'images/down_jacket.jpg',
    'Ветровка': 'images/windbreaker.jpg',
    'Куртка кожаная': 'images/leather_jacket.jpg',
    'Плащ женский': 'images/womens_trench.jpg',
    'Парка': 'images/parka.jpg',
    'Куртка спортивная': 'images/sports_jacket.jpg',
    'Пончо': 'images/poncho.jpg',
    'Чакан женский': 'images/women_chakan.jpg',
    'Курпача мужская': 'images/kurpacha.jpg',
    'Тюбетейка': 'images/tyubeteyka.jpg',
    'Платок шёлковый': 'images/silk_scarf.jpg',
    'Чакан детский': 'images/kids_chakan.jpg',
    'Жилет национальный': 'images/national_vest.jpg',
    'Пояс тканый': 'images/woven_belt.jpg',
    'Штаны национальные': 'images/national_pants.jpg',
    'Шарф с вышивкой': 'images/embroidered_scarf.jpg',
    'Чуст национальная': 'images/chust_n.jpg',
    'Детские кроссовки': 'images/kids_sneakers.jpg',
    'Сандалии детские': 'images/kids_sandals.jpg',
    'Ботинки зимние': 'images/kids_winter_boots.jpg',
    'Туфли детские': 'images/kids_dress_shoes.jpg',
    'Кеды для детей': 'images/kids_canvas_shoes.jpg',
    'Тапочки домашние': 'images/kids_slippers.jpg',
    'Сапоги резиновые': 'images/kids_rain_boots.jpg',
    'Мокасины детские': 'images/kids_moccasins.jpg',
    'Балетки': 'images/kids_ballet_flats.jpg',
    'Сапоги зимние': 'images/kids_winter_shoes.jpg',
    'Моющее средство для посуды': 'images/dish_soap.jpg',
    'Стиральный порошок': 'images/laundry_detergent.jpg',
    'Очиститель для стекол': 'images/glass_cleaner.jpg',
    'Средство для ванной': 'images/bathroom_cleaner.jpg',
    'Освежитель воздуха': 'images/air_freshener.jpg',
    'Универсальный очиститель': 'images/universal_cleaner.jpg',
    'Средство для полов': 'images/floor_cleaner.jpg',
    'Гель для туалета': 'images/toilet_gel.jpg',
    'Пятновыводитель': 'images/stain_remover.jpg',
    'Кондиционер для белья': 'images/fabric_softener.jpg',
    'Набор тарелок 6 шт.': 'images/plates_set.jpg',
    'Чайный сервиз': 'images/tea_set.jpg',
    'Набор стаканов': 'images/glasses_set.jpg',
    'Кастрюля 3 л': 'images/pot_3l.jpg',
    'Сковорода 24 см': 'images/frying_pan.jpg',
    'Набор ложек 6 шт.': 'images/spoons_set.jpg',
    'Набор вилок 6 шт.': 'images/forks_set.jpg',
    'Чайник заварочный': 'images/teapot.jpg',
    'Набор ножей 3': 'images/knife_set.jpg',
    'Миска для салата': 'images/salad_bowl.jpg',
    'Постельное бельё 1,5 сп': 'images/single_bedding.jpg',
    'Полотенце банное': 'images/bath_towel.jpg',
    'Скатерть': 'images/tablecloth.jpg',
    'Плед': 'images/blanket.jpg',
    'Подушка': 'images/pillow.jpg',
    'Одеяло': 'images/quilt.jpg',
    'Шторы': 'images/curtains.jpg',
    'Коврик для ванной': 'images/bath_mat.jpg',
    'Набор салфеток 4 шт.': 'images/napkins_set.jpg',
    'Покрывало': 'images/bedspread.jpg',
    'Смартфон Xiaomi': 'images/xiaomi_phone.jpg',
    'Зарядное устройство USB-C': 'images/usb_c_charger.jpg',
    'Наушники беспроводные': 'images/wireless_earbuds.jpg',
    'Смартфон Samsung': 'images/samsung_phone.jpg',
    'Power Bank 10000 mAh': 'images/power_bank.jpg',
    'Кабель USB-C': 'images/usb_c_cable.jpg',
    'Чехол для смартфона': 'images/phone_case.jpg',
    'Защитное стекло': 'images/screen_protector.jpg',
    'Смартфон Huawei': 'images/huawei_phone.jpg',
    'Держатель для телефона': 'images/phone_holder.jpg',
    'LED лампа 10W': 'images/led_bulb_10w.jpg',
    'Настольная лампа': 'images/desk_lamp.jpg',
    'Светильник потолочный': 'images/ceiling_light.jpg',
    'Лента LED 5м': 'images/led_strip.jpg',
    'Фонарик LED': 'images/led_flashlight.jpg',
    'Лампа накаливания 60W': 'images/incandescent_bulb.jpg',
    'Ночник': 'images/night_light.jpg',
    'Уличный фонарь LED': 'images/outdoor_led_light.jpg',
    'Лампа энергосберегающая': 'images/cfl_bulb.jpg',
    'Торшер': 'images/floor_lamp.jpg',
    'Электрочайник 1.7L': 'images/electric_kettle.jpg',
    'Миксер ручной': 'images/hand_mixer.jpg',
    'Тостер': 'images/toaster.jpg',
    'Блендер погружной': 'images/immersion_blender.jpg',
    'Утюг паровой': 'images/steam_iron.jpg',
    'Фен для волос': 'images/hair_dryer.jpg',
    'Кофеварка': 'images/coffee_maker.jpg',
    'Мясорубка электрическая': 'images/meat_grinder.jpg',
    'Вентилятор настольный': 'images/desk_fan.jpg',
    'Соковыжималка': 'images/juicer.jpg'
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
    // Replace alert with snackbar (assuming index.html has snackbar implementation)
    const snackbar = document.createElement('div');
    snackbar.textContent = 'Товар успешно добавлен в корзину!';
    snackbar.className = 'snackbar show';
    document.body.appendChild(snackbar);
    setTimeout(() => {
        snackbar.className = 'snackbar';
        document.body.removeChild(snackbar);
    }, 3000);
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
        const imagePath = productImages[item.name] || 'images/placeholder.jpg';
        itemEl.innerHTML = `
            <img src="${imagePath}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Цена: ${item.price} TJS</p>
            <p>Количество: ${item.quantity} шт.</p>
            <p>Итого: ${item.quantity * item.price} TJS</p>
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