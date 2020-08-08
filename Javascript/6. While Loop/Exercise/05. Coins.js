function coins(input){
    let change = Number(input[0]);
    let coins = 0; //broq moneti
    while(change>0){ //dokato imam da vrushtam resto
        if(change>=2){
            change-=2;
        } else if(change>=1){
            change-=1;
        } else if(change>=0.5){
            change-=0.5;
        } else if(change>=0.2){
            change-=0.2;
        } else if(change>=0.1){
            change-=0.1;
        } else if(change>=0.05){
            change-=0.05;
        } else if(change>=0.02){
            change-=0.02;
        } else if(change>=0.01){
            change-=0.01;
        }
        change=Number(change.toFixed(2));
        coins++;
    }
    console.log(coins);
}
coins(["1.23"]);