const speed = 2010;


const isDangerous = speed > 2000;


const maPromesse = new Promise((resolve, reject) => {
    // Traitement asynchrone

    // Si le traitement réussit, on appelle resolve() avec la valeur de retour
    if (!isDangerous) {
        setTimeout(resolve, 2000, 'plane landed successfully!');
    } else {
        // Si le traitement échoue, on appelle reject() avec l'erreur
        reject('plane crashed during landing!');

    }
});



maPromesse.then(result => {
    console.log('En attente de la promesse...');
    console.log('Résultat de la promesse:', result);
}).catch(error => {
    console.error('Erreur dans la promesse:', error);
});



