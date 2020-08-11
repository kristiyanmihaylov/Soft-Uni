function solve(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let output = '';//otpechatva na 1 red vsichko

    for (let number = startNumber; number <= endNumber; number++) {

        let numberAsString = number + '';
        let oddSum = 0;
        let evenSum = 0;

        for (let index = 0; index < numberAsString.length; index++) {

            let digit = Number(numberAsString[index]);
            
            if(index%2===0){
                evenSum+=digit;
            } else {
                oddSum+=digit;
            }
        }
        if(evenSum===oddSum){
            output+=numberAsString+' ';
        }
    }
    console.log(output);
}
solve([
    '100000',
    '100050'
]);