// Escribe aquí tu codigo Javascript
function elementos(){
	var lista = ["Acuario","Sagitario","Aries"];
	var numElementos = prompt("¿Cuántos nombres quieres que tenga la lista?");
	for(var i=4; i<=numElementos; i++){
		var elemento = prompt("Ingresar un signo del zodiaco más "+i+ ":");
		lista.push(elemento);
	}
	return lista;
}
alert("La lista de signos es: "+elementos());

