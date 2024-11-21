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

  // Limpiamos la lista y actualizamos el contador de productos en el ícono del carrito
  cartList.innerHTML = "<br>";
  cartCount.textContent = cartProducts.length;

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
    

    /* Para cada elemento del carrito, se cree un elemento <li></li>
    Se rellene con el nombre y el precio y se agrega el nuevo elemento en el html */
    cartProducts.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price}€`;
      cartList.appendChild(listItem);
    });
  }
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
 * @param {number} id del elemento
 */
document.getElementById("clear-cart").addEventListener("click", function () {
  cartProducts = [];
  updateCartDisplay();
});

// Finalmente llamamos a la fuccion para que actualice el carrito
updateCartDisplay();

// Para hacer las pruebas, tenemos que exportar las funciones a probar
module.exports = {
  addToCart,
  updateCartDisplay,
  toggleCart
};
