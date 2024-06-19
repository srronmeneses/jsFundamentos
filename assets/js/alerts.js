/*note: TIPOS DE ALERTS DENTRO DEL NAVEGADOR WEB EN EL OBJETO window.
    WINDOW solo existe en el navegador Web.
    La alternativa a window en el editor y node es GLOBAL*/
    // console.log(global); //Se muestra en la terminal ejecutando con node

/**Seleccionamos el elementoHTML en donde se va a agregar las nuevas etiquetas al ser querySelectroAll
 * este nos retorna un arreglo [] con todos los elementos que se encontraron en este caso h2*/ 
        const elementHtml = document.querySelectorAll('h2');

/*TODO: alert es una función que bloquea y envía un mensaje de alerta que se debe de confirmar en el navegador*/
//alert('Hola Mundo') este retorna Undefined; 
        const retorno = alert('Hola JS');
        const element1 = document.createElement('span');
        element1.innerText = `${retorno}`;
        element1.style = `color: blue; font-weight: 100`;
        elementHtml[0].append(element1);

/*TODO: prompt es una función que retorna un String que puede tener 2 parámetros MENSAJE y VALOR-POR-DEFECTO*/
        let respuesta = prompt('¿Cual es tu nombre?', 'Escribir')
        //Los resultados de este alert pueden ser 1) LO QUE SE ESCRIBA, 2) MENSAJE POR DEFECTO, 3) STRING VACÍO,  4) NULL SI SE CANCELA
        const element2 = document.createElement('spam');
        respuesta != '' ? element2.innerText = `${respuesta}` : element2.innerText = `***String Vacío***`;
        elementHtml[1].append(element2);
        element2.style = 'color: blue; font-weight: 100'

/*TODO: confirm es una función que retorna un Boolean*/
        const resp = confirm('¿Estas seguro de esta acción?');
        const element3 = document.createElement('spam');
        element3.innerText = `${resp}`;
        element3.style = 'color: blue; font-weight: 100'
        elementHtml[2].append(element3);



