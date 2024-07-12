/*note: Los objetos tienen pares de valores*/
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron-Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 31.23,
        lng: -113.33
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '123434, 442313',
        ubi: 'Malibu, California'
    },
    /*hack: Si utiliza el espacio o guion (-) para declarar un atributo se debe colocar entre comillas
    como si se tratara de un String*/
    'ultima-pelicula': 'Infinity War',
};
//Obtener el objeto, se lo llama por el nombre de la variable
console.log(personaje);
//Existe dos formas de poder acceder a los atributos de un Objeto 
//Hacer referencia al atributo con la notación de punto .
console.log('Nombre:', personaje.nombre);
// Hacer referencia al atributo con la notación de corchete []
console.log('Nombre:', personaje['nombre']);
//Hacer referencia a un subObjeto f
console.log('coords:', personaje.coords);
//Hacer referencia a los atributos dentro del subObjeto
console.log('Lat:', personaje.coords.lat);
//Tamaño de un arreglo dentro del Objeto
console.log('Iron-Man tiene', personaje.trajes.length, 'trajes');
//Ultimo elemento del arreglo dentro del Objeto
console.log('Ultimo traje de', personaje.nombre, 'es:', personaje.trajes[personaje.trajes.length-1]);
//Utilizar la notación de corchete [] para mostrar un atributo que fue declarado como String
console.log('Última película:', personaje['ultima-pelicula']);


/*note: Mas detalles de los Objetos Literales*/
// Borrar un atributo del objeto
console.warn('Borrar un atributo de un objeto --> delete');
delete personaje.edad
console.log(personaje);

// Para trabajar (transformar) el objeto como si fuera un arreglo, esto no modifica al objeto
/*note: Al realizar esta acción los elementos del arreglo se encontraran en la posición en la que fue
 creado el objeto y no en orden alfabético*/
console.warn('Borrar un atributo de un objeto --> Object.entries(personaje)');
let entriesAtributos = Object.entries(personaje);
console.log(entriesAtributos);
console.log(personaje);

// Crear un nuevo atributo en el objeto, referirse al objeto
// con la notación de punto declaramos el nuevo atributo y su valor
console.warn('Crear nuevo atributo en el Objeto --> notación de punto'); 
personaje.casado = true;
console.log(personaje);

// Bloquear la modificación de las propiedades de un objeto Object.freeze()
// Este método no bloquea los atributos de los subObjetos o subArreglos a no
// ser que seamos específicos con los mismos.
console.warn('Evitar que un objeto sea modificado --> Object.freeze(personaje)');
// bloqueamos las propiedades directas de personajes
Object.freeze(personaje)
personaje.dinero = 123433; // Este atributo no se agrega al objeto
console.log(personaje);
// bloquear el subObjeto address
Object.freeze(personaje.address);
personaje.address.ubi = 'Bolivia'

// Listar el nombre de los atributos del objeto 
console.warn('Listar el nombre de los atributos del objeto --> Object.getOwnPropertyNames(personaje)');
// Este método retorna un arreglo con el nombre de los atributos del objeto en el orden en el que fueron creados
let nombreAtributos = Object.getOwnPropertyNames(personaje);
console.log(nombreAtributos);

// Listar el valor de cada atributo del objeto
console.warn('Listar el valor que contiene cada atributo del objeto --> Object.values(personaje)');
// Este método retorna un arreglo con el valor de cada atributo del objeto en el orden en el que fueron creados
let valoresAtributos = Object.values(personaje);
console.log(valoresAtributos);

