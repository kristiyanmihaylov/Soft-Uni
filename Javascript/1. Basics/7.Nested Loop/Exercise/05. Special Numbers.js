function specialNum(input) {
    let inputNum = Number(input[0])
    let output = ''; // za da pribavi space i da gi dade na 1 red

    for (let number = 1111; number <= 9999; number++) {
        let numberString = number + ''; // za da e string
        let isSpecial = true;

        for (let index = 0; index < 4; index++) { //zashtoto vs chisla sa 4 cifreni

            let result = inputNum % Number(numberString[index]);

            if (result !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial === true) {
            output += number + ' ';
        }
    }
    console.log(output);
}
specialNum(['101010']);