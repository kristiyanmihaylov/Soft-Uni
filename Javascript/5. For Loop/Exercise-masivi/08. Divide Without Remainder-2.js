function divide(input){
    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    for(let i=1;i<=n;i++){
        let number = Number(input[i]);

        if(number%2==0){ // izpolzva se number zashtoto
            p1Count++;  //to e chisloto ot intervala
        }
        if(number%3==0){
            p2Count++;
        }
        if(number%4==0){
            p3Count++;
        }
    }
    let p1=(p1Count/n)*100;
    let p2=(p2Count/n)*100;
    let p3=(p3Count/n)*100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divide(["3",
"3",
"6",
"9"]);