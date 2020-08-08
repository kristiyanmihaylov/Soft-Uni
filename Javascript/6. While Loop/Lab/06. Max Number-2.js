function maxNum(input) {
    let index = 0;
    let data = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (data !== 'Stop'){
        let currentNum = Number(data);
        if (currentNum > maxNumber) {
            maxNumber = currentNum;
        }
        data = input[index];
        index++;
    }
    console.log(maxNumber);
}
maxNum([
    "45",
    "-20",
    "7",
    "99",
    "Stop"
]);