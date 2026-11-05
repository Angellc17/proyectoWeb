let mensaje = "Hola Mundo!\n Que facil es incluir 'comillas simples' \n y \"comillas dobles\" ";
//alert(mensaje);
//console.log(mensaje);

//console.error("Existe un fallo");

// Los resultados se muestran en la consola del navegador (F12).
// Si prefieres ventanas emergentes, cambia console.log por alert.

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
for (const i in meses) {
    console.log(meses[i]);
}

// Número más grande del array (se ignoran los valores que no son números)
var valores = [true, 5, false, "hola", "adios", 2];
let max = 0;
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "number" && max < valores[i]) {
        max = valores[i];
    }
}
console.log(max);
