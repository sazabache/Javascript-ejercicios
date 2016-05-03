// Escribe aquí tu codigo Javascript
function escalar(){
	var u1 = parseInt(prompt("Ingresa la primera coordenada del primer vector: "));
	var u2 = parseInt(prompt("Ingresa la segunda coordenada del primer vector: "));
	var v1 = parseInt(prompt("Ingresa la primera coordenada del segundo vector: "));
	var v2 = parseInt(prompt("Ingresa la segunda coordenada del segundo vector: "));
	var U = [u1, u2];
	var V = [v1, v2];
	var resultado=(U[0]*V[0])+(U[1]*V[1]);
alert("El producto escalar de los vectores: "+"\n("+U[0]+","+V[0]+") y ("+U[1]+","+V[1]+") es " +resultado)
}
escalar();

