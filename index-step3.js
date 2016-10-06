$(document).ready(main);

// Fonction principale
function main(){

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	var vies;
	$(vies).val();
	$("#vies").text(vies);
	var min;
	var max ;
	var nombreMystere; 
	var nombre;
	var resultat;
	//console.log(nombreMystere);

function demarrerPartie(){ // Ne pas oublier d'apeller la fonction
vie = prompt('Choisissez votre nombre de vies:','');
min = parseInt(prompt('Choissisez le nombre minimum du nombre mystère:',''));
max = parseInt(prompt('Choisissez le nombre maximum du nombre mystère:',''));
nombreMystere = Math.floor((max-min+1)*Math.random())+min
$("#vies").text(vies);
console.log(nombreMystere);
}





function clickValider(){
	if(partieGagnee()){
	};


if(nombre > nombreMystere){
	alert('Perdu, votre nombre est trop grand');
	console.log(vies--);
	$('#vies').text(vies);

}

else if(nombre < nombreMystere){
	alert('Perdu, votre nombre est trop petit');
	console.log(vies--);
	$('#vies').text(vies);
}

if(nombreMystere == nombre || vies == 0){
	demarrerPartie();
}

function partieGagnee(){
	nombre = parseInt($('#input').val(),10);
	return nombreMystere == nombre
	alert('GG GROS');

	function partiePerdue(){
		if(vies == 0){
			alert('T\' es un GROS NOOB')
		};
	}
}

}

demarrerPartie();


$('#button').click(function(){
	clickValider();
});
}









} // Ne pas oublier d'apeller la fonction


 // Ne pas oublier d'appeller la fonction












	//Math.floor((max-min+1)*Math.random())+min	

	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.
	//var rando = Math.floor(Math.random()*151);

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'










		// Récupérer le contenu de mon input

		// Comparer ce contenu au nombre mystère.
			/*
				Si le contenu est égal : 
				- afficher une alert Gagné
				- démarrer une nouvelle partie
				*/

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit

			// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/


