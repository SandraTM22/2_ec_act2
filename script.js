// Creamos un array para almacenar los articulos que se añaden al carrito
let cartProducts = [];

/**
 * Actualiza el carrito
 */
function updateCartDisplay() {
  const cartList = document.getElementById("cart-list");
  const cartEmptyMessage = document.getElementById("cart-empty");
  const cartCount = document.getElementById("cart-count");
  const clearCart = document.getElementById("clear-cart");
  
  // Si el array del carrito esta vacio
  if (cartProducts.length === 0) {
    /* Entonces que el mensaje de "Carrito Vacio" tenga un display en bloque
     y que no aparezca el boton para vaciar el carro*/
    cartEmptyMessage.style.display = "block";
    clearCart.style.display = "none";
  } else {
    //Si no que NO tenga un display(que no se vea)
    cartEmptyMessage.style.display = "none";
    clearCart.style.display = "block";
  }

  // Si existe cartList en el DOM entonces le añade el html...
  if (cartList) {
    cartList.innerHTML = cartProducts
      .map((product) => `<li>${product.name} - ${product.price}€</li>`) //se transforma cada producto en una cadena de texto con el formato que le hemos dado
      .join(""); //Se juntan todas las cadenas de texto ya que innerHTML solo espera una cadena
  }

  //actualizamos el contador de productos en el ícono del carrito
  cartCount.textContent = cartProducts.length;

}

/**
 * Añade el elemento al array cartProducts y
 * llama a la funcion para actualizar el carrito
 * @param {string} name
 * @param {number} price
 */
function addToCart(name, price) {
  cartProducts.push({ name, price });
  updateCartDisplay();
}

/**
 * Agrega la clase "hidden" al contenedor del carrito si no está presente y la elimina si está presente
 */
function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.classList.toggle("hidden");
}

/**
 * Vacia el carrito y llama a updateCartDisplay
 */
function setupClearCartButton() {
  const clearCartButton = document.getElementById("clear-cart");
  //Si el boton esta definido en el DOM entonces..
  if (clearCartButton) {    
      cartProducts = [];
      updateCartDisplay();    
  }
}


// Para hacer las pruebas, tenemos que exportar las funciones a probar
module.exports = {
  addToCart,
  updateCartDisplay,
  setupClearCartButton
};
