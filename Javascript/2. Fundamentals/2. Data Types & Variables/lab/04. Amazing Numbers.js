function num(num1) {
    //convert to string
    let nunmAsString = num1.toString();
    let sum = 0;
    // tretirame string kato masiv

    //convert each char to number
    for (i = 0; i < nunmAsString.length; i++) {
        //sum numbers
        sum += Number(nunmAsString[i]);
    }
    //convert to string
    let sumAsString = sum.toString();

    //check if include 9
    if(sumAsString.includes('9')){
        console.log(`${num1} Amazing? True`);
    } else {
        console.log(`${num1} Amazing? False`);
    }
    // returns true or false
    
}
num(1233);