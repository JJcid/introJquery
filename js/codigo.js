var caja = document.querySelector('#caja');

// caja.addEventListener('click',cambiarColor);

// function cambiarColor(e){
//     caja.style.background ="red";
// }

$('#caja').click(function(){
    $('#caja').css({"background":"red", 
                    "height":"100px",
                    "width":"400px"});
});
