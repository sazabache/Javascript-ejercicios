var i = 0;
var mujer=0;
var hombre=0;
var age=0;
do{
	var DNI = prompt("Ingrese su número de DNI");
	if(DNI>0){
		var edad = prompt("¿Qué edad tienes persona ?");
		var sexo = prompt("Escribe a qué sexo perteneces (masculino o femenino): ").toLowerCase;
		i+=1;
		switch(sexo){
			case 'femenino':
				mujer+=1;
				break;
			case 'masculino':
				if(edad>=16&&edad<=65){
					age+=1;
				}
				hombre+=1;
				break;
			default:
				alert("Escribe correctamente");
				break;
		}
	}
	else if(0==DNI){
		break;	
	}
} while(DNI=!null)
 
alert("El N° de personas es "+i+"\nEl N° de mujeres es "+mujer+"\nEl N° de hombres es "+hombre+"\nVarones entre 16 y 65 son "+age);

	