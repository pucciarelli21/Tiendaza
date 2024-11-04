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

test('Devuelve un array vacío si la categoría es un número', () => {
    const resultado = filtrarProductos(productos, 123);
    expect(resultado).toEqual([]);
});

test('Devuelve los productos de la categoría "CAMPeras" ignorando mayúsculas y minúsculas', () => {
    const resultado = filtrarProductos(productos, 'CAMPeras');
    expect(resultado).toEqual(
        productos.filter(producto => producto.categoria.toLowerCase() === 'camperas')
    );
});

test('Devuelve productos para categorías con espacios en blanco (" camperas ")', () => {
    const resultado = filtrarProductos(productos, ' camperas ');
    expect(resultado).toEqual(
        productos.filter(producto => producto.categoria === 'camperas')
    );
});

test('Ignora productos que no tienen la propiedad "categoria"', () => {
    const productosConFaltantes = [...productos, { id: 'nuevo-producto', titulo: 'Producto sin categoría' }];
    const resultado = filtrarProductos(productosConFaltantes, 'camperas');
    expect(resultado).toEqual(
        productos.filter(producto => producto.categoria === 'camperas')
    );
});


test('Ignora productos con valores "null" o "undefined" en "categoria"', () => {
    const productosConNulos = [...productos, { id: 'producto-nulo', categoria: null }, { id: 'producto-undefined', categoria: undefined }];
    const resultado = filtrarProductos(productosConNulos, 'camperas');
    expect(resultado).toEqual(
        productos.filter(producto => producto.categoria === 'camperas')
    );
});