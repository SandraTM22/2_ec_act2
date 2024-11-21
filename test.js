const { addToCart, updateCartDisplay, toggleCart } = require('./script');

describe('Pruebas en el carrito de compras', () => {
  beforeEach(() => {
    // Configuramos el DOM necesario para las pruebas
    document.body.innerHTML = `
      <div id="cart-list"></div>
      <div id="cart-empty"></div>
      <div id="cart-count"></div>
      <button id="clear-cart">Vaciar Carrito</button>
      <div id="cart-modal" class="hidden"></div>
    `;
  });

  test('Debe agregar un producto al carrito', () => {
    // Simulamos añadir un producto al carrito
    addToCart('Pizza Margarita', 10);
    updateCartDisplay();

    // Verificamos que el producto se ha añadido correctamente al carrito
    const cartList = document.getElementById('cart-list');
    expect(cartList.innerHTML).toBe('<li>Pizza Margarita - 10€</li>'); // Verifica que el producto esté en el carrito
  });

  test('Debe vaciar el carrito cuando se hace click en "Vaciar Carrito"', () => {
    // Añadimos un producto antes de vaciar el carrito
    addToCart('Pizza Margarita', 10);

    // Simulamos el click en el botón "Vaciar Carrito"
    const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.click();

    // Verificamos que el carrito está vacío
    const cartList = document.getElementById('cart-list');
    expect(cartList.innerHTML).toBe(''); // Verifica que el carrito está vacío
  });
});
