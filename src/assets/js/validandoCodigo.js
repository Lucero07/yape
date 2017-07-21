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
	if( codigoUsuario.length === codigoReal.length ){
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
