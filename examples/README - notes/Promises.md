# Qu’est-ce qu’une promesse ?

Pour commencer, nous utilisons les promesses pour développer de façon asynchrone. Une promesse (Promise) en JavaScript est un objet qui représente une valeur qui peut ne pas être disponible immédiatement.

On comprend donc que les promesses nous permettent d'exécuter des tâches asynchrones, sans utiliser le système de callback (limités dans certains cas).


# Exécuter une promesse

 La méthode then permet de définir une fonction qui sera appelée lorsque la promesse sera résolue avec succès. La syntaxe est la suivante :

`maPromesse.then(resultat => {
  // Traitement à effectuer avec la valeur de retour de la promesse
}).catch(erreur => {
  // Traitement à effectuer en cas d'erreur
});`


Les promesses en JavaScript peuvent être gérées à l'aide des méthodes then(), catch() et finally().

then() : pour gérer le succès de la promesse,

catch() : pour gérer les erreurs,

finally() : pour exécuter du code après que la promesse ait été résolue ou rejetée.