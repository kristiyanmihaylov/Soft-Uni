function racing(arg1, arg2, arg3){
    let fuel = Number(arg1);
    let consumption = Number(arg2);
    let laps = Number(arg3);
    let lastLap = 0;
    
    // mnogo dobre za da razbera konteksta za for loop
    for(let lap=1; lap<=laps; lap++){
        
            fuel-=consumption;
            consumption+=0.1; // se uvelichava e vqrnoto uslovie
            
            if(fuel<=0){
            lastLap = lap;
            break; //pogledni kak vuv for loop se polzva break;
        }
    }
    if(fuel>0){
        console.log('Congrats! You won the race!');
    } else {
        console.log(`You are out of fuel in round ${lastLap}!`);
    }
}
racing('100', '20', '5');