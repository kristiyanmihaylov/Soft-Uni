function account(input){
    let index = 0;
    let sum = 0;
    let command = input[index];
    index++; /*za da chete vsqko sledvashto*/

    while(command !=='NoMoreMoney'){
        let currentMoney = Number(command);
        if(currentMoney<0){
            console.log('Invalid operation!')
            break;
        }
        console.log(`Increase: ${currentMoney.toFixed(2)}`);
        sum+=currentMoney;
        command=input[index];
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
account([
    "120",
    "45.55",
    "-150"
]);