```js

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

