 /*function buscar() {
        console.log("click");
        var textoBusqueda = document.getElementById("texto").textContent;
        if (textoBusqueda != "") {
            var elementos = document.querySelectorAll("div[class=\"well\"] > p");
            for (elemento of elementos) {
                console.log(elemento.textContent);
                if (elemento.textContent.indexOf(textoBusqueda) <= -1) {
                    elemento.disabled = true;
                    console.log(textoBusqueda);

                }

            }

        }
 }

document.getElementById("buscar").onclick = buscar();*/

function onSuccessXml(data){
    $(data).find('cita').each(function(){
        var texto = $(this).find('texto').text();
        $("<div></div>").attr('class','well').html(texto).appendTo("#quotes");
    });
}

function cargarCitas(){
    $.ajax({
        type: "GET",
        url: "data/citas.xml",
        contentType: "text/xml",
        success: onSuccessXml
    });
}

fuction procesarCitas(){
    var texto = document.getElementById('texto').value;

    if(texto.length > 0) {
        var quotes = $('.well')

        for(quote of quotes) {
            if(quote.textContent.search(texto) != -1) {
                $(quote).attr('class', 'well mostrar')
            } else {
                $(quote).attr('class', 'well ocultar')
            }
        }
    } else {
        var quotes = $('.well')

        for(quote of quotes) {
            quote.setAttribute('class', 'well mostrar')
        }
    }
}

(function(){

    document.getElementById("buscar").onclick=procesarCitas;

    document.getElementById("texto").onkeyup=procesarCitas;
    $('#texto').on('keyup', procesarCitas)
    cargarCitas();
})();



(function () {
    function habilitar(){
         var elementos = document.querySelectorAll("div[class=\"well\"]");
            for (elemento of elementos) {
                elemento.style.display="block";
            }

    }
  function buscar() {
        habilitar();
        var textoBusqueda = document.getElementById("texto").value;
        if (textoBusqueda != "") {
            var elementos = document.querySelectorAll("div[class=\"well\"] > p");
            for (elemento of elementos) {
                
                if (elemento.textContent.search(textoBusqueda) > -1) {
                   
                     console.log(elemento.textContent);
                    console.log(textoBusqueda);

                }
                else{
                     elemento.parentNode.style.display = "none";
                     console.log("none");
                    //console.log(elemento.textContent);

                }

            }

        }

    }

    document.getElementById("buscar").onclick = buscar;



})();