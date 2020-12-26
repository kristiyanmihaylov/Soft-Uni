function calc(num, operator, secondNum) {
    result = 0;
    if (operator == '+') {
        result = num + secondNum;
    } else if (operator == '-') {
        result = num - secondNum;
    } else if (operator == '*') {
        result = num * secondNum;
    } else if (operator == '/') {
        result = num / secondNum;
    }
    console.log(result.toFixed(2));
}
calc(
    5,
    '-',
    10
);