// Este es un comentario de una linea
/**Este es un comentario en varias lineas
 * lo que significa que todo lo que se escriba
 * no tendrá ningún efecto dentro la programación
*/
/*note: FORMAS DE DECLARAR UNA VARIABLE*/

    /*bug: Es recomendado no declarar las variables con VAR, puede darte problemas al ser global*/
              a = 20; //No se utiliza ninguna palabra reservada para declarar la variable MALA PRACTICA.
        var   b = 10;

    /* TODO: La mejor manera de declarar una variable es con LET limitando su alcance SCOPE */
        let   c = 30;

    /*TODO: CONST es un tipo de variable al cual no es posible re asignar su valor una vez declarada*/
        const d = 40;

    /*hack: Existe una manera de declarar variables con una sola palabra reservada */
        let u = 100, v = 90, w = 80, x = u + v; //Se puede utilizar la ,(COMA) para seguir declarando variables.
        console.log({x});  // Las llaves mostraran el nombre de la variable en CONSOLE.

    /*TODO: Pero para una mejor lectura del código es recomendado declararlo de la siguiente manera*/
        let h = 45,
            i = 89,
            j = 23,
            k = h + i - j;
        console.log({k});

/*note: Existen 5 formas de mostrar los LOG en CONSOLE */
    console.log({a});   
    console.info({b});
    console.warn({c});
    console.error({d});

    /*hack: También podemos agregar style al mensaje en CONSOLE de la siguiente manera con el %c*/
    console.log('%c Mis Variables', 'color:red; font-weight: bold; font-size: 20px');
    let nombre = 'Spiderman',
        saludo = 'Hola ', //El espacio dentro de un STRING si es simbólico para JS y lo tomara en cuenta
        sentence = saludo + nombre; //Para concatenar (UNIR) dos o mas variables se utiliza el símbolo + (MAS)
    console.table({a, b, c, d, saludo, nombre, sentence}); //También se debe agregar las variables entre {} (llaves)

/*bug: No declarar las variables con VAR --> MALAS PRACTICAS*/    
var malaPractica = 'variable global';
var outerHeight = 666;
var outerWidth = 999;
