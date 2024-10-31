const filtrarProductos = require('../js/productos.js');

// Escribir los tests debajo

test("filtrar productos", () =>{
    const result = filtrarProductos(productos)
    expect(result).toEqual(filtrarPantalones('pantalones'));
});


/*
test("Mostrar productos", () =>{
    const result = mostrarContadorProductos('../js/productos')
    expect(result);
});

test("sum productos", () =>{
    const result = calculator.sum(1,2)
    expect(result).toEquual(filtrarProductos())
});
*/
