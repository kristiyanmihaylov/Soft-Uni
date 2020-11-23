function accBalance(input){
    let totalSum = 0;
    let index = 0;
    let command = (input[index]); // ne se znae dali shte e chislo ili text
    index++;

    while(command !=='NoMoreMoney'){ //ako e razlichno shte e chislo
        let currentMoney = Number(command);
        if(currentMoney<0){ //ako e minus znachi invalidna
            console.log('Invalid operation!');
            break; //stop na while kum minus
        }
        console.log('Increase: ' +currentMoney.toFixed(2));
        totalSum+=currentMoney;
        command=input[index];
        index++;
    }
    console.log('Total: '+totalSum.toFixed(2));
}
accBalance(["120",
"45.55",
"-150"]);

/*(["120",
"45.55",
"-150"])
*/