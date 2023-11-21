// Script per visualizzare i dati della form in console
const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    
    console.log(km);
    console.log(eta);
    
    // Inserimento variabili
    const tariffa = 0.21;
    let full_price = km * tariffa;
    
    // Calcolo sconto in base all'età
    if (eta < 18){
        full_price = (full_price * 0.8).toFixed(2);
        console.log(full_price);
    }
    
    else if (eta > 65){
        full_price = (full_price * 0.6).toFixed(2);
        console.log(full_price);
    }
    else{
        full_price = (km * tariffa).toFixed(2);
        console.log(full_price);
    }

    // Output del prezzo in html
    document.getElementById("price_display").innerHTML = `In base ai chilometri che devi percorrere (${km}km), ed alla tua età (${eta}anni) il tuo biglietto avrà un costo di €${full_price}`;

    // Modifiche stile output
    document.getElementById('content_box').style.border = "1px solid white"

    document.getElementById('content_box').style.borderRadius = "25px"
});