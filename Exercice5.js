let nombres=[0,NaN,Infinity,-Infinity,42,3.14,Number.MAX_SAFE_INTEGER+1,-0];
for(let i=0;i<nombres.length;i++){
    console.log(nombres[i],);
     if(Number.isNaN(nombres[i])) console.log("invalide");
      else if(!isFinite(nombres[i])) console.log("INFINIT");
      else  if( nombres[i]==-0) console.log("ZERO NEGATIVE");
       else  if(Number.isSafeInteger(nombres[i])) console.log("ENTIER SUR");
        else  if(!Number.isSafeInteger(nombres[i])) console.log("ENTIER HORS LIMITES");
        else console.log("decimal");
        console.log("\n");

}