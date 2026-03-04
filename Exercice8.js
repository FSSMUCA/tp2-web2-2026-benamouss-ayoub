let nom = "Fatima"
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

age=Number(age);

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // wla dir  function validerEmail(email) {return emailPattern.test(email);}  

scoreJeu=parseInt(scoreJeu);

if(estAdmin==="false")estAdmin=false;
else  estAdmin=true;

nombreConnexions=Number(nombreConnexions);

console.log("================Raport d'utilesateur:===================");

console.log((nom !==null)?nom:"Inconnue");
console.log((!Number.isNaN(age) || age>0)?age:"Invalide age");
console.log(emailPattern.test(email)?email:"Invalide email");
console.log((!Number.isNaN(scoreJeu))?scoreJeu:0);
console.log(estAdmin);
console.log(derniereConnexion??"Jamais connecté");
console.log((nombreConnexions==0)?"aucun connexion":nombreConnexions)
