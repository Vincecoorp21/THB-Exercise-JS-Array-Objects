/**************EJERCICIOS JS********************************/
// 1. Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
alert('JavaScript funcionando correctamente');

// 2. Comenta el código que muestra el cuadro de diálogo

// alert('JavaScript funcionando correctamente')

// 3. Crear variable tipo let de nombre variableSinValor declarada sin valor

let variableSinValor;

// Crear 2 variables tipo let de nombres booleano1 y booleano2 con valores booleanos

let booleano1 = true;
let booleano2 = false;

console.log(booleano1);
console.log(booleano2);

// 3. Crear variable tipo const de nombre PI declarada con valor 3.14

const PI = 3.14;
console.log(PI);

// 4. Crear variable tipo const de nombre TAU declarada con valor 2 veces PI

const TAU = 2 * PI;
console.log(TAU);

// 5. Crear variable tipo const de nombre miNombre declarada con valor tu nombre

const miNombre = 'Vicente';
console.log(miNombre);

// 6. Crear variable tipo const de nombre miNumeroFav declarada con valor numérico

const miNumeroFav = 4;
console.log(miNumeroFav);

// 7. Crea una variable de tipo booleano.

let boolean3 = false;

// 8. Muestra por consola la longitud de la variable miNombre

console.log(miNombre);

// 9. Muestra por consola el tipo de dato de la variable miNumeroFav

console.log(typeof miNumeroFav);

// 10. Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.
console.log(
  `Mi nombre es ${miNombre} y mi número favorito es el ${miNumeroFav} `
);

// 11. Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

console.log(
  'Seré un crack en JavaScript al terminar el bootcamp'.toUpperCase()
);

// 12. Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

let variable = 'Hola soy un crack';

console.log(variable.substring(0, 5));
console.log('Hola soy un crack'.substring(0, 5));

// 13. Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

// Como miNumFav es una constante no se puede cambiar el valor, por ello tenemos que definir una nueva como LET

let num2 = miNumeroFav.toString();

console.log(typeof num2);

// 14. Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.

let manzanas = 2;

console.log('Hay ' + manzanas + ' en la mesa');

// 15. Muestra por consola la variable PI hasta los 2 primeros decimales

console.log(PI.toFixed(2));

// 2.Arrays
// 16. Crear variable de nombre arrayVacio cuyo valor sea un array vacío

let arrayVacio = [];
console.log(arrayVacio);

// 17. Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumeros);

// 18. Crear variable de nombre arrayNumeros2 declarada con un array de números del 0 al 15 (0, 1, 2...)

let arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arrayNumeros2);

// 19. Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

let arrayNumerosPares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayNumerosPares);

// 20. Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log[arrayNumerosNeg];

// 21. Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

let holaMundo = ['Hola', 'Mundo'];
console.log[holaMundo];

// 22. Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
console.log(loGuardoTodo);

// 23. Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [
  [756, 'nombre'],
  [225, 'apellido'],
  [298, 'direccion'],
];
console.log(arrayDeArrays);

// 24. Muestra por consola la longitud del array “loGuardoTodo”
console.log(loGuardoTodo);

// 25. Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push('pelota');
console.log(loGuardoTodo);

// 26. Ordena de mayor a menor la variable arrayNumeros y muestrala por consola

console.log(arrayNumeros.reverse());

// 27. Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola
console.log(arrayNumeros.sort());

// 28. Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo
console.log(loGuardoTodo[1]);

// 29. Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

// 3.Objetos
// 30. Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo y matrícula con sus respectivos valores
let coche = { marca: 'Ford', modelo: 'Focus', matrícula: '122DTH' };
console.log(coche);

// 31. Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal y piso con sus respectivos valores

let casa = { codPostal: 46006, calle: 'Barcas', portal: 2, piso: 2 };
console.log(casa);

// 32. Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes(ej. ‘javascript’,’php’), array proyectos(ej. ‘mi página personal’,etc)

let FullStackDeveloper = {
  lenguajes: ['javascript', 'php'],
  proyectos: ['mi pag personal', 'form viejuner'],
};

console.log(FullStackDeveloper);
// 33. Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color y edad con sus respectivos valores
let Perro = { nombre: 'Rocky', raza: 'Pastor aleman', color: 'negro', edad: 8 };
console.log(Perro);

// 34. Crea un objeto de nombre Noticia que tenga las propiedades: titular y cuerpo con sus respectivos valores

let Noticia = {
  titular: 'Un Fullstack hace Balconing',
  cuerpo:
    'Se ha descubierto recientemente en un hotel de Palma, que acuden únicamente Fullstacks para gacer balconing desde las habitaciones. Seguiremos informando',
};
console.log(Noticia);

// 35. Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos y edad con sus respectivos valores

let Persona = { nombre: 'Juan', apellidos: ['Dominguez', 'Serrano'], edad: 19 };
console.log(Persona);

// 36. Muestra por consola el nombre de la variable Persona

console.log(Persona);

// 37. Muestra por consola el lenguaje javascript de la variable FullStackDeveloper

console.log(FullStackDeveloper.lenguajes[0]);

// 38. Crea un objeto de nombre Portatil que tenga la propiedad marca, accede a esta propiedad con .marca y muestrala por consola

let Portatil = { marca: 'HP' };
console.log(Portatil.marca);

// 39. Obtén el valor de la propiedad marca del objeto anteriormente creado (Portatil) con ["marca"] y muestrala por consola.

console.log(Portatil['marca']);

// 40. Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

let Concierto = { grupos: ['ACDC', 'Red Hot Chilly Peppers', 'OffSpring'] };
console.log(Concierto);

// 41. Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo,
//Verde, Azul] y muestra este array por consola

let Led = { rojo: 10, verde: 5, azul: 6 };

let RGB = [Led.rojo, Led.verde, Led.azul];

console.log(Led);
console.log(RGB);

// 42. Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

let O_Error = { codigo: 123 };

console.log(O_Error.codigo);

// 43. Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

let Grupo = { integrantes: ['Paco', 'Juan', 'Pedro'] };

let integrantes = Grupo.integrantes;
console.log(integrantes);
console.log(integrantes[0]);
console.log(integrantes[1]);
console.log(integrantes[2]);

// 44. Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

let Impresora = { tinta: { rojo: 1, verde: 34, azul: 12 } };

let nivelesTinta = [
  Impresora.tinta.rojo,
  Impresora.tinta.azul,
  Impresora.tinta.verde,
];
console.log(nivelesTinta);

// 45. Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

let Movil = { especificaciones: ['pantalla', 'cámara', 'teclado'] };
console.log(Movil);

// 46. Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado
Portatil.marca = 'MSI';
console.log(Portatil);

// 47. Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado
Concierto.grupos.push("Guns N'Roses");
console.log(Concierto);

// 48. Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

Concierto.fecha = ['12/02/2022'];
console.log(Concierto);
Concierto.fecha = new Date();
console.log(Concierto);

// 49. Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

Grupo.integrantes.pop();
console.log(Grupo.integrantes);
console.log(Grupo.integrantes.length);
