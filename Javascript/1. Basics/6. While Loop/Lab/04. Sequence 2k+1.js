function seq(input){
    let index = 0;
    let n = Number(input[index]);
    let k = 1;
    while(k<=n){
        console.log(k);
        k=k*2+1;
    }
}
seq(['31']);