function even(arg1){
    let n = Number(arg1);
    for(i=0;i<=n;i+=2){
        let result = Math.pow(2,i)
        console.log(result);
    }
}
even('5');