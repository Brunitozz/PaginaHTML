/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let mensaje = "Hola a Putos";

function mostrarMensaje() {
    document.write(`la variable <strong>mensaje</strong> contiene el texto <strong>${mensaje}</strong><br><br>`);

    document.write(`la propiedad <strong>length</strong> (ej. <b>mensaje.length</b>) 
         nos da el largo de la variable <strong>${mensaje.length}</strong><br>`);

    document.write(`la función <strong>substring</strong> (ej. <b>mensaje.substring(6)</b>) oculta los primeros 6 caracteres de la variable 
                               <strong>${mensaje.substring(6)}</strong><br>`);

    document.write(`la función <strong>substr</strong> (ej. <b>mensaje.substr(7,2)</b>)   
         oculta los primeros n caracteres de la variable <strong>${mensaje.substr(7,2)}</strong><br>`);

    document.write(`la función <strong>toUpperCase</strong> (ej. <b>mensaje.toUpperCase()</b>) 
         convierte en mayusculas todos los caracteres de la variable <strong>${mensaje.toUpperCase()}</strong><br><br>`);
    
//    let mensajenuevo = mensaje.replace()
    document.write(`la función <strong>replace</strong> (ej. <b>mensaje.replace("Todos","Algunos")</b>) 
         reemplaza caracteres de la variable <strong>${mensaje.replace("Todos","Algunos")}</strong><br>`);

    document.write(`la variable <strong>mensaje</strong> contiene el texto <strong>${mensaje}</strong><br><br>`);
    document.write(`mensaje = mensaje.<b>replace</b>("Todos", "Algunos ");<br><br>`);

    mensaje = mensaje.replace("Todos", "Algunos ");
    document.write(`la variable <strong>mensaje</strong> contiene el texto <strong>${mensaje}</strong><br><br>`);

    document.write(`<code>buscar = 'Hola';<br>
    if (mensaje.startsWith(buscar)) {<br>
        &nbsp;&nbsp;&nbsp;document.write(\`Es cierto, la variable mensaje comienza con <strong> \${buscar} </strong>\`);<br>
    } else {<br>
        &nbsp;&nbsp;&nbsp;document.write(\`Falso, la variable mensaje no comienza con <strong>\${buscar}</strong>\`);
    <br>}</code><br><br>`);

    buscar = "Hola";
    if (mensaje.startsWith(buscar)) {
        document.write(`Es cierto, la variable mensaje comienza con <strong>${buscar}</strong><br><br>`);
    } else {
        document.write(`Falso, la variable mensaje no comienza con <strong>${buscar}</strong><br><br>`);
    }

    letra = 'a';
    document.write(`la posición de la letra <strong>${letra}</strong> en la variable mensaje, 
       usando <strong>mensaje.indexOf('j')</strong> es <strong>${mensaje.indexOf(letra)}</strong><br><br>`);

    document.write(`mensaje repetido 5 veces, con <b>mensaje.repeat(5)</b> da <strong>${mensaje.repeat(5)}</strong><br><br>`);
    document.write(`la función <strong>trim</strong> (usando <b>mensaje.trim()</b>) 
        quita los espacios iniciales y finales <strong>${mensaje.trim().repeat(5)}</strong><br><br>`);

    document.write(`la función <strong>search</strong>, (ej. <b>mensaje.seach("Algunos")</b>) 
      devuelve la posición de un string dentro de mensaje.
      ejemplo. la posición del string <b>'Algunos'</b> es 
      <strong>${mensaje.search("Algunos")}</strong><br><br>`);

    document.write(`la función <strong>concat</strong> permite concatenar cadenas de texto 
      (ej. <b>mensaje.trim().concat(", pero no a todos.")</b>).
      es <strong>${mensaje.trim().concat(", pero no a todos.")}</strong><br><br>`);

}



