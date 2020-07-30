function solution(input) {
 
    let min = 100000; //min
 
    for(let i = 1; i < input.length; i++) {//taka gledam kolko sa dulgi chislata
        let num = Number(input[i]) //taka vadq chisloto ot diapazona
        if(num < min) { //ako chisloto e po malko ot min
            min = num;
        }
    }
    console.log(min);
    
}
solution(["2",
"100",
"99"]);
