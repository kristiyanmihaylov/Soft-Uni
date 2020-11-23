function vacation(inputData){
    let vacationCost = Number(inputData[0]);
    let savedMoney = Number(inputData[1]);
    let index = 2; // taka znam ot kude zapochva broeneto
    let days = 0; // vs dni
    let jessieAction = inputData[index];//save or spend money
    let spendDays = 0; //kolko dni e harchila
    while(spendDays<5 && savedMoney<vacationCost){
    // tuk pishem naobratno za da moje dokato
    //tova e true nie da vlizame v while cikul
        let actionMoney = Number(inputData[index+1]);//parite
        if(jessieAction === 'spend'){
            spendDays++;
            savedMoney=Math.max(0,(savedMoney-actionMoney));
            //zanulqva parite kogato tq e spestila
        } else if(jessieAction === 'save'){
            savedMoney+=actionMoney;
            spendDays=0;//taka prekratqvam seriata ot dni na harchene
        }
        days++;
        index+=2;//taka da stane ot 2&3 na 4&5
        jessieAction=inputData[index];
    }
    if(savedMoney>=vacationCost){
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(days);
    }
}
vacation([
    "2000",//za vacation
    "1000",//nalichni pari
    "spend",//vid deistvie na vseki 2 reda
    "1200",//suma kum deistvie
    "save",
    "2000"
]);