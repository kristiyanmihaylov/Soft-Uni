function lily(arg1, arg2, arg3){
    let yearOld = Number(arg1);
    let priceMachine = Number(arg2);
    let priceOneToy = Number(arg3);
//vhodni danni
    let toysCount = 0;
    let piggyBank = 0;
    let lastCashGift = 0;
//uslovni danni 
    for(let Bday = 1; Bday<=yearOld; Bday++){
        if(Bday%2!==0){
            toysCount+=1;
        } else{
            piggyBank+=(lastCashGift+9);
            lastCashGift+=10;
        }
    }
//izpulnenie na deistvie 
    piggyBank+=(toysCount*priceOneToy);
    if(piggyBank>=priceMachine){
        console.log(`Yes! ${(piggyBank-priceMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceMachine-piggyBank).toFixed(2)}`);
    }
    //izhodni danni rezultat
}
lily('10', '170', '6');