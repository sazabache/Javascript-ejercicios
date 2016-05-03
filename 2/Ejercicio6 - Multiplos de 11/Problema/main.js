// Escribe aquí tu codigo Javascript
var cadena="";
var suma=null;
var cont=0;
for(var c=0;c<3000;c++){
	if(c%11===0){
		cadena += c + " ";
		suma+=c;
		cont+=1;
	}
}
alert("Múltiplos de 11 : \n"+ "cantidad: " + cont + "\n La suma es: "+suma + "\n Los numero son: " + cadena );



