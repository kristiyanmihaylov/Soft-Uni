function sumNum(arg1){
    let numText = arg1;
    let sum = 0;
    for(i=0;i<numText.length;i++){
        let num = Number(numText[i]);
        sum+=num;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNum('1234');