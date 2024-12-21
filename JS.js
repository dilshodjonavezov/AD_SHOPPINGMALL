// Фильтрация магазинов по категориям
document.getElementById('filterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedCategory = document.getElementById('category').value;
    const storeItems = document.querySelectorAll('.store-item');

    storeItems.forEach(function (item) {
        if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
storeItems.forEach(function (item) {
    if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});

