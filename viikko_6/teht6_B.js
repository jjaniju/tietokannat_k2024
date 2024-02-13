const prompt = require('prompt-sync')();


let word = prompt("anna sana: ");
onkoPalindromi(word);
function onkoPalindromi(sana){
let sanatperin = sana.split('').reverse().join('');
if (sana==sanatperin){
console.log("sana on palindromi")
}

else if (sana != sanatperin){
    console.log ("ei ole palindromi");
 }


}