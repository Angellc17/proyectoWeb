
/*
=========================================================
ACTIVIDAD DE INICIACIÓN A JAVASCRIPT
Proyecto: Mi pequeña tienda
=========================================================

OBJETIVO:
Practicar los conceptos básicos de JavaScript utilizando
exclusivamente console.log() para mostrar los resultados.

CONTENIDOS:
- Variables y tipos de datos
- Arrays
- Operadores
- Condicionales
- Booleanos
- Bucles
- Funciones
- Métodos básicos

INSTRUCCIONES:
1. Lee cada apartado.
2. Completa las tareas indicadas.
3. Ejecuta el archivo con Node.js.
4. Comprueba los resultados en la terminal.

Para ejecutar el archivo:
node js/mi_tienda.js
*/


// =======================================================
// APARTADO 1. VARIABLES Y TIPOS DE DATOS
// =======================================================

console.log("===== BIENVENIDO A MI TIENDA =====");

// TAREA 1.
// Crea una variable llamada nombreTienda y guarda
// el nombre de tu tienda.

// Escribe tu código aquí.
let nombreTienda = "NovaCorp";


console.log(`Bienvenido a nuestra tienda ${nombreTienda}\n`);


// TAREA 2.
// Crea una variable llamada nombreProducto y guarda
// el nombre de un producto.

// Crea otra variable llamada precio y guarda su precio.

// Crea otra variable llamada stock y guarda cuántas
// unidades hay disponibles.

// Escribe tu código aquí.
let nombreProducto = "Portatil";
let precio = "2000€";
let stock = "5";


// TAREA 3.
// Muestra por consola el nombre del producto,
// su precio y las unidades disponibles.
//
// Ejemplo:
// Producto: Ratón
// Precio: 15
// Stock: 10

// Escribe tu código aquí.
console.log(`Producto: ${nombreProducto}\nPrecio: ${precio}\nStock: ${stock}`)



// =======================================================
// APARTADO 2. ARRAYS Y MÉTODOS
// =======================================================

console.log("\n===== NUESTROS PRODUCTOS =====");

// TAREA 4.
// Crea un array llamado productos que contenga
// cinco nombres de productos diferentes.

// Escribe tu código aquí.

let array = ["portatil", "celular", "raton", "teclado", "monitor"]

// TAREA 5.
// Muestra por consola el array completo.
console.log(array)

// Muestra también cuántos productos contiene
// utilizando la propiedad length.

// Escribe tu código aquí.
console.log(`Tenemos ${array.length} productos\n`)



// TAREA 6.
// Añade un nuevo producto al array utilizando push().
array.push("CPU")
// Muestra de nuevo el array para comprobar
// que el producto se ha añadido.

// Escribe tu código aquí.
console.log(`Se añadio un nuevo producto\n`);
console.log(array)


// TAREA 7.
// Comprueba si el array contiene un producto
// concreto utilizando includes().
//
// Muestra el resultado por consola.
// El resultado será true o false.

// Escribe tu código aquí.

console.log(array.includes("CPU"))//True
console.log(array.includes("USB"))//False



// TAREA 8.
// Muestra el nombre de un producto en mayúsculas
// utilizando el método toUpperCase().
//
// Consejo: puedes acceder a un elemento del array
// mediante su posición. La primera posición es 0.

// Escribe tu código aquí.

console.log(`La palabra ${array[0]} en mayusculas ${array[0].toUpperCase()}`)


// =======================================================
// APARTADO 3. OPERADORES
// =======================================================

console.log("\n===== CALCULAR UNA COMPRA =====");

// TAREA 9.
// Crea una variable llamada unidadesCompradas
// y guarda cuántas unidades quiere comprar
// un cliente.

// Crea otra variable llamada totalCompra
// y calcula el precio total multiplicando
// el precio del producto por las unidades.
//
// Operadores:
// + suma
// - resta
// * multiplicación
// / división

// Escribe tu código aquí.
let unidadesCompradas = 12
console.log(`El cliente desea comprar ${unidadesCompradas} unidades de un producto`)
let precioProducto = 30
let totalCompra = unidadesCompradas * precioProducto
console.log(`El precio del producto es ${precioProducto} y el total de la compra es: ${totalCompra}`)


// TAREA 10.
// Muestra por consola el número de unidades
// y el importe total de la compra.

// Escribe tu código aquí.



// TAREA 11.
// Calcula el precio de una unidad si el cliente
// compra dos unidades y recibe un descuento total
// de 4 euros.
//
// Pista:
// Descuento = 4
// Total con descuento = totalCompra - descuento

// Escribe tu código aquí.



// =======================================================
// APARTADO 4. CONDICIONALES
// =======================================================

console.log("\n===== COMPROBAR LA COMPRA =====");

// TAREA 12.
// Comprueba si el precio del producto es mayor
// que 20 euros.
//
// Si es mayor, muestra:
// "Es un producto caro".
//
// En caso contrario, muestra:
// "Es un producto económico".

// Escribe tu código aquí.



// TAREA 13.
// Comprueba si hay suficientes unidades en stock
// para atender la compra.
//
// Si el stock es mayor o igual que las unidades
// compradas, muestra:
// "Hay stock suficiente".
//
// En caso contrario, muestra:
// "No hay stock suficiente".

// Escribe tu código aquí.



// TAREA 14.
// Comprueba si el cliente puede recibir un descuento.
//
// Para ello, debe comprar al menos 3 unidades.
//
// Si cumple la condición, muestra:
// "El cliente tiene descuento".
//
// Si no la cumple, muestra:
// "El cliente no tiene descuento".

// Escribe tu código aquí.



// =======================================================
// APARTADO 5. BOOLEANOS Y OPERADORES LÓGICOS
// =======================================================

console.log("\n===== COMPROBACIONES =====");

// TAREA 15.
// Crea una variable llamada tiendaAbierta
// y asígnale el valor true.
//
// Crea otra variable llamada pagoRealizado
// y asígnale el valor false.

// Escribe tu código aquí.



// TAREA 16.
// Muestra por consola los valores de ambas variables.

// Escribe tu código aquí.



// TAREA 17.
// Comprueba si la tienda está abierta Y el pago
// se ha realizado.
//
// Utiliza el operador lógico &&.
//
// Si ambas condiciones son verdaderas,
// muestra "Pedido confirmado".
//
// En caso contrario, muestra "Pedido pendiente".

// Escribe tu código aquí.



// =======================================================
// APARTADO 6. BUCLES
// =======================================================

console.log("\n===== LISTA DE PRODUCTOS =====");

// TAREA 18.
// Utiliza un bucle for para mostrar todos los productos
// del array.
//
// Pista:
// - Empieza con let i = 0.
// - Continúa mientras i sea menor que productos.length.
// - Incrementa i en cada vuelta.
// - Accede a productos[i].
//
// Escribe tu código aquí.



// TAREA 19.
// Utiliza un bucle for...of para mostrar los productos
// del array.
//
// En este caso, la variable del bucle representa
// directamente cada producto.
//
// Escribe tu código aquí.



// TAREA 20.
// Utiliza un bucle for para mostrar los números
// del 1 al 5.
//
// Ejemplo:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

// Escribe tu código aquí.



// =======================================================
// APARTADO 7. FUNCIONES
// =======================================================

console.log("\n===== FUNCIONES DE LA TIENDA =====");

// TAREA 21.
// Crea una función llamada saludarCliente().
//
// La función debe mostrar por consola:
// "Gracias por visitar nuestra tienda".
//
// Después, llama a la función para ejecutarla.

// Escribe tu código aquí.



// TAREA 22.
// Crea una función llamada calcularTotal().
//
// Debe recibir dos parámetros:
// - precioProducto
// - cantidad
//
// Debe devolver el resultado de multiplicar
// ambos valores utilizando return.
//
// Después, llama a la función y muestra el resultado.
//
// Ejemplo:
// calcularTotal(10, 3) devuelve 30.

// Escribe tu código aquí.



// TAREA 23.
// Crea una función llamada comprobarStock().
//
// Debe recibir dos parámetros:
// - stockDisponible
// - unidadesSolicitadas
//
// Si hay suficientes unidades, debe devolver true.
// Si no hay suficientes unidades, debe devolver false.
//
// Utiliza un condicional if / else.
//
// Después, prueba la función con dos ejemplos
// diferentes y muestra los resultados.

// Escribe tu código aquí.



// =======================================================
// APARTADO 8. RESUMEN FINAL
// =======================================================

console.log("\n===== RESUMEN DE LA COMPRA =====");

// TAREA 24.
// Utiliza las variables y funciones anteriores
// para mostrar un resumen con:
//
// - Nombre de la tienda.
// - Productos disponibles.
// - Producto seleccionado.
// - Precio por unidad.
// - Unidades compradas.
// - Precio total.
//
// Puedes utilizar varios console.log().

// Escribe tu código aquí.



// TAREA 25. RETO FINAL OPCIONAL.
//
// Comprueba si el cliente puede realizar la compra.
//
// Para ello:
// 1. Debe haber suficientes unidades en stock.
// 2. La tienda debe estar abierta.
// 3. El pago debe estar realizado.
//
// Utiliza una condición con && y la función
// comprobarStock().
//
// Si se cumplen todas las condiciones, muestra:
// "Compra realizada correctamente".
//
// Si alguna condición falla, muestra:
// "No se puede completar la compra".
//
// Escribe tu código aquí.



// =======================================================
// FIN DE LA ACTIVIDAD
// =======================================================

console.log("\n===== FIN DE LA ACTIVIDAD =====");
console.log("¡Buen trabajo!");
