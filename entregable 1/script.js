//El usuario comienza inscribiendose para acceder al examen

    let nombre=prompt('Ingresa tu nombre');
    let apellido=prompt('Ingresa tu apellido');
    let DNI=prompt('Ingresa tu DNI (sin puntos)');
    let edad=prompt('Ingresa tu edad');


//a través de un alert se saluda y se le da el código de acceso al examen al usuario.

function darBienvenida(){
alert('Le damos la BIENVENIDA a: ' + nombre + ' ' + apellido + '\n Tu código de acceso al examen es: 000');
}
darBienvenida();


//Se le pide al usuario ingresar su codigo para comenzar el examen

	let codigodeacceso=prompt('Ingrese su código de acceso');
	if(codigodeacceso==='000'){
		console.log(nombre + apellido + '\n Ha accedido al examen');
		alert('ADVERTENCIA: \n Las respuestas deberán iniciar con mayúscula y tener buena ortografía (incluye tildes donde vayan) \n De no ser asi, la respuesta será marcada como inválida.')
	} else {
		console.log('La clave ingresada no es la correcta. Vuelve a intentarlo');
	}

 alert('¡MUCHA SUERTE!');

//formulación de las preguntas
var puntos=0;
const preguntas = ['¿Como se dice perro en ingles?', 
'¿Como se traduce en español la frase "i want coffee"?',
'¿Cómo se dice "mamá" en inglés?',
'¿Como se traduce en español la frase "I love my country"?',
'¿Como se dice en inglés "Soy profesor"?']
if(codigodeacceso==='000'){
	let pregunta1=prompt(preguntas[0]);
	 if(pregunta1==='Dog'){
	   alert('Obtuviste 1 punto');   
	   puntos ++
	   console.log('Tus puntos son:' +puntos)
	}else {
         alert('Haz fallado.');
	}  
         


    
    let pregunta2=prompt(preguntas[1]);
     if(pregunta2==='Yo quiero café'){
	     alert('Obtuviste 1 punto');
	     puntos++
	     console.log('Tus puntos son:'+ puntos)
	}else {
          alert('Haz fallado.');
    }



     let pregunta3=prompt(preguntas[2]);
       if(pregunta3==='Mom'){
	      alert('Obtuviste 1 punto');
          puntos++
	     console.log('Tus puntos son:' + puntos)
	}else {
         alert('Haz fallado.');
    }



     let pregunta4=prompt(preguntas[3]);
       if(pregunta4==='Yo amo a mi país'){
	      alert('Obtuviste 1 punto');
	      puntos++
	     console.log('Tus puntos son:' + puntos)
	}else {
         alert('Haz fallado.');
    }




     let pregunta5=prompt(preguntas[4]);
       if(pregunta5==='I am teacher'){
	      alert('Obtuviste 1 punto');
	      puntos++
	     console.log('Tus puntos son:' + puntos)
	}else {
         alert('Haz fallado.');
    }


//Luego del examen, se mostrará la puntuacion obtenida.

	var resultado;
	var acertadas=puntos;
	switch(acertadas){
		case 0:
		resultado= alert('¡Deberás estudiar más! Vuelve a realizar el examen luego.');
		console.log('Tu resultado ha sido de 0')
		break;
		case 1:
		resultado= alert('Ok... una respuesta correcta, sigue estudiando y realiza el examen luego.');
		console.log('Tu resultado ha sido de 1')
		break;
		case 2:
		resultado= alert('¡Estuviste cerca! Sigue estudiando, ¡tu puedes! Puedes volver a realizar el examen ahora.');
		console.log('Tu resultado ha sido de 2')
		break;
		case 3:
		resultado= alert('Se nota que haz estudiado... ¡pero ve a por más! Vuelve a rendir el examen si deseas mejor promedio :)');
		console.log('Tu resultado ha sido de 3')
		break;
		case 4:
		resultado= alert('¡Estupendo! Es una buena calificación pero puedes volver a intentarlo si deseas mejor promedio :)');
		console.log('Tu resultado ha sido de 4')
		break;
		case 5:
		resultado= alert('¡CONGRATULATIONS! Haz pasado el examen con la mejor calificación. Sin duda, ¡Eres el mejor! :)');
		console.log('Tu resultado ha sido de 5')
		break;
	}
}