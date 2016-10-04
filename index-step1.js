$(document).ready(main);
// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){

		$('#button').click(function(){
			var nombre = parseInt($('#input').val(),10);
			console.log(nombre);
		});
	}
	
	
		if(nombre === 7){
			alert('Gagné');
		};
		

		// Récupérer le contenu de mon input






		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu


	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

	clickValider();

}