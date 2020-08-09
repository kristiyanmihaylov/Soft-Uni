function moving(input) {
    //Един кашон е с точни размери:  1m. x 1m. x 1m.
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let cubicSpace = w * l * h;
    let isFreeSpace = true;

    let command = input[index];
    index++;

    while (command !== 'Done') {
        let box = Number(command);
        cubicSpace -= box;
        if (cubicSpace < 0) {
            isFreeSpace = false;
            console.log(`No more free space! You need ${Math.abs(cubicSpace)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (isFreeSpace) { //suzdavaiki buleva moga da q izpolzvam kato logichesko uslovie
        console.log(`${cubicSpace} Cubic meters left.`);
    }
}
moving([
    "10",
    "1",
    "2",
    "4",
    "6",
    "Done"
]);