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



# Les propriétés d’une promesse
L’objet promise a deux propriétés :

State qui a trois états possibles :

pending : lorsque la promesse est en attente d'une réponse,

fulfilled ou resolved : lorsque la promesse est résolue avec succès et renvoie une valeur,

rejected : lorsque la promesse a échoué et renvoie une erreur,

Result, qui contient la valeur retournée par le développeur en paramètre de resolve() ou reject().