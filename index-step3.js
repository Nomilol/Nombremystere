$(document).ready(main);

function main(){

	
	var vies;
	$(vies).val();
	$("#vies").text(vies);
	var nombreMystere; 
	var resultat;

	function demarrerPartie(){ 

		vies = parseInt(prompt('Choisissez votre nombre de vies:'),10);
		var min = parseInt(prompt('Choissisez le nombre minimum du nombre mystère:'),10);
		var max = parseInt(prompt('Choisissez le nombre maximum du nombre mystère:'),10);
		nombreMystere = Math.floor((max-min+1)*Math.random())+min
		$("#vies").text(vies);
		console.log(nombreMystere);
	}

	function clickValider(){
		var userNombre = parseInt($('input').val(),10);
		//debugger

		if( userNombre > nombreMystere){
			alert('Perdu, votre nombre est trop grand');
			console.log(vies--);
			$('#vies').text(vies);

		}

		else if(userNombre < nombreMystere){
			alert('Perdu, votre nombre est trop petit');
			console.log(vies--);
			$('#vies').text(vies);
		}
		else if (userNombre === nombreMystere){
			partieGagnee();


		}

		if(nombreMystere === userNombre || vies === 0){
			demarrerPartie();
		}

	}


	function partieGagnee(){
		alert('GG GROS');


	}

	function partiePerdue(){
		alert('T\'es un GROS NOOB');
		vies === 0;
		demarrerPartie();
	};

	demarrerPartie();
	$('#button').click(function(){
		clickValider();
	});
}






















