function moving(input) {
    //Един кашон е с точни размери:  1m. x 1m. x 1m.
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let cubicSpace = widthFreeSpace * lengthFreeSpace * heigthFreeSpace;
    let freeSpace = true;

    let command = input[index];
    index++;

    while (command !== 'Done') {
        let box = Number(command);
        cubicSpace -= box;
        if (cubicSpace < 0) {
            freeSpace = false;
            console.log();
            break
        }
        command = input[index];
        index++;
    }
    if (freeSpace) {
        console.log();
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