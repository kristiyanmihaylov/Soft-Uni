function maxNum(input){
    let index = 0;
    let data = input[index]; 
    index++;                 
    // taka pravq za koolekciq       
    //ne znam kolko sa kato broi
    //vhodnite danni
    let maxNumber = Number.MIN_SAFE_INTEGER; //chisloto na minimalnoto chislo

    while(data !=='Stop'){
        let currentNum=Number(data);
        if(currentNum>maxNumber){
            maxNumber=currentNum;
            //taka kazvam che ako stigne
           //tova veche shte e nai golqmoto mi chislo
        }
        data=input[index];
        index++;
    }
    console.log(maxNumber);
}
maxNum(["100",
"99",
"80",
"70",
"Stop"]);