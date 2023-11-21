// const tariffa = 0.21;
// let full_price = km * tariffa;

// if (eta < 18){
//     full_price = full_price * 0.8;
//     console.log(full_price);
// }

// else if (eta > 65){
//     full_price = full_price * 0.6;
//     console.log(full_price);
// }


// Script per visualizzare i dati della form in console
const button = document.querySelector('.btn');

button.addEventListener('click', function(){

    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;

    console.log(km);
    console.log(eta);
});
