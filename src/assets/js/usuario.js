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
