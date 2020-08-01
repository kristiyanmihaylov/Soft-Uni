function multi(arg1){
    let num = Number(arg1);
    for(let i = 1;i<=10;i++){
        let result=i*num;
        console.log(`${i} * ${num} = ${result}`);
    }
}
multi(9);