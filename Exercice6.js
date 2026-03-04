let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

console.log(nom ?? "ayoub","->",nom,"\t",age ?? 19,"->",age,"\t",ville ?? "Marrakech","->",ville,"\t",score ?? 89,"->",score,"\t",actif ?? true,"->",actif);
console.log("\n");
console.log( nom || "ayoub","->",nom,"\t",age || 19,"->",age,"\t",ville || "Marrakech","->",ville,"\t",score || 89,"->",score,"\t",actif || true,"->",actif);
console.log("\n");
console.log(" nom   : ?? et || -> même résultat","\n","age   : ?? et || ->  résultat différent","\n","ville   : ?? et || ->  résultat différent","\n","score   : ?? et || -> même résultat","\n","actif   : ?? et || ->  résultat différent");
