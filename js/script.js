/**
 * Compute result
 * with isNan and indexOf to check if inputs are decimal numbers
  */
function computeResult() {
    // Get inputs
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;

    // Replace comma by point if necessary
    number1 = number1.replace(',', '.');
    number2 = number2.replace(',', '.');

    // Check if inputs are decimal numbers. If not, script is stopped.
    if ((!isNaN(number1) && number1.indexOf(".") == -1)
        || (!isNaN(number2) && number2.indexOf(".") == -1)) {
        alert("Saisissez deux nombres décimaux");       
        return;
    }

    // Truncate first input and compute result
    number1 = Math.trunc(number1);
    return "Résultat = " +  number1 * number2;    
}

/**
 * Display result
 */
function displayResult(){    
    var result = computeResult();
    if(result === undefined){
        document.getElementById('result').innerHTML = "Calcul impossible ! Saisir deux nombres décimaux !"
    }else{
        document.getElementById('result').innerHTML = result;
    }    
}


// /**
//  * Compute result
//  * with Number() and modulo to check if inputs are decimal numbers
//  */
// function computeResult() {
//     // Get inputs
//     let number1 = document.getElementById("number1").value;
//     let number2 = document.getElementById("number2").value;

//     // Replace comma by point if necessary
//     number1 = number1.replace(',', '.');
//     number2 = number2.replace(',', '.');

//     // Check if inputs are decimal numbers. If not, script is stopped
//     if (!isFloat(number1) || !isFloat(number2)) {
//         alert("Saisissez deux nombres décimaux");
//         return;
//     }

//     // Truncate first input and calculate result
//     number1 = Math.trunc(number1);
//     return "Résultat = " +  number1 * number2;     
// }

// /**
//  * Check if input is a decimal number
//  * 
//  * @param input to check
//  * @returns true if decimal number
//  */
// function isFloat(input) {
//     return Number(input) && input % 1 !== 0;
// }




// console.log(Number.isNaN("azerty"));
// console.log(isNaN("azerty"));