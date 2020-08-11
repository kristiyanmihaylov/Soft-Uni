function sumTwo(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNum = Number(input[2]);
    let isFound = false; //za da izpolzvam logichesko
    let counter = 0;
    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            counter++; //uvelichava predi da tursi logikata
            if (i + j === magicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        } //vsqko logichesko uslovie e edinstveno v for loop
    } // za da ako e vqrno da prekusne cikula kum izhod
    //ako ne e nameren znachi izvun for
    if (!isFound) { //razlichno ot isFound
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}
sumTwo([
    '1',
    '10',
    '5'
]);