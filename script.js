document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.querySelector('#hero button');
    const modal = document.getElementById('order-modal');
    const closeButton = document.querySelector('.close-button');
    const orderForm = document.getElementById('order-form');
    const modalPizzaName = document.getElementById('modal-pizza-name');
    const modalPizzaPrice = document.getElementById('modal-pizza-price');
    const pizzaOrderButtons = document.querySelectorAll('.order-pizza-btn');

    let selectedPizza = {};

    if (orderButton) {
        orderButton.addEventListener('click', () => {
            alert('Пожалуйста, выберите пиццу из меню, чтобы сделать заказ.');
        });
    }

    pizzaOrderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            selectedPizza = {
                name: event.target.dataset.pizza,
                price: event.target.dataset.price
            };
            modalPizzaName.textContent = selectedPizza.name;
            modalPizzaPrice.textContent = selectedPizza.price;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        alert(`Заказ принят!\nПицца: ${selectedPizza.name}\nЦена: ${selectedPizza.price} грн\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}\n\nМы свяжемся с вами в ближайшее время.`);
        modal.style.display = 'none';
        orderForm.reset();
    });

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