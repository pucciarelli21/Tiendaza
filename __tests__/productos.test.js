const filtrarProductos = require("../js/productos.js");
const productos = require("../api/productos.json");

// Escribir los tests debajo

test("Devuelve un array vacío cuando se pasa una categoría vacía", () => {
  const resultado = filtrarProductos(productos, "");
  expect(resultado).toEqual([]);
});

test('Devuelve productos solo de la categoría "camperas"', () => {
  const resultado = filtrarProductos(productos, "camperas");
  expect(resultado).toEqual(
    productos.filter((producto) => producto.categoria === "camperas")
  );
});

test("Devuelve un array vacío cuando la categoría no está presente en los productos", () => {
  const resultado = filtrarProductos(productos, "zapatos");
  expect(resultado).toEqual([]);
});

test("Maneja un array vacío de productos y devuelve un array vacío", () => {
  const resultado = filtrarProductos([], "camperas");
  expect(resultado).toEqual([]);
});
