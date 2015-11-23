// var x;
// x = 3;
// x += 3;
// x++;
// x=5*"ee";
// console.log(x);
// console.log("Température en degré Fereinheit : " + Number(Number(prompt("T°C :"))*9/5 + 32));

// var demain;
// var jour = "";

// function lendemain() {

// switch (jour.toLowerCase()) {
// 	case "" :
// 		jour = prompt("Quel jour sommes nous ?");
// 		lendemain();
// 	case "lundi" :
// 		demain = "mardi";
// 		break;
// 	case "mardi" :
// 		demain = "mercredi";
// 	    break;
// 	case "mercredi" :
// 		demain = "jeudi";
// 		break;
// 	case "jeudi" :
// 		demain = "vendredi";
// 		break;
// 	case "vendredi" :
// 		demain = "samedi";
// 		break;
// 	case "vendredi" :
// 		demain = "dimanche";
// 		break;
// 	case "dimanche" :
// 		demain = "lundi";
// 		break;
// 	default : console.log("Votre jour est mal orthographié");
// 	jour = prompt("Quel jour sommes nous ?");
// 	lendemain();
// }
// }

// lendemain();
// console.log("Demain nous serons " + demain);

// var mot = prompt("Tapez un mot !");

// function inverser(mot) {
// 	var n = mot.length	
// 	var motInverse = mot[n-1];
// 	for (i=2; i<=n; i++) {
// 		motInverse = motInverse + mot[n-i];
// 	}
// 	return motInverse;
// }

// console.log(mot);
// console.log(inverser(mot));

var noeud = {};
	
noeud.lettre = "A";
noeud.cout = 9;
noeud.afficher = function(){
var affichage = "le noeud " 
	+ this.lettre 
	+ " est accessible pour un coût de " 
	+ this.cout;
	return affichage;
};

console.log(noeud.afficher());




















