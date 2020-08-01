function sumNum(input){
    let index = 0;
    let needSum=Number(input[index]);
    //trqbvat mi chisla
    index++;
    let sum=0;
    while(sum<needSum){
        let currentNum=Number(input[index]);
        index++;
        sum+=currentNum;
    }
    console.log(sum);
}
sumNum(["100",
"10",
"20",
"30",
"40"]);