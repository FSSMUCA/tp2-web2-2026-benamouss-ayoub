let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


 let sousTotal=prix*quantite;
 let totoalFinal;

if(estMembre && codePromo==null) totoalFinal=sousTotal-(sousTotal/reductionPourcentage);
let nouveauSold=soldeCompte-totoalFinal;

 console.log("\n ===== RÉCAPITULATIF =====");
 console.log("Produit :",nomProduit);
 console.log("La quantite : ",quantite);
 console.log("Prix unit:",prix.toFixed(3),"DH");
 console.log("Sous-total:",sousTotal.toFixed(3),"DH");
console.log("Réduction :",(codePromo==null && estMembre) ? (reductionPourcentage)+"DH":0+"DH");
 console.log("Total:",totoalFinal.toFixed(3),"DH");
 console.log("Status: ",(soldeCompte>totoalFinal) ? "Paiement accepté" :"Solde insuffisant");
 console.log("Sold:",nouveauSold.toFixed(3),"DH");



