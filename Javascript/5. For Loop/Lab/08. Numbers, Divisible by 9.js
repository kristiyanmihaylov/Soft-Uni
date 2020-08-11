function divisible(arg1, arg2){
    let sum = 0; //promenliva za sumata - hubavo e da vkarvam kakvoto moga vuv promenliva
    let a = Number(arg1);
    let b = Number(arg2);
    for(let i = a; i<=b; i++){
        if(i % 9 === 0){
            sum+=i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let z = a; z<=b; z++){ // pravq vtori nezavisim for cycle
        if(z % 9 === 0){
            console.log(z); //tuk prosto otpechatvam chisloto i js go puska 1 pod drugo
        }
    }
}
divisible('100', '200');