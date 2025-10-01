# 🏭 Le Patron de Conception Factory

## Définition
La **Factory** est un patron de conception (**design pattern**) qui permet de **créer des objets sans spécifier leur classe exacte**.  

Elle fournit une **interface commune** pour créer différents types d’objets en utilisant une méthode de fabrication.

---

## Principe de fonctionnement
- La **méthode de fabrication** décide **quelle classe d’objet instancier** en fonction des paramètres fournis.  
- L’idée derrière la Factory est de **séparer la création des objets de leur utilisation**.  
- Au lieu d’écrire directement `new Classe()` dans le code client, la **Factory** centralise la logique de création.  

>[!IMPORTANT]  
La méthode d’implémentation la plus courante de **Factory** consiste à utiliser une **fonction de fabrication**.  
- Cette fonction prend en compte les **paramètres fournis** pour déterminer **quelle classe d’objet créer**.  
- Elle retourne ensuite l’objet créé, qui peut être utilisé dans le code.

---

## Exemple concret
Imaginons une application de **traitement de paiements**.  
- Les paiements peuvent être effectués par **PayPal**, **carte de crédit**, ou **virement bancaire**.  
- Chaque type de paiement a une **implémentation différente**, mais tous partagent la même **interface**.

---

## Exemple (JavaScript)
>[!txt]
```js
// Interface commune
class Payment {
  pay(amount) {
    throw new Error("Méthode pay() doit être implémentée");
  }
}

// Implémentations concrètes
class PayPalPayment extends Payment {
  pay(amount) {
    return `Paiement de ${amount}€ via PayPal 💻`;
  }
}

class CreditCardPayment extends Payment {
  pay(amount) {
    return `Paiement de ${amount}€ par Carte de Crédit 💳`;
  }
}

class BankTransferPayment extends Payment {
  pay(amount) {
    return `Paiement de ${amount}€ par Virement Bancaire 🏦`;
  }
}

// Factory
class PaymentFactory {
  static createPayment(type) {
    if (type === "paypal") return new PayPalPayment();
    if (type === "credit") return new CreditCardPayment();
    if (type === "bank") return new BankTransferPayment();
    throw new Error("Type de paiement inconnu");
  }
}

// Utilisation
const paypal = PaymentFactory.createPayment("paypal");
console.log(paypal.pay(100)); // Paiement de 100€ via PayPal 💻

const credit = PaymentFactory.createPayment("credit");
console.log(credit.pay(200)); // Paiement de 200€ par Carte de Crédit 💳
