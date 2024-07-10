/*note: TIPOS DE ALERTS DENTRO DEL NAVEGADOR WEB EN EL OBJETO window.
    WINDOW solo existe en el navegador Web.
    La alternativa a window en el editor y node es GLOBAL*/
    // console.log(global); //Se muestra en la terminal ejecutando con node

/**Seleccionamos el elementoHTML en donde se va a agregar las nuevas etiquetas al ser querySelectorAll
 * este nos retorna un arreglo [] con todos los elementos que se encontraron en este caso h2*/ 
        const elementHtml = document.querySelectorAll('h2');

/*TODO: alert es una función bloqueante y envía un mensaje de alerta que se debe de confirmar en el navegador*/
//alert('Hola JS') el return de un alert es siempre Undefined; 
        const returnAlert = alert('Hola JS');
        const element1 = document.createElement('span');
        element1.innerText = `${returnAlert}`;
        element1.style = `color: blue; font-weight: 100`;
        elementHtml[0].append(element1);

/*TODO: prompt es una función que retorna null si es cancelado o un String. Puede tener 2 parámetros MENSAJE y VALOR-POR-DEFECTO*/
        let returnPrompt = prompt('¿Cual es tu nombre?', 'Escribir')
        //Los resultados de esta función pueden ser 1) LO QUE SE ESCRIBA, 2) MENSAJE POR DEFECTO, 3) STRING VACÍO,  4) NULL SI SE CANCELA
        const element2 = document.createElement('spam'); 
        returnPrompt != '' ? element2.innerText = `${returnPrompt}` : element2.innerText = `***String Vacío***`;
        elementHtml[1].append(element2);
        element2.style = 'color: blue; font-weight: 100'

/*TODO: confirm es una función que retorna un Boolean (true ó false)*/
        const returnConfirm = confirm('¿Estas seguro de esta acción?');
        const element3 = document.createElement('spam');
        element3.innerText = `${returnConfirm}`;
        element3.style = 'color: blue; font-weight: 100'
        elementHtml[2].append(element3);

/*hack: Se debe tener en cuenta que estas funciones son parte de window en el NAVEGADOR WEB 
esto significa si ejecutamos este script con node tendremos un error ya que window solo esta en el navegador
Pero en NODE se tiene algo ligeramente parecido a window cuando se ejecuta JS en el back-end 
que es el global y se lo ejecuta de la siguiente manera

>node ./rutaDelScript/nameScript.js */
// console.log(global);


