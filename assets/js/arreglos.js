/*note: Los arreglos son un Objeto parecido a un lista de información, que contienen un 
grupo de elementos internamente, por lo general la información dentro del arreglo es del
mismo tipo pero en JS no es una regla y no siempre sucede.

Hay varias maneras de declarar un arreglo veamos algunas*/

/*No es muy común por que utilizar la palabra reservada new 
 y el arreglo arr tendrá un .length de 10 que estarán vacíos*/
const arr1 = new Array(10); 
console.log(arr1);

/*hack: Por preferencia los desarrolladores declaran el arreglo de la siguiente manera, pero hay
una diferencia el .length del arr2 es de 0 y literalmente esta vacío*/

const arr2 = [];
console.log(arr2);

let videoJuegos = ['League of Legends', 'Dota2', 'Smite'];
console.log(videoJuegos[1]);
console.log(videoJuegos.length);

/*hack: En JS un arreglo puede tener diferentes tipo datos:
boolean, number, string, function, operaciones matemáticas, objetos, otros arreglos, etc*/
let arregloCosas =[
    true,
    123,
    'Peter Parker',
    2+3,
    Math.PI,
    function () {},
    () => {},
    { a:1, b:2 },
    ['Iron-Man', 'Hulk', 'Ant-Man',
        ['Shaman', 'Invoker'],
        ['Phantom Assassin', 'Razor'],
    ],
];
console.log(arregloCosas);

/*hack: Para poder recuperar la información de un arreglo se lo hace mediante su
indice y este inicia en 0*/
console.log(arregloCosas[0]);
console.log(arregloCosas[2]);
/*hack: para obtener el String "Razor" de arreglo que esta dentro de otro se realiza de la
siguiente manera, pero no es muy común ver este tipo de ejercicios*/
console.log(arregloCosas[8][4][1]);


/*note: MÉTODOS Y PROPIEDADES DE LOS ARREGLOS*/
let juegos = ['League of Legends', 'Dota2', 'Smite', 'Heroes of the Storm'];
console.warn('Propiedad .length')
//propiedad .length nos retorna cuantos elementos existe en el arreglo
console.log('Largo de los elementos del arreglo juegos es:', juegos.length);
let primero = juegos[0];
let ultimo = juegos[juegos.length-1];
console.log({primero, ultimo});

console.warn('Método forEach()')
// método forEach() que tienen todos los arreglos y ejecuta una instrucción por cada uno de los
// elementos del arreglo
juegos.forEach((element, index, arr) => {
    console.log({element, index, arr});
});

console.warn('Método .push()');
//método .push() Agregar un nuevo elemento al final del arreglo y retorna el nuevo .length del mismo
let nuevoLength = juegos.push('WarCraft');
console.log({nuevoLength, juegos});

console.warn('Método .unshift()');
//método .unshift() Agrega un nuevo elemento al inicio del arreglo y retorna el nuevo .length del mismo
nuevoLength = juegos.unshift('Mu')
console.log({nuevoLength, juegos});

console.warn('Método .pop()');
//método .pop() no recibe ningún argumento, elimina el ultimo elemento del arreglo y lo retorna
let deleteGame = juegos.pop();
console.log({deleteGame, juegos});

console.warn('Método .splice()');
//método .splice() nos permite eliminar mas de un elemento desde una posición específica 
//y retorna un arreglo con los elementos eliminados 
console.log(juegos); //Si colocamos a juegos entre llaves pasara algo raro ya que en JS todo pasa por referencia
let pos = 1;
let deleteGames = juegos.splice(pos, 2);
console.log({deleteGames, juegos});

console.warn('Método .indexOf()');
//método .indexOf() que retorna el indice en el que se encuentra un elemento
//El elemento buscado debe ser escrito tal como se encuentra dentro el arreglo ya que es CaseSensitive
//si .indexOf() retorna -1 significa que el elemento no existe o esta mal escrito. 
let indexHeroesOfTheStorm = juegos.indexOf('Heroes of the Storm'); 
console.log({indexHeroesOfTheStorm, juegos});
let indexHeroesOfTheStor = juegos.indexOf('heroes of the storm'); 
console.log({indexHeroesOfTheStor, juegos});




