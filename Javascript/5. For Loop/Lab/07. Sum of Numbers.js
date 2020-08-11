function sum(arg1){
    let numText = arg1+''; // tova veche e text = konkretenaciq
    let sum = 0; //pravq si promenliva za sumata
    for(let i = 0; i<numText.length; i++){
        let num = Number(numText[i]);//tuk pravq za index kum chislo ot cikula
        sum+=num;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sum('564891');