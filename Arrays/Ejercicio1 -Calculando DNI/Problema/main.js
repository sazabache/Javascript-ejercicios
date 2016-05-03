var letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
var DNI=parseInt(prompt("Ingrese su DNI: "));
var residuo;
if(DNI<0 || DNI>99999999 || DNI.length>8){
	alert("DNI inválido");
}else{
	var letra=prompt("Ingrese la letra correspondiente: ").toUpperCase();;
	residuo=DNI%23;
	if(letras[residuo]==letra){
		alert("El N° y letra del DNI son correctos.");
	} else{
		alert("La letra indicada es incorrecta.");
	}
}


