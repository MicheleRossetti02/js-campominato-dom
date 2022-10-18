// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.


// selexione il bottone
let bottone = document.querySelector(".btn")

let container = document.querySelector(".container")

    // assegno un numero alle caselle


    // funzione che genera le caselle
    function casellegenerator(numero_caselle, containerEl,caselle_per_riga) {
        
        for (let i = 1; i <= numero_caselle; i++) {


            let casella =`<div class="casella aqua"> ${i}  </div>`;
            // casella.style.width =`calc(100% / ${caselle_per_riga})`
            containerEl.innerHTML += casella;

            // casellaMarkUp.innerText += numero_caselle;
        }
        
    }

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



    
})

//  const tabella1 = document.getElementById('griglia').value =1;
// function setselctor(numero_caselle, containerEl) {
    
// }





// // selexione il bottone
// let bottone2 = document.querySelector(".violet")

// // assegno un azione al bottone
// bottone2.addEventListener("click", function(){



//    // struttura del container
//     let container = document.querySelector(".container")

//     // assegno un numero alle caselle
//     let numero_caselle = 82;
    
//     // richiamo la function
//     casellegenerator(numero_caselle, container);
    

//     // funzione che genera le caselle
//     function casellegenerator(numero_caselle, containerEl) {
        
//         for (let i = 1; i < numero_caselle; i++) {


//             let casella =`<div class="casella_2 violet"> ${i}  </div>`;
//             containerEl.innerHTML += casella;

//             // casellaMarkUp.innerText += numero_caselle;
//         }
        
//     }

//     let listaCelle = document.querySelectorAll(".casella_2");

//     for (let i = 0; i < listaCelle.length; i++) {
//         let number = i+1;
//         const casellaAttuale = listaCelle[i];
//         casellaAttuale.addEventListener("click", function(){
//             console.log('Ho cliccato sulla casella ' + number);
//             casellaAttuale.classList.toggle("violet")
//             casellaAttuale.classList.toggle("viola")
//         })
        
//     }





    
// })








// // selexione il bottone
// let bottone3 = document.querySelector(".green")

// // assegno un azione al bottone
// bottone3.addEventListener("click", function(){




//    // struttura del container
//     let container = document.querySelector(".container")

//     // assegno un numero alle caselle
//     let numero_caselle = 50;
    
//     // richiamo la function
//     casellegenerator(numero_caselle, container);
    

//     // funzione che genera le caselle
//     function casellegenerator(numero_caselle, containerEl) {
        
//         for (let i = 1; i < numero_caselle; i++) {


//             let casella =`<div class="casella_3 green"> ${i}  </div>`;
//             containerEl.innerHTML += casella;

//             // casellaMarkUp.innerText += numero_caselle;
//         }
        
//     }


//     let listaCelle = document.querySelectorAll(".casella_3");

//     for (let i = 0; i < listaCelle.length; i++) {
//         let number = i+1;
//         const casellaAttuale = listaCelle[i];
//         casellaAttuale.addEventListener("click", function(){
//             console.log('Ho cliccato sulla casella ' + number);
//             casellaAttuale.classList.toggle("green")
//             casellaAttuale.classList.toggle("verde")
//         })
        
//     }




    
// })
