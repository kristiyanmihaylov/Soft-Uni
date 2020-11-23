function cake(input) {
    let cakeW = Number(input[0]);
    let cakeL = Number(input[1]);
    let index = 2;
    let cakeParts = input[index];
    let sumParts = 0;
    let isTrue = false;
    let cakeSize = cakeL * cakeW;

    while (cakeParts !== 'STOP') {
        if (cakeSize < sumParts) {
            isTrue = true;
            break;
        }
        sumParts += Number(cakeParts);//shtom ne e STOP togava da pravi deistvieto
        index++;//dava sledvashtiq index
        cakeParts = input[index];// za da ne chupq while cikula i da go ostavq
        //da si svurshi rabotata kato tursi dali ima "STOP" iz masiva
    }
    if (isTrue) {//ako svurshi tortata
        console.log(`No more cake left! You need ${sumParts-cakeSize} pieces more.`);
    } else if (cakeParts === 'STOP') {//ako imam komandata STOP
        console.log(`${cakeSize-sumParts} pieces are left.`);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"
]);