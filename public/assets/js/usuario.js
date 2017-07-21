(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
    $('#validar_datos').click(function(){
        if($("#icon_mail").val().indexOf('@', 0) == -1 || $("#icon_mail").val().indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }

        alert('El email introducido es correcto.');
    });
});

var $numero = $("#numero");
var $inputCodigo = $('#icon_lock');
var $nombre = $('icon_user').val();
var $email = $('icon_mail').val();
var $contraseña = $('icon_lock').val();

console.log($nombre);
console.log($email);

},{}]},{},[1])