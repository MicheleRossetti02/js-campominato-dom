// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).



// Attenzione:
// **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// selexione il bottone
let bottone = document.querySelector(".btn")

let container = document.querySelector(".container")

//seleziono il massimo numero di bombe
const bombe = 16;

    // assegno un numero alle caselle


// assegno un azione al bottone
bottone.addEventListener("click", function(){


    let numero_caselle_1 = 100;
    // let numero_caselle_2 = 81;
    // let numero_caselle_3 = 49;
    celle_per_riga = Math.sqrt(numero_caselle_1)
    //richiamo la function
    // tabella 10x10
    casellegenerator(numero_caselle_1, container);
    // tabella 9x9
    // casellegenerator(numero_caselle_2, container);
    // // tabella 7x7
    // casellegenerator(numero_caselle_3, container);

    


    // faccio una lista delle celle usate
    let listaCelle = document.querySelectorAll(".casella");

    for (let i = 0; i < listaCelle.length; i++) {
        let number = i+1;
        const casellaAttuale = listaCelle[i];
        casellaAttuale.addEventListener("click", function(){
            console.log('Ho cliccato sulla casella ' + number);
            casellaAttuale.classList.toggle("aqua")
            casellaAttuale.classList.toggle("blue")
        })
        
    }

    const bombs = bombegenerator(1,numero_caselle_1)
    console.log(bombs);

    // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.



})




//  const tabella1 = document.getElementById('griglia').value =1;
// function setselctor(numero_caselle, containerEl) {
    
// }


    // funzione che genera le caselle
    function casellegenerator(numero_caselle, containerEl,) {
        
        for (let i = 1; i <= numero_caselle; i++) {


            let casella =`<div class="casella aqua"> ${i}  </div>`;
            // casella.style.width =`calc(100% / ${caselle_per_riga})`
            containerEl.innerHTML += casella;

            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }

    function bombegenerator(min,max){
        const bombs=[];
        while(bombs.length !== 16){
            
            const bomba = generatorecasellabomba(min,max);

            if(!bombs.includes(bomba)){
                bombs.push(bomba)
            }



        }
        return bombs
    }
    function generatorecasellabomba (min,max){
        return Math.ceil(Math.random()*(max-min +1))
    }