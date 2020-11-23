function solve(arg1, arg2, arg3, arg4, arg5, arg6){
    let tripPrice = Number(arg1);
    let puzzleCnt = Number(arg2);
    let talkingDollCnt = Number(arg3);
    let teddyBearCnt = Number(arg4);
    let minionCnt = Number(arg5);
    let truckCnt = Number(arg6);

    let puzzlePrice = puzzleCnt*2.6;
    let talkingDollPrice = talkingDollCnt*3;
    let teddyBearPrice = teddyBearCnt*4.1;
    let minionPrice = minionCnt*8.2;
    let truckPrice = truckCnt*2;

    let totalToysPrice = puzzlePrice+talkingDollPrice+teddyBearPrice+minionPrice+truckPrice;
    let totalToysCnt = puzzleCnt+talkingDollCnt+teddyBearCnt+truckCnt+minionCnt;

    if(totalToysCnt >=25){
        totalToysPrice = totalToysPrice*0.75;
    }

    let finalPrice = totalToysPrice*0.9;
    
    if (finalPrice >=tripPrice){
        let moneyLeft = finalPrice-tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let moneyNeed = tripPrice-finalPrice;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);

    }
}