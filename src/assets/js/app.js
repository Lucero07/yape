$('.carousel.carousel-slider').carousel({
    fullWidth: true
});
var $inputRegistro = $(".inputRegistro");
var $btnRegistro = $("#btn_registro");
var $form = $("#registro-form");
var $activar = $("#filled-in-box");


$form.submit(sacarNumero);
$inputRegistro.keyup(contador);
$activar.click(contador);

function contador() {
    var contador = $inputRegistro.val().length;
    if (contador === 10 && $("#filled-in-box:checked").is(':checked') === true) {
        $btnRegistro.removeAttr("disabled");
    } else {
        $btnRegistro.attr("disabled", "true");
    }
}

function sacarNumero(e) {
    e.preventDefault();
    console.log($inputRegistro.val());
}
