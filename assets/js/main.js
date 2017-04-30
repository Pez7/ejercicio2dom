function mostrar(){
var mensaje = document.getElementsByClassName("mensaje");

	if (mensaje.length == 1)  
		alert("Es muy poco");
		if (mensaje.length > 2 && mensaje.length < 4)
			alert("No está mal");
			if (mensaje.length = 4) 
				alert("Son muchos!"); 
}

mostrar();