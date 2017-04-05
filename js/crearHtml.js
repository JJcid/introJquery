$('#boton3').click(function(){
    //remplazar el contenido 
     $("#contenedor").html('<div id="c1">Adios</div>');

    //Añadir contenido 
     $('#c1').append('<div id="c2">Contenido agregado</div>');

     //Añadir cotenido antes del elemento
    $('#c1').before('<h1>Titulo</h1>');


    //Añadir contenido despues del elemento
    $('#c1').after('<h1>Footer</h1>');

    //Añadir contenido antes del texto escrito
    $('#c1').prepend('Saludo ');

    //Reemplazar texto ya escrito
    $('#c2').text('contenido reemplazado');
});