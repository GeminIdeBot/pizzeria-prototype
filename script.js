document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('#hero button');
    if (orderButton) {
        orderButton.addEventListener('click', () => {
            alert('Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});