/*note: Tipos de datos PRIMITIVOS. Empecemos indican que JS es un lenguaje débilmente tipado
Es una información que no es u objeto y son inmutables
- Boolean       --> true / false :: Verdadero o falso
- Null          --> Sin valor en lo absoluto
- Undefined     --> Una variable declarada que aún no se le asigna valor
- Number        --> Valor integers, floats, etc.
- String        --> Una cadena de caracteres, ejm: Palabras, nombre de persona
- Symbol        --> Es un valor único que no es igual a ningún otro valor
*/

/*TODO: String
la cadena de texto puede estar dentro de '', "", `` 
*/
let nombre    = "Peter",
    lastName  = 'Parker',
    hero      = `Spider Man`;
console.table({nombre, lastName, hero});
/*note: Para determinar el tipo de valor en la variable*/
console.log(typeof nombre);
    // Al reasignar la variable hero este cambia de tipo de valor de String a Number
hero = 1234;
console.log(typeof hero);

/*TODO: Boolean tiene solo dos opciones true ó false*/ 
let esMarvel = true;
console.log({esMarvel});
console.log(typeof esMarvel);

/*TODO: Numbers valores enteros o flotantes para JS eso es indiferente*/
let numeroEntero = 34234;
let numeroFlotante = 3.1416;
console.table( { numeroEntero, numeroFlotante});
console.log(typeof numeroEntero);

/*TODO: Undefined variable que fue declara pero que no tiene valor*/
let variableSinValor;
console.log({variableSinValor});
console.log(typeof variableSinValor);

/*TODO: Null sin valor en lo absoluto*/
let valorNull = null;
console.log(valorNull);
/*bug: Al mostrar el tipo de valor de una variable con null 
nos da como resultado Object, por esta razón algunas personas consideran
a null como object pero es un primitivo
La regla en JS es: TODOS SON OBJETOS EXCEPTUANDO A LOS PRIMITIVOS*/
console.log(typeof valorNull);

/*TODO: Symbol son valores únicos*/
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.table({symbol1, symbol2});
/*note: Por mas de que las dos variables son declaradas de la misma manera
estas son diferentes, por eso al compararlas el resultado es false*/
console.log(typeof symbol1);
console.log(symbol1 === symbol2);

