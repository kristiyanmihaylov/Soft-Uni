function operations(arg1, arg2, arg3){
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;
    let result = 0;

    switch(operator){
        case '+':
            result = num1+num2;
            if(result%2 === 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        break;
        case '-':
            result = num1-num2;
            if(result%2 === 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        break;
        case '*':
            result = num1*num2;
            if(result%2 === 0){
                console.log(`${num1} ${operator} ${num2} = ${result} - even`);
            } else {
                console.log(`${num1} ${operator} ${num2} = ${result} - odd`);
            }
        break;
        case '/':
            result = num1/num2;
            if(num2>0){
            console.log(`${num1} / ${num2} = ${(result.toFixed(2))}`);
            } else if(num2 === 0 || num1 === 0 ){
                console.log(`Cannot divide ${num1} by zero`);
            }
        break;
        case '%':
            result=num1%num2;
            if(num2>0){
                console.log(`${num1} % ${num2} = ${result}`);
            } else if(num1 === 0 || num2 === 0){
                console.log(`Cannot divide ${num1} by zero`);
            }
    }
}