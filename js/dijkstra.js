// Objet couple
var couple = {
	lettre : "A",
	d : 0,
	init: function(l, d) {
		this.lettre = l;
		this.d = d;
	}
};

crCouple = function(l,d) {
	var newCouple = Object.create(couple);
	newCouple.init(l,d);
	return newCouple;
}

// Colonnes du tableau
var a = {};
a.nom = "A";
a.colonne = [crCouple("C",2),crCouple("D",2),crCouple("E",6),crCouple("F",4)];

var b = {};
b.nom = "B";
b.colonne = [crCouple("D",1),crCouple("E",2)];

var c = {};
c.nom = "C";
c.colonne = [crCouple("A",2),crCouple("E",8),crCouple("F",3),crCouple("H",7)];

var d = {};
d.nom = "D";
d.colonne = [crCouple("A",2),crCouple("B",1),crCouple("F",8),crCouple("G",9)];

var e = {};
e.nom = "E";
e.colonne = [crCouple("A",6),crCouple("B",2),crCouple("C",8)];

var f = {};
f.nom = "F";
f.colonne = [crCouple("A",4),crCouple("C",3),crCouple("D",8),crCouple("G",1)];

var g = {};
g.nom = "G";
g.colonne = [crCouple("D",9),crCouple("F",1),crCouple("H",2)];

var h = {};
h.nom = "H";
h.colonne = [crCouple("C",7),crCouple("G",2)];

// Tableau représentant le graphe
var graphe = [a,b,c,d,e,f,g,h];

minColonne = function(colonne) {
	var nextNode = colonne[0];
	for (i=0; i<=(colonne.length-2); i++) {
		if (nextNode.d>=colonne[i+1].d) {
			nextNode = colonne[i+1];
		}
	}
	return nextNode;
}

trouverIndice = function(lettre) {
	var indice;
	for (i=0; i<=(graphe.length-1); i++) {
		if (lettre.toUpperCase() === graphe[i].nom) {
			indice = i;
		}
	}
	return indice;
}

ajouterD = function(colonne, d) {
	for (i=0; i<=(colonne.length-1); i++) {
		colonne[i].d += d;
	}
}

supprimerLettre = function(colonne, lettre) {
	var colDouble = colonne;

	for (i=0; i<=(colDouble.length-1); i++) {
		if (colDouble[i].lettre === lettre) {
			colonne.splice(i,1);
		}
	}
	return colonne;
}

majColonneLive = function(indice, chemin, colonneLive) {
	for (i=0; i<=(graphe[indice].colonne.length-1); i++) {
		colonneLive.push(graphe[indice].colonne[i]);
	}
	console.log(colonneLive);
	var colLiveDouble = colonneLive;
	for (j=0; j<=(chemin.length-1); j++) {
		for (k=0; k<=(colLiveDouble.length-1); k++) {
			if (colLiveDouble[k].lettre === chemin[j]) {
				colonneLive = supprimerLettre(colonneLive, chemin[j]);
			}
		}
	}
	return colonneLive;
}

trouverChemin = function(cheminF, colonnesF) {
	var cheminDoubleF = cheminF;
	var i = cheminDoubleF.length-1;
	for (i=cheminDoubleF.length-1; i>=2; i-- ) {
		var k = colonnesF[i-2].length-1;
 		for (k=colonnesF[i-2].length-1; k>=0; k--) {
			if ((cheminDoubleF[i].lettre === colonnesF[i-2][k].lettre) &&
				cheminDoubleF[i].d === colonnesF[i-2][k].d) {
				cheminF.splice(i-1,1);
				k = -1;
			}
		}
	}
	return cheminF;
}

cloner = function(obj) {
    try{
        var copy = JSON.parse(JSON.stringify(obj));
    } catch(ex){
        alert("Gaz");
    }
    return copy;
}

plusCourtChemin = function(graphe,depart,arrivee) {
	var chemin = [];
	var cheminFull = [];
	var colonnesFull = [];
	// Déterminer l'indice du noeud de départ
	var indice = trouverIndice(depart);
	chemin.push(depart);
	cheminFull.push(crCouple(depart,0));
	// Départ
	var colonneLive = graphe[indice].colonne;
	var nextNode = minColonne(colonneLive);
	var cloneCol = cloner(colonneLive);
	colonnesFull.push(cloneColcloneCol);
	colonneLive = supprimerLettre(colonneLive, nextNode.lettre);
	console.log(nextNode.lettre + " : " + nextNode.d);
	
	while (arrivee !== nextNode.lettre) {
	// Ajouter nextNode.d aux d de la colonne correspondante à nextNode.lettre	
	chemin.push(nextNode.lettre);
	cheminFull.push(nextNode);
	indice = trouverIndice(nextNode.lettre);
	ajouterD(graphe[indice].colonne, nextNode.d);
	majColonneLive(indice, chemin, colonneLive);
	var cloneCol = cloner(colonneLive);
	colonnesFull.push(cloneCol);
	console.log(colonneLive);
	nextNode = minColonne(colonneLive);
	console.log(nextNode.lettre + " : " + nextNode.d);
	}

	cheminFull.push(nextNode);
	console.log("Le plus court chemin entre " + depart + " et " + arrivee +" dure " + nextNode.d + " min");
	cheminFull = trouverChemin(cheminFull, colonnesFull);
	var i = 0;
	var cheminLePlusCourt = "Le chemin le plus court est : "
	for (i=0; i<=cheminFull.length-1; i++) {
		cheminLePlusCourt += cheminFull[i].lettre;
	}
	console.log(cheminLePlusCourt);
}

plusCourtChemin(graphe,"E","H");








