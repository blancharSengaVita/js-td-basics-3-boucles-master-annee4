/*
BOUCLES - PRÉPA 1 : Une table de multiplication
Affichez les x premières valeurs de la table de multiplication choisie par l'utilisateur.
1. Demandez à l'utilisateur de choisir la table de multiplication qu'il souhaite afficher :
	"Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"
2. Demandez-lui combien de valeurs il souhaite voir pour cette table :
	"Combien de valeurs souhaitez-vous afficher pour cette table ?"
3. Affichez le résultat avec un titre :
	"Voici les … premières valeurs de la table de multiplication par … :"
N.B. Faites-le de deux manières différentes :
	1°) avec une boucle FOR
	2°) avec une boucle WHILE
*/

// avec FOR
const nb1 = parseInt(prompt("Quelle table de multiplication souhaitez-vous afficher ? La table de multiplication par"));

const nb2 = parseInt(prompt("Combien de valeurs souhaitez-vous afficher pour cette table ?"));

console.log(`voici les ${nb2} premieres valeurs de la tables par ${nb1}`);

// for (let i = 1; i <=nb2; i++){
//   console.log(`${nb1*i}`)
// }
// avec WHILE
let i = 1
while (i<= nb2){
  console.log(`${nb1*i}`);
  i++;
}