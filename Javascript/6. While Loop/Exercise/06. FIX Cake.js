function cake(input) {
    let cakeW = Number(input[0]);
    let cakeL = Number(input[1]);
    let index = 1;
    let cakeParts = input[index];
    let sumParts = 0;
    let isTrue = false;
    //Едно парче торта е с размер 1х1 см.
    let cakeSize = cakeL * cakeW;

    while (cakeParts !== 'STOP') {
        if (cakeSize < sumParts) {
            isTrue = true;
            break;
        }
        index++;
        cakeParts = Number(input[index]);
        sumParts += cakeParts;
    }
    if (isTrue) {
        console.log(`No more cake left! You need ${sumParts-cakeSize} pieces more.`);
    } else {
        console.log(`${sumParts} pieces are left.`);
    }
}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"
]);