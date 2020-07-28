function even(arg1){
    let num = Number(arg1);
    for(i=0;i<=num;i+=2){
        let result = Math.pow(2,i)
        console.log(result);
    }
}
even('3');