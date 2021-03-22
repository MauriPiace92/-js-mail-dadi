// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Presentare gioco:
var presenta= prompt ("Scrivi \"OK\" per iniziare a Giocare, verrenno lanciati 2 dadi e scoprirai se hai vinto!");
// generare numeri:
var randomUtente= Math.floor(Math.random() * 6) + 1;

var randomComputer=Math.floor(Math.random() * 6) + 1;

if (randomUtente > randomComputer){
    alert("HAI VINTO");
}else if (randomUtente < randomComputer){
    alert("Hai perso, tenta di nuovo!");
}else{
    alert("TUTTI FELICI; PAREGGIO!!");
}