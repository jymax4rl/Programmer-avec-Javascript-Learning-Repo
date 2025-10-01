```js

const Singleton = (() => {
  let instance;
 
  // Fonction qui crée l’instance unique de la classe
  function createInstance() {
    const object = new Object("Je suis l’instance unique !");
    return object;
  }
 
  // Méthode publique pour obtenir l’instance unique de la classe
  return {
    getInstance : function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Utilisation de la méthode publique pour obtenir l’instance unique
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// Vérification que les deux instances sont identiques
console.log(instance1 === instance2); // true
```

# 🧩 Exemple de Singleton en JavaScript

## Explication
Dans cet exemple, le **Singleton** est implémenté comme une **fonction anonyme auto-exécutée**, qui retourne un objet avec une méthode publique appelée `getInstance`.

- La méthode `getInstance` utilise une variable `instance` pour stocker l’instance unique de la classe.  
- Si cette variable est `null` ou `undefined`, la méthode `createInstance` est appelée pour créer une nouvelle instance.  
- La méthode `createInstance` crée simplement un objet contenant une chaîne de caractères indiquant qu’il s’agit de **l’instance unique**.  
- Une fois créée, l’instance est **stockée** dans la variable `instance` et **réutilisée** à chaque appel suivant.  

>[!NOTE]  
Deux appels consécutifs à `getInstance` retournent **le même objet**.  
La comparaison `instance1 === instance2` renvoie donc `true`.  

---

