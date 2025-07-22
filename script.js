// مدیریت سبد خرید
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // افزودن به سبد خرید
        cart.push({
            name: productName,
            price: productPrice
        });
        
        updateCartCounter();
        showAlert(`${productName} به سبد خرید اضافه شد!`);
    });
});

// به‌روزرسانی تعداد محصولات در سبد
function updateCartCounter() {
    const counter = document.getElementById('cart-count');
    counter.textContent = cart.length;
}

// نمایش اعلان
function showAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'alert';
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// فیلتر محصولات (مثال)
function filterProducts(category) {
    // پیاده‌سازی فیلتر محصولات
    console.log(`فیلتر بر اساس: ${category}`);
}

// بارگذاری اولیه
document.addEventListener('DOMContentLoaded', () => {
    console.log('فروشگاه آماده است!');
});
