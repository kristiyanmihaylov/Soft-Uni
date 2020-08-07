function moving(input) {
    //Един кашон е с точни размери:  1m. x 1m. x 1m.
    let widthFreeSpace = input[0]
    let lengthFreeSpace = input[1]
    let heigthFreeSpace = input[2]
    let index = 3;
    let boxes = input[index];
    index++;
    let capacity = widthFreeSpace * lengthFreeSpace * heigthFreeSpace;
    let freeSpace = 0;

    while (boxes !== 'Done') {
        let boxesSpace = 0;
        boxes = Number(input[index]);
        index++;
        boxesSpace += boxes;
        continue;
    }
    freeSpace = capacity - boxesSpace;
    if (boxes === 'Done' && freeSpace > 0) {
        freeSpace = Math.abs(capacity - boxes);
        console.log(`${freeSpace} Cubic meters left.`);
    } else if (freeSpace <= 0) {
        freeSpace = Math.abs(capacity - boxes);
        console.log(`No more free space! You need ${freeSpace} Cubic meters more.`);
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