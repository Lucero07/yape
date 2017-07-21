(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('.carousel.carousel-slider').carousel({
    fullWidth: true
});

  $(document).ready(function() {
    $('input#numero-usuario').characterCounter();
  });
var $inputRegistro = $(".inputRegistro");
var $form = $("#registro-form");
var $activar = $("#filled-in-box");
var $botonRegistro = $("#btn_registro");

$botonRegistro.click(nuevoCodigo);
$inputRegistro.keyup(validar);
$activar.click(validar);


function validar() {
    var contador = $inputRegistro.val().length;
    if (contador === 10 && $("#filled-in-box:checked").is(':checked') === true) {
        $botonRegistro.removeAttr("disabled");
		$botonRegistro.click(usuario);
    } else {
        $botonRegistro.attr("disabled", "true");
    }
}

var api = {
    url: 'http://localhost:3000/api/registerNumber'
};


 var usuario = function(){
	 var numeroUsuario= $inputRegistro.val();
	 var aceptarTerminos = $("#filled-in-box:checked").is(':checked');
	 location.href = 'validarCodigo.html';
	 console.log(aceptarTerminos);
	 localStorage.setItem( 'numeroUsuario',$inputRegistro.val());
	 localStorage.setItem( 'aceptarTerminos',$("#filled-in-box:checked").is(':checked'));
	 $.post(api.url,{
    	 'phone': numeroUsuario,
    	 'terms': aceptarTerminos,

     }).then(function(response){
    	localStorage.setItem("telefono",response.data.phone);
		localStorage.setItem("codigo",response.data.code);

     }).catch(function(error){
    	 alert(error);
     });
 };



 setInterval(nuevoCodigo, 10000);

  var nuevoCodigo = function(){
   setInterval(usuario, 10000);
  };

},{}]},{},[1])