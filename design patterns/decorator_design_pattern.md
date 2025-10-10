# Le Patron de Conception Decorator

## Définition et utilisation du Decorator

Le **Decorator** est un patron de conception qui permet de **modifier le comportement d’un objet à la volée** en lui ajoutant de nouvelles fonctionnalités **sans modifier son code source**.  
Ce patron offre une manière élégante de **séparer les préoccupations**, en permettant d’ajouter des comportements spécifiques à des objets existants sans toucher à leur structure interne.

L’idée fondamentale est de **créer une classe ou une fonction qui enveloppe un objet existant**, en lui ajoutant des fonctionnalités supplémentaires. Cette entité enveloppeuse, appelée « **décorateur** », implémente la même interface ou les mêmes méthodes que l’objet original.  
Ainsi, les objets décorés peuvent être utilisés de la même manière que les objets non décorés, tout en bénéficiant de nouvelles capacités.

### Exemple typique
Une utilisation courante du Decorator est dans les interfaces graphiques, où il peut être employé pour **ajouter dynamiquement des bordures, des ombres ou des effets** à des objets visuels (boutons, cadres, icônes, etc.).  
Cela évite de créer une multitude de sous-classes pour chaque combinaison de styles possibles, car les décorateurs peuvent être **enchaînés** les uns aux autres pour créer des combinaisons infinies de fonctionnalités.

---

## Ma Réflexion

> *« Je pense que la fonction `withMilk` est ce qui fait le travail parce qu’elle est stockée dans une instance de la classe principale ou de l’interface.  
> La fonction fait que cette instance retourne l’objet passé, mais avant que l’objet soit retourné, elle modifie ou ajoute de nouvelles fonctions à l’instance créée avec le mot-clé `new`.  
> Et la magie se produit quand l’objet est passé en argument, ce qui réassigne l’instance et on obtient une nouvelle version enrichie de l’objet. »*

Mon analyse :  
- La **fonction décoratrice** reçoit un **objet existant**.  
- Elle **enregistre ses anciennes méthodes**, puis **en redéfinit ou ajoute de nouvelles**.  
- Elle **retourne le même objet**, désormais **amélioré**.  
- Ainsi, on **évite l’héritage inutile** : la classe de base reste simple, et chaque instance peut être enrichie uniquement des comportements nécessaires à son cas d’usage.

---

## Exemple en JavaScript

```js
class Coffee {
  cost() {}
  description() {}
}

class SimpleCoffee extends Coffee {
  cost() { return 5; }
  description() { return "Simple Coffee"; }
}

function withMilk(coffee) {
  const baseCost = coffee.cost();
  const originalDesc = coffee.description;

  coffee.cost = () => baseCost + 2;
  coffee.description = () => originalDesc.call(coffee) + ", milk";

  return coffee;
}

let myCoffee = new SimpleCoffee();
myCoffee = withMilk(myCoffee);

console.log(myCoffee.cost());        // 7
console.log(myCoffee.description()); // Simple Coffee, milk
