/*
    Il programma dovrà:
    - chiedere all'utente il numero di chilometri da percorrere;
    - età del passeggero;
    - calcolare il prezzo totale del viaggio:
        • definito in base ai km (0.21 € al km)
        • sconto del 20% per i minorenni
        • sconto del 40% per gli over 65
        • limite decimali: 2 [xx.yy(OK) ; xx.yyzz...(KO)]
*/

// const userKm = document.getElementById("user-km");
// const userAge = document.getElementById("user-age");
// const pricePerKm = 0.21;

// LOGICA
const userKm = document.getElementById("user-km").value;
const userAge = document.getElementById("user-age").value;
const generateBtn = document.getElementById("generate-btn");
const pricePerKm = 0.21;

let kmRate = userKm * 0.21;
console.log(kmRate);

generateBtn.addEventListener("click", function() {
    const userKm = document.getElementById("user-km").value;
    document.getElementById("user-km-stamp").innerHTML = userKm;
    const userAge = document.getElementById("user-age");
    document.getElementById("user-age-stamp").value = userAge.options[userAge.selectedIndex].text;
});

// OUTPUT
if (userAge < 18){
    kmRate = (kmRate - (20 / 100 * kmRate)).toFixed(2);
    document.getElementById("user-km").innerHTML = userKm;
    
    document.getElementById("user-price").innerHTML = kmRate;
} 
else if (userAge >= 65){
    kmRate = (kmRate - (40 / 100 * kmRate)).toFixed(2);
    document.getElementById("user-km").innerHTML = userKm;

    document.getElementById("user-price").innerHTML = kmRate;
}
else{
    kmRate.toFixed(2);
    document.getElementById("user-km").innerHTML = userKm;

    document.getElementById("user-price").innerHTML = kmRate;
}