function building(input) {
    let floorCount = Number(input[0]);
    let apartmentCount = Number(input[1]);

    for (let floor = floorCount; floor > 0; floor--) { //po etaji otgore nadolu
        let result = ''; //za da imam vs izhodi po apartamenti na 1 red
        for (let a = 0; a < apartmentCount; a++) { //po apartamenti ot nai blizkoto do nai krainoto
            if (floor === floorCount) {
                result += 'L' + floor + a + ' ';
            } else if (floor % 2 === 0) {
                result += 'O' + floor + a + ' ';
            } else {
                result += 'A' + floor + a + ' ';
            }
        }
        console.log(result); //otpechatva vsichko
    }
}
building([
    '6',
    '4'
]);