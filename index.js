/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operatorStr = process.argv[2];
    let currentEval = Number(process.argv[3]);
    
    if(operatorStr !== 'plus' && operatorStr !== 'minus'){ //will either be undefined or a diff operator or a number
        console.log('MADE IT INSIDE')
        if(!!Number(operatorStr)/1 || !operatorStr){ // if its divisible by 1 and does not result in NaN or is undefined
            return "No operation provided...";
        }else{
            return `Invalid operation: ${operatorStr}`
        };
    }else if(!currentEval){
        return "No numbers provided...";
    };

    if(operatorStr === 'plus'){ ///coundn't figure out how to do this more efficiently 
        for(let i = 4; i< process.argv.length; i++){
            let currentNum = Number(process.argv[i]);
            currentEval += currentNum;
        }
    }else{
        for(let i = 4; i< process.argv.length; i++){
            let currentNum = Number(process.argv[i]);
            currentEval -= currentNum;
        }
    }
    return currentEval;
}

// process.argv[2] = 'modulu'
// console.log(calculator());




// Don't change anything below this line.
module.exports = calculator;
