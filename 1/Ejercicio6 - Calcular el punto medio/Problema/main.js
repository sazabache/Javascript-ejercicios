// Escribe aquí tu codigo Javascript
function puntoMedio(){
	var x1 = parseInt(prompt("Ingrese el primer dígito de la primera coordenada: "));
	var x2 = parseInt(prompt("Ingrese el segundo dígito de la primera coordenada: "));
	var y1 = parseInt(prompt("Ingrese el primer dígito de la segunda coordenada: "));
	var y2 = parseInt(prompt("Ingrese el segundo dígito de la segunda coordenada: "));
	var M = "("+parseInt((x1+y1)/2)+","+parseInt((x2+y2)/2)+")";
	alert("El punto medio del segmento"+ "\n de extremos, los punto:"+"("+x1+","+x2+") y ("+y1+","+y2+") es "+M)
}
puntoMedio();

