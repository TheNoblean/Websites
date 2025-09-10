function addToCart(itemId, quantity, color) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ itemId, quantity: parseInt(quantity), color });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}

function getCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.map(cartItem => {
        const product = getProductById(cartItem.itemId);
        return { ...product, quantity: cartItem.quantity, color: cartItem.color };
    });
}

function calculateTotal() {
    const items = getCartItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function clearCart() {
    localStorage.removeItem('cart');
}
