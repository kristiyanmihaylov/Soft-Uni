function building(input) {
    let floorCount = Number(input[0]);
    let apartmentCount = Number(input[1]);

    for (let floor = floorCount; floor > 0; floor--) { //po etaji
        let result = ''; //za da imam nqkolko izhoda na 1 red
        for (let a = 0; a < apartmentCount; a++) { //po apartamenti
            if (floor === floorCount) {
                result += 'L';
            } else if (floor % 2 === 0) {
                result += 'O';
            } else {
                result += 'A';
            }
            result += '' + floor + a + ' '; //taka e sukrateniq variant
        }
        console.log(result); //otpechatvam edno ot 3te if-a
    }
}
building([
    '6',
    '4'
]);