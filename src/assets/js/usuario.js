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
