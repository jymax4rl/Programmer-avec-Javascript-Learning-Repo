 # Promesse any

 La méthode Promise.any() permet d'exécuter plusieurs promesses en parallèle et de retourner la première promesse résolue avec succès. Cette méthode ignore les promesses rejetées, car son but est de nous retourner la première résolue. En revanche, si toutes les promesses passées en argument sont rejetées, alors la méthode Promise.any() retourne une promesse rejetée avec un tableau contenant toutes les raisons de rejet des promesses.

`const promises = [
  Promise.reject('error 1'),
  Promise.resolve('success 1'),
  Promise.reject('error 2'),
  Promise.resolve('success 2')
];

Promise.any(promises)
  .then(result => {
    console.log(result); // 'success 1'
  })
  .catch(error => {
    console.log(error); // une exception ne sera pas lancée ici, car au moins une promesse a été résolue
  });`


  Dans cet exemple, nous avons créé un tableau « promises » contenant quatre promesses, deux rejetées et deux résolues. Nous avons ensuite appelé la méthode Promise.any() en passant ce tableau en argument.

Comme au moins une promesse a été résolue avec succès (Promise.resolve('success 1')), la méthode Promise.any() retourne une promesse résolue avec la valeur success 1. Nous avons ensuite utilisé la méthode .then() pour afficher la valeur retournée ('success 1') dans la console.

Si toutes les promesses passées en argument avaient été rejetées, la méthode Promise.any() aurait retourné une promesse rejetée avec un tableau contenant toutes les raisons de rejet des promesses (['error 1', 'error 2'] dans cet exemple). Nous aurions alors utilisé la méthode .catch() pour gérer cette erreur et afficher le tableau de raisons de rejet dans la console.