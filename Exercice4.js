let a=[0 ,  "",0,  "0",0 , false, "" , false, null  , undefined ,null , false , NaN , NaN,1 ,"1" ," \t\n " , 0];
let cmpt=0
for(let i=0;i<a.length-1;i+=2){
    console.log(` ${a[i]} == ${a[i+1]} ->`, a[i]==a[i+1] , "|" , ` ${a[i]} === ${a[i+1]} ->` , a[i]===a[i+1] , "\n" );
    if(a[i]==a[i+1]) cmpt++;

}
console.log("-------------------------------------------------------------- \n");
console.log(`${cmpt} paire(s) où == et === donnent des résultats différents`);