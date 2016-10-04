$(document).ready(pied);

// Fonction principale
function pied(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
		var rando = Math.floor(Math.random()*151);
	function clickValider(){
		var nombre = parseInt($('#input').val(),10);
		console.log(nombre);
		console.log(rando);
		


			if(rando === nombre){
				alert('Gagné');
			}
			else if(nombre > rando){
				alert('Perdu, votre nombre est trop grand');
			}else{
				alert('Perdu, votre nombre est trop petit');
			}
		} 
	

	$('#button').click(function(){
		clickValider();
	});


		// Récupérer le contenu de mon input

		// Stocker un nombre ENTIER généré "aléatoirement"

		// Comparer ce contenu à ce nombre
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon s'il est supérieur
			// Afficher une alert Perdu, votre nombre est trop grand

			// Sinon s'il est inférieur
			// Afficher une alert Perdu, votre nombre est trop petit
			
			
	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


};