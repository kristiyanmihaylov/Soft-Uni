function even(arg1){
    let n = Number(arg1);
    for(let i = 0;i <=n; i+=2 ){
        let result = Math.pow(2,i); //purvoto chislo i vtoroto
        console.log(result);
    }
}
even(4);
// stepenite zapochvat ot 0
//Math.pow = povdiga i moga da rabotq sys stepenta
//i+=2 preskacham vsqka 2ra stoinost if i=0 => 2,4,6,.... 
