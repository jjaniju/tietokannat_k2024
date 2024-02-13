const prompt = require('prompt-sync')();

var s1 =prompt("anna luku1:    ");
var num1 = parseFloat(s1);

var s2 =prompt("anna luku 2:     ");
var num2 = parseFloat(s2);
kumpisuurempi(num1,num2);

function kumpisuurempi(luku1,luku2){
if (luku1<luku2){
console.log ("luku2 on suurempi");
}
else if (luku1>luku2){
console.log ("luku1 on suurempi");
}
else {
console.log ("luvut ovat yhtäsuuret");

}

}


