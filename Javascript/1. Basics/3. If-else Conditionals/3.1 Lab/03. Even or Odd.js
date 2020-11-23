function solve(num){
    num = Number(num);
    let result = num%2;
    if (result === 0){
        console.log('even');
    } else{
        console.log('odd');
    }
}