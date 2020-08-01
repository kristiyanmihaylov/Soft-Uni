function divide(input) {
    let n = Number(input[0]);// taka se zadava budesht interval
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0; // za budesht procent ot pNum
 
 
    for(let i = 1; i <= n; i++) {
        let number = Number(input[i]); //taka se zadava diapazon
 
        if(number % 2 == 0) {
            p1Count++;
        } //kogato ne e produljenie a drugo logichesko uslovie
        if(number % 3 == 0) {
            p2Count++;
        } 
        if(number % 4 == 0) {
            p3Count++;
        }
    }
 
    let p1 = (p1Count / n) * 100; // procenti
    let p2 = (p2Count / n) * 100;
    let p3 = (p3Count / n) * 100;
 
    console.log(`${p1.toFixed(2)}%`); //print console funkciq
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    
}
divide(["3",
"3",
"6",
"9"]);