function numbers(fNum, sNum, tNum) {
    let sum = fNum + sNum + tNum;

    sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';


    console.log(sum);
}
numbers(9, 100, 1.1);

function intOrFloat(num1, num2, num3) {
    // sum nums
    let sum = num1 + num2 + num3;
    // convert to integer
    let convertedSum = Math.trunc(sum);
    // cqlo chislo
    //compare converted sum to original
    if (sum == convertedSum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
intOrFloat(100, 200, 303);

function nums() {
    let myNum = 3.14;

    console.log(Math.trunc(myNum)); // == 3
}
nums();