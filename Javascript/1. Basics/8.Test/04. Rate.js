function rate(arg1, arg2) {
    let deposit = Number(arg1);
    let months = Number(arg2);
    let simple = deposit;
    let complex = deposit;

    for (let month = 1; month <= months; month++) {
        simple += 0.03 * deposit;
        complex += 0.027 * complex;
    }

    let difference = Math.abs(simple - complex);

    console.log(`Simple interest rate: ${simple.toFixed(2)} lv.`);
    console.log(`Complex interest rate: ${complex.toFixed(2)} lv.`);

    if (simple > complex) {
        console.log(`Choose a simple interest rate. You will win ${difference.toFixed(2)} lv.`);
    } else {
        console.log(`Choose a complex interest rate. You will win ${difference.toFixed(2)} lv.`);
    }
}
rate(
    "50555.50",
    "36"
);