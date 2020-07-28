function numbers(arg1){
    let num = Number(arg1);
    for(let n=1; n<=num; n+=3){
        console.log(n);
    }
}
numbers('10');