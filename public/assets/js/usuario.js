(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $validarDatos =$('#validar_datos');
var $inputLock = $('#icon_lock');

$inputLock.keyup(function (){
	console.log('esta dentro de la funcion');
	var $nombre =$("#icon_user").val();
	var $email =$("#icon_mail").val();
	var $contrasena = $('#icon_lock').val();
	if($nombre.length > 0  && $email.length > 0 && $contrasena.length > 0){
		$validarDatos.removeAttr("disabled");
		$validarDatos.click(validarPatrones);
	}else{
		$validarDatos.attr("disabled", "true");
		console.log('perdida');
	}
}
);
var validarPatrones= function() {
	if(  $("#icon_mail").val().indexOf('@', 0) == -1 || $("#icon_mail").val().indexOf('.', 0) == -1 ) {
		alert('Revisa tus datos');
		return false;
	}else{
		location.href = "listo.html";
		
	}
};

},{}]},{},[1])