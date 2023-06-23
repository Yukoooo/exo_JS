// Phase 5 Affichage du texte

/* exo 1
var nom = prompt ("Quel est ton nom?");
var prenom = prompt ("Quel est ton prénom ?");
alert("Ton nom est " + nom + "\nTon prénom es : " + prenom); */

/*exo 2
var nb1 = parseFloat(prompt("Veuillez entrer le premier nombre"));
var nb2 = parseFloat(prompt("Veuillez entrer le deuxième nombre"));
var produit = nb1 * nb2 ;

alert("Le produit des deux nombres est : " + produit) */

/*exo 3
var tCelsius = prompt("Entrez la température en degrés Celsius :");

var tFahrenheit = (tCelsius * 9/5) + 32;


alert("La température en degrés Fahrenheit est : " + tFahrenheit); */


//Phase 6 Les opérateurs

/* exo 1
var a = "100" ;
alert("Ceci est une chaîne de caractères : " + a); */

/*exo 2
var b = 100;
var dB = b-- ;
alert(dB);
alert(b) */

/*exo 3

var a = "100";
var c = 1.00 ;

c += parseFloat(a)

alert(c) ; */

/*exo 4
var d = true;
d = !d;
alert(d); */



//Phase 7 Instruction conditionnelles et alternatives

/*exo 1 Parité
var nb = prompt("Veuillez saisir un nombre :");

if (nb %2 == 0) {
    alert("Le nombre est pair") ;
}
else {console.log
    alert("Le nombre est impair") ;
} */


/*exo 2 Age
var AnneeDeNaissance = prompt("Veuillez insérer votre année de naissance:");
var AnneeActuelle = new Date().getFullYear();
var age = AnneeActuelle - AnneeDeNaissance;

if (age >= 18) {
  alert("Vous êtes majeur.");
} else {
  alert("Vous êtes mineur.");
} */

/*exo 3
var nb1 = parseInt(prompt("Veuillez saisir le premier nombre :"));
var nb2 = parseInt(prompt("Veuillez saisir le deuxième nombre :"));


var operateur = prompt("Entrez l'opérateur (+, -, *, /) :");
var resultat;

switch (operateur) {
  case "+":
    resultat = nb1 + nb2;
    break;
  case "-":
    resultat = nb1 - nb2;
    break;
  case "*":
    resultat = nb1 * nb2;
    break;
  case "/":
    if (nb2 !== 0) {
      resultat = nb1 / nb2;
    } else {
      alert("Vous ne pouvez pas faire une division par 0.");
    }
    break;
  default:
    alert("L'opération ne peut pas être faite");
}

if (resultat != undefined) {
  alert("Résultat : " + resultat);
} */

// JS 08 Les boucles
//voir exo 1 dans js08.html

/*exo 2
var N =  prompt("Veuillez insérer un nombre :");

for (var i = 0; i < N; i++){
    alert(i)
} */

/*exo3
var nb;
var somme = 0;
var count = 0;

do {
  nb = parseInt(prompt("Veuillez saisir un chiffre, si 0 cela stop le programme. :"));

  if ((nb)) {
    somme += nb;
    count++;
  }
} while (nb != 0);

var moyenne = somme / count;

console.log("Somme : " + somme);
console.log("Moyenne : " + moyenne); */

/*exo 4
var N = parseInt(prompt("Veuillez insérer le nombre de multiples à afficher : "));
var X = parseInt(prompt("Veuillez insérer le nombre entier : "));

for (var i = 1; i <= N; i++) {
  var multiple = i * X;
  console.log(i + " x " + X + " = " + multiple);
} */



/* exo 5
var myVar= prompt("Entrez un mot :");
var voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
var compteur = 0;

for (var p = 0; p < myVar.length; p++) {
  var chaine = myVar.substring(p, p + 1);
  if (voyelles.indexOf(chaine) !== -1) {
    compteur++;
  }
}

console.log("Le nombre de voyelles est : " + compteur); */


//                                  JS09 : Fonctions
/*exo 1

function produit() {
  var x = parseInt(prompt("Veuillez insérer le premier nombre :"));
  var y = parseInt(prompt("Veuillez insérer le multiplicateur :"));

  if (isNaN(x) || isNaN(y)) {
    alert("Veuillez saisir des nombres valides !");
    return;
  }

  var resultat = x * y;
  document.getElementById("resultat").innerText = "Le produit des deux nombres est : " + resultat;

}
produit()
function afficheImg(image) {
  document.getElementById('image-container').innerHTML = `<img src="${image}" alt="Image">` 
  document.getElementById('image-container').insertAdjacentHTML('afterend');
}



afficheImg('assets/img/papillon.jpg');
*/
/*exo 2
function strtok(str1, str2, n) {
  const words = str1.split(str2);

  if (n <= 0 || n > words.length) {
    return "";
  }

    <!-- exo JS 09
        <div id="image-container"></div>
    <div id='resultat'></div>
  return words[n - 1]; //
}
const str1 = "robert;dupont;amiens;80000";
const str2 = ";";
const n = 3;

const result = strtok(str1, str2, n);
alert(result); */


//                                                          JS10 Les tableaux      


/* const taille = parseInt(prompt("Entrez la taille du tableau :"));


if (isNaN(taille) || taille <= 0) {
  alert("La taille du tableau doit être un nombre entier positif !");
} else {

  const tableau = [];


  for (let i = 0; i < taille; i++) {
    const valeur = prompt(`Entrez la valeur ${i + 1} du tableau :`);
    tableau.push(valeur);
  }
  const resultDiv = document.getElementById("result");
  const tableauContent = tableau.join(", ");
  resultDiv.innerHTML = `Contenu du tableau : [${tableauContent}]`;
} */



//                                                          JS12 : Les objets natifs

/* const tableau = [];

let saisie = parseFloat(window.prompt("Veuillez saisir une valeur (Insérez 0 pour arrêter le programme):"));
while (saisie !== 0) {  if (!isNaN(saisie)) {
    tableau.push(saisie);
  } else {
    window.alert("VEuillez saisir une valeur numérique");
  }
  saisie = parseFloat(window.prompt("Veuillez saisir une valeur (Insérez 0 pour arrêter le programme) :"));
}0

const nombreValeurs = tableau.length;
const somme = tableau.reduce((acc, valeur) => acc + valeur, 0);
const moyenne = somme / nombreValeurs;


console.log("Nombre de valeurs saisies :", nombreValeurs);
console.log("Somme des valeurs :", somme);
console.log("Moyenne des valeurs :", moyenne); */

//                                                       JS16 : Les formulaires 

