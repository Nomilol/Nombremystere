$(document).ready(main);

function main(){

	
	var vies;
	var nombreMystere;

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
		else(userNombre === nombreMystere){
			partieGagnee();
		}

		if(nombreMystere === userNombre || vies === 0){
			partiePerdue();
			demarrerPartie();
		}

	}

	function partieGagnee(){
		alert('GG GROS');

	}

	function partiePerdue(){
		alert('T\'es un GROS NOOB');
		demarrerPartie();
	};

	demarrerPartie();

	$('#button').click(function(){
		clickValider();
	});
}



























