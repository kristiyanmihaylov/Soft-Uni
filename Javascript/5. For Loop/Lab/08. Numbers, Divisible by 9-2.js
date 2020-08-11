function numDiv(arg1, arg2){
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let sum = 0;

    for(i=num1;i<num2;i++){ //purvoto uslovie
        if(i%9===0){
            sum+=i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let z=num1;z<num2;z++){ //vtoroto uslovie na izhod
        if(z%9===0){
            console.log(z);
        }
    }
}
numDiv('100','200');