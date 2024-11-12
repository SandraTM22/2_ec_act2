const { addToCart, updateCartDisplay, toggleCart } = require("./script");

//Prueba para agregar producto

test(' Debe de agregar un priducto al carrito', () => {
    const cartProduct = addToCart("hamburguesa",10);
    expect(cartProducts.lenght).toBe("1");
})