const buyButtons = document.querySelectorAll('.buy-btn');
const payButton = document.querySelector('.pay-btn');
let totalPrice = 0;
let totalCount = 0;


buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const priceString = this.parentNode.querySelector('.price').textContent;
        const price = parseFloat(priceString.replace('$', '').trim());

        totalPrice += price;
        totalCount++;

        document.getElementById('total-price').textContent = totalPrice;
        document.getElementById('total-count').textContent = totalCount;

    });
});
const notification = document.getElementById('notification');

payButton.addEventListener('click', function() {
    notification.style.display = 'block';
    
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000); // Скрыть уведомление через 3 секунды
});

payButton.addEventListener('click', function() {
    // Обнуление количества покупок и итоговой стоимости
    totalPrice = 0;
    totalCount = 0;

    document.getElementById('total-price').textContent = totalPrice;
    document.getElementById('total-count').textContent = totalCount;

});
