const classElements = {
    title: 'title',
};
let precio = 200,
    iva    = 21,
    total  = precio + precio*iva/100;

const elementHtml = document.querySelector('body');
const element     = document.createElement('section');
const html       = `<h1 class = ${classElements.title}>EJERCICIOS CON VARIABLES</h1>
                    <p> <span>1)</span> Has hecho una compra y sabes el precio del producto y su iva. Haz un script
                    que te calcule el precio total que vas a pagar por tu compra.<br />
                    Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar
                    precio por el iva y dividir por 100 <br />
                    <span>Respuesta:</span><br />
                    PRECIO: ${precio}€ <br />
                    IVA: ${iva}% <br />
                    TOTAL A PAGAR = ${total}€ <br />
                    <pre>

<span class = 'coment'> //Código JS</span>
<span class = 'coment'> 1</span>   <span class = 'variables'>let</span> precio <span class = 'asig'>= </span><span class = 'numBo'>200</span>,
<span class = 'coment'> 2</span>       iva    <span class = 'asig'>= </span><span class = 'numBo'>21</span>,
<span class = 'coment'> 3</span>       total  <span class = 'asig'>= </span>precio <span class = 'asig'>+</span> precio<span class = 'asig'>*</span>iva<span class = 'asig'>/</span><span class = 'numBo'>100</span>;

</pre>
                    </p>`
element.innerHTML = html;
// element.classList.add('title');
elementHtml.append(element);

// console.log(element);f