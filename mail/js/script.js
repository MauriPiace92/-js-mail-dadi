// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// chiedi la  mail all'utente:
var mailUtente = prompt ("Scrivi la tua E-MAIL");

// crea lista mail per accedervi:
var listaMail = ["alfredo@gmail.com", "pietro45@libero.it", "francelotto98@virgilio.it","pietro45@libero.it", "filipporossi@outlook.it", "mariorossi21@yahoo.it", "popopoli4321@virgilio.it", "francofranchi34@libero.it"];
var controlFLag = false;
var currentName;

// faccio i controlli sulla listaMail per vedere se l'utente ne fa parte:
for (var i = 0 ; i < listaMail.length ; i++){ 

    currentName= listaMail[i];

    if (currentName == mailUtente){
        controlFLag= true;
    }
   
}

// Stampo il controllo
if (controlFLag === true){

    alert("OK, Puoi accedere!");

}else{
    alert("MI DISPIACE, non puoi accedere!");
}
