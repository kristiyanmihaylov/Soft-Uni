function building(input) {
    let lastFloor = Number(input[0]);
    let lastAppartment = Number(input[1]);

    for (let floor = lastFloor; floor > 0; floor--) {
        let result = ''; //tuk za da go izpolzvam nakraq da sa na 1 red
        for (let apartment = 0; apartment < lastAppartment; apartment++) {
            if (floor === lastFloor || lastFloor === 1) {
                result += 'L'; //pribavqm stringovete
            } else if (floor % 2 === 0) {
                result += 'O';
            } else if (floor % 2 !== 0) {
                result += 'A';
            }
            result += '' + floor + apartment + ' ';
        }
        console.log(result);
    }
}
building(['6', '4']);