function lili(arg1, arg2, arg3){
    let liliAge = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toySinglePrice = Number(arg3);

    //kolkoto e po veroqtno da se izpulni funkciq tolkova
    // po nagore trqbva da se pishe v zadachite

    let piggyBank = 0; //1viq conteiner
    let toysCount = 0;//2riq conteiner
    let lastCashgift = 0;//info za kolko e $ posledniq podaruk kogato sym poluchaval pari
    // suzdavam gi izvun za da moga da vlqza v cikula i sled nego

    for(let bDay = 1; bDay<=liliAge; bDay++){
        //console.log(bDay); proverqvam godinite dali sa ok
        if(bDay%2 !==0){ //za chetno i razlichno ot nula
            toysCount+=1;
        } else {
            piggyBank+=(lastCashgift+9);//9 zashtoto brat i si vzima 1 lev ot 10te
            lastCashgift+=10;
        }
    }
    piggyBank+=(toysCount*toySinglePrice);
    //console.log(piggyBank);
    if(piggyBank>=washingMachinePrice){
        console.log(`Yes! ${(piggyBank-washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice-piggyBank).toFixed(2)}`);
    }
}
lili('10','170','6');