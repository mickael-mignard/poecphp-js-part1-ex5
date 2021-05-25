// Add an event listener that calls displayResult function on button click
document.querySelector('input[type="submit"]').addEventListener('click', displayResult);

/**
 * Compute result after checking if inputs represents decimal numbers with isNan and indexOf functions
 * 
  */
function computeResult() {
    // Get inputs
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;

    // Replace comma by point if necessary
    number1 = number1.replace(',', '.');
    number2 = number2.replace(',', '.');

    // Check if inputs are numbers. If not script is stopped
    if(isNaN(number1) || isNaN(number2)){
        return;
    }

    // Check if inputs represents decimal numbers. If not, script is stopped.
    if ((number1.indexOf('.') == -1 || number1.indexOf('.') == number1.length - 1)
        || (number2.indexOf('.') == -1 || number2.indexOf('.') == number2.length - 1)) {             
        return;
    }    

    // Truncate first input and compute result
    number1 = Math.trunc(number1);
    return '<strong>Résultat = ' +  number1 * number2 + '</strong>';    
}


/**
 * Display result on HTML page
 */
function displayResult(){    
    let result = computeResult();
    let displaySpan = document.getElementById('result');
    if(result === undefined){
        displaySpan.innerHTML = '<strong>Aucun résultat ! Saisissez deux nombres décimaux !</strong>';
    }else{
        displaySpan.innerHTML = result;
    }    
}


// console.log("isNan" : " + isNaN("azerty"));
// console.log("Number.isNaN : " + Number.isNaN("azerty"));


// /**
//  * Compute result after checking if inputs represents decimal numbers with Number function and modulo
//  * 
//  */
// function computeResult() {
//     // Get inputs
//     let number1 = document.getElementById('number1').value;
//     let number2 = document.getElementById('number2').value;

//     // Replace comma by point if necessary
//     number1 = number1.replace(',', '.');
//     number2 = number2.replace(',', '.');

//     // Check if inputs represents decimal numbers. If not, script is stopped
//     if (!isFloat(number1) || !isFloat(number2)) {        
//         return;
//     }

//     // Truncate first input and calculate result
//     number1 = Math.trunc(number1);
//     return '<strong>Résultat = ' +  number1 * number2 + '<strong>';     
// }

// /**
//  * Check if input is a decimal number
//  * 
//  * @param input to check
//  * @returns true if decimal number
//  */
// function isFloat(input) {
//     return Number(input) && input % 1 != 0;
// }



// /**
//  * Compute result after checking if inputs represents decimal numbers with isNan function and regex
//  * 
//   */
//  function computeResult() {
//     // Get inputs
//     let number1 = document.getElementById('number1').value;
//     let number2 = document.getElementById('number2').value;

//     // Replace comma by point if necessary
//     number1 = number1.replace(',', '.');
//     number2 = number2.replace(',', '.');

//     // Check if inputs are decimal numbers. If not, script is stopped.
//     var regex = /^\d*\.\d*$/;
//     if (!number1.match(regex) || (!number2.match(regex))) { 
//         return        
//     } 

//     // Truncate first input and compute result
//     number1 = Math.trunc(number1);
//     return '<strong>Résultat = ' + number1 * number2 + '</strong>';    
// }