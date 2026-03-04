let Valeurs=[0,1,"","0",null,undefined,NaN,false,[],{}]
for(i=0;i<Valeurs.length;i++){
    console.log(Valeurs[i],"->",Boolean(Valeurs[i])?"thusty":"falsy","\n");
}