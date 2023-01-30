/*****************************
 * 6. BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.2. Boucle WHILE
  La boucle `while` permet de répéter des instructions tant qu'une condition est vérifiée.
  Syntaxe :
    while (condition) {
      // instructions exécutées tant que la condition est vérifiée
    }
*/

/* EXEMPLE 5 :
- Affichez en boucle une boîte de dialogue dans laquelle vous permettez à l'utilisateur
  d'entrer une lettre et informez-le qu'il doit saisir "X" pour sortir.
  Le message pourrait être : "Tapez une lettre ou X pour sortir : ".
- BONUS : Affichez ensuite dans la console la chaîne complète saisie par l'utilisateur
*/

// code de base sans le bonus
let str = prompt('appuyer sur X pour sortir');

while (str !== 'x'){
  console.log(str)
  str = prompt('appuyer sur X pour sortir');
}
console.log(str);

// code avec le bonus


