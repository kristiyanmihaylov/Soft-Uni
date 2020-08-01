function factorial(arg1){
    let inputNum = Number(arg1);
    let result = 1; //kogato imame * ili / polzvame 1 a ne 0, za da nqma greshka v coda
    for(let num = 2; num<=inputNum; num++){
        //console.log(num); proverka num++
        //console.log(inputNum); proverka inputNum counts
        result*=num;
    }
    console.log(result);
}
factorial('4');