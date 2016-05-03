var valores=[true, 5, false, "hola", "adios", 2];
var resultado1= valores[0]||valores[2];
var resultado2= valores[0]&&valores[2];
if(valores[3].length>valores[4].length){
	alert("Hola es mayor que Adiós");
} else if(valores[4].length>valores[3].length&&valores[4].length!=valores[3].length){
	alert("Adiós es mayor que Hola");
} else if(valores[4].length==valores[3].length){
	alert("Hola y Adiós son iguales");
}
alert("True o False= "+resultado1+" \nY "+"True y False= "+resultado2);
alert("El resultado de las operaciones matemáticas es: "+"\nSuma: "+parseInt(valores[1]+valores[5])+"\nResta: "+parseInt(valores[1]-valores[5])+"\nMultiplicación: "+parseInt(valores[1]*valores[5])+"\nDivisión: "+parseFloat(valores[1]/valores[5]).toFixed(2)+"\nResiduo: "+parseInt(valores[1]%valores[5]));
