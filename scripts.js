function showContactForm() {
    document.getElementById('formSection').style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. ¡Nos pondremos en contacto contigo pronto!');
    document.getElementById('contactForm').reset();
    document.getElementById('formSection').style.display = 'none';
});

let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = `Total: $${total}`;
    document.getElementById('cartCount').textContent = cart.length;
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }
    alert(`Total a pagar: $${total}. Gracias por tu compra!`);
    cart = [];
    total = 0;
    displayCart();
}
