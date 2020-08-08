function minNum(input) {
    let index = 0;
    let data = input[index];
    index++;
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (data !== 'Stop') {
        let currentNum = Number(data);
        if (currentNum < minNumber) {
            minNumber = currentNum;
        }
        data = input[index];
        index++;
    }
    console.log(minNumber);
}
minNum(["100",
    "99",
    "80",
    "70",
    "Stop"
]);