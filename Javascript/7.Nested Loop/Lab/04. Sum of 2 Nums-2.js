function combinations(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let x = firstNumber; x <= secondNumber; x++) {
        for (let y = firstNumber; y <= secondNumber; y++) {
            combinations++;
            if (x + y === magicNumber) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
combinations(['1', '10', '5']);