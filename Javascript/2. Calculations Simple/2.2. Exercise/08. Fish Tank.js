function solve(smLenght, smWidth, smHeigh, percentage){
    smLenght = Number(smLenght);
    smWidth = Number(smWidth);
    smHeigh = Number(smHeigh);
    percentage = Number(percentage);

    let aquariumObem = smLenght*smWidth*smHeigh;
    let totalLiters = aquariumObem*0.001;
    let percent = percentage*0.01;
    let realLiters = totalLiters*(1-percent);

    console.log(realLiters);
}