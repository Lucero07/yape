(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var api = {
    url: 'http://localhost:3000/api/resendCode'
};

var $numero = $("#numero");
var $inputCodigo = $('#icon_lock');




alert('Tu código de acceso es: '+localStorage.getItem("codigo"));
$numero.text(localStorage.getItem("telefono"));
$inputCodigo.keyup(comparandoCodigo);


function comparandoCodigo() {

	var codigoReal = localStorage.getItem('codigo');
	var codigoUsuario = $inputCodigo.val();
	console.log(codigoReal);
	console.log(codigoUsuario);
	if( codigoUsuario.length === 6 ){
		if(codigoUsuario == codigoReal){
				location.href ='usuario.html';
			console.log('hola');
			}else{
				alert("Tu código no coincide!");
	}
	}else{

	}
}





  $(document).ready(function() {
    $('input#icon_lock').characterCounter();
  });

},{}]},{},[1])