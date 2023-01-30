/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/*
EXEMPLE 1 :
- Affichez les nombres de 1 à 10
  - 1°) sans utiliser de boucle : écrivez toutes les instructions à la main, une par une */
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');
console.log('8');
console.log('9');
console.log('10');

/*
  - 2°) en utilisant la boucle FOR
- Écrivez la table d'évolution des variables
*/

// 1°) sans boucle
let i = 1;
console.log(i);
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
// 2°) avec boucle FOR
for (i=1; i<=5; i++){
  console.log(i)
}







/*
N.B. TABLE D'ÉVOLUTION DES VARIABLES :
  nbre      nbre < =10           console.log(nbre)        nbre++
nbre = 1,   1 < 10 true,           affiche 1,          nbre passe à 1+1 = 2
nbre = 2,   2 < 10 true,           affiche 2,          nbre passe à 2+1 = 3
...
nbre = 10,  10 <= 10 true,        affiche 2,          nbre passe à 10+1 = 11
nbre = 11,  11 <= 10 FALSE,       on sort de la boucle !
*/

